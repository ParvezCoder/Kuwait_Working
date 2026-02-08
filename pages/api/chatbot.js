import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI('AIzaSyD6i3zulvWFNEETKZCtcvMUNZwTzb6edNs');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, conversationId, userInfo } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Company information for the AI to use
    const companyContext = `
    You are a helpful customer service representative for Corp-Digital, an IT solutions and technology company. 
    
    Company Information:
    - Name: Corp-Digital
    - Services: IT Solutions, Software Development, Business Consulting, Digital Transformation
    - Specialties: Web Applications, Mobile Apps, ERP Systems, CRM Solutions, IT Infrastructure
    - Location: Kuwait
    - Website: corp.digital53.com
    
    Your role is to:
    1. Answer questions about our services professionally and accurately
    2. If you don't know something specific, politely ask for their email or phone number
    3. Always be helpful and professional
    4. Encourage them to provide contact information for follow-up
    
    IMPORTANT: If you cannot answer a question or if the user needs detailed consultation, 
    ask them to provide their email address or phone number so our team can contact them directly.
    
    Current user message: ${message}
    `;

    // Generate AI response
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
    const result = await model.generateContent(companyContext);
    const response = await result.response;
    const aiResponse = response.text();

    // Check if AI is asking for contact info
    const isAskingForContact = aiResponse.toLowerCase().includes('email') || 
                               aiResponse.toLowerCase().includes('phone') ||
                               aiResponse.toLowerCase().includes('contact');

    return res.status(200).json({
      response: aiResponse,
      isAskingForContact,
      conversationId: conversationId || Date.now().toString(),
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Chatbot error:', error);
    return res.status(500).json({ 
      error: 'Failed to process message',
      fallbackResponse: "I'm sorry, I'm experiencing technical difficulties. Please provide your email address or phone number so our team can assist you directly."
    });
  }
}
