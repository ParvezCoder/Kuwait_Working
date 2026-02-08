# 🤖 Corp-Digital AI Chatbot System

## Overview
The Corp-Digital AI Chatbot is an intelligent customer service solution powered by Google's Gemini AI. It automatically handles customer inquiries about services and collects contact information when it cannot provide specific answers.

## ✨ Features

### **AI-Powered Responses**
- **Gemini AI Integration**: Uses Google's latest AI model for intelligent responses
- **Company Knowledge**: Trained on Corp-Digital's services and information
- **Professional Communication**: Maintains brand voice and professionalism

### **Smart Contact Collection**
- **Automatic Detection**: AI identifies when it needs more information
- **Contact Form**: Seamlessly collects email/phone when needed
- **Database Storage**: All contacts saved for follow-up

### **Admin Management**
- **Contact Dashboard**: View all chatbot interactions
- **Status Tracking**: Mark contacts as new, contacted, or closed
- **Analytics**: Track inquiry volume and response rates

## 🚀 Installation

### **1. Dependencies**
```bash
npm install @google/generative-ai react-icons
```

### **2. API Key Configuration**
The chatbot uses the provided Gemini API key:
```
AIzaSyD6i3zulvWFNEETKZCtcvMUNZwTzb6edNs
```

### **3. Database Setup**
The system automatically creates the required `CHATBOT_CONTACTS` table in your SQLite database.

## 📱 How It Works

### **For Customers**
1. **Chat Button**: Blue robot icon appears on all pages
2. **Ask Questions**: Type questions about services
3. **AI Response**: Get instant, accurate answers
4. **Contact Form**: If AI can't help, provide contact info
5. **Follow-up**: Company team contacts you directly

### **For AI Responses**
The chatbot is trained to:
- Answer questions about IT solutions
- Explain software development services
- Provide business consulting information
- Handle digital transformation queries
- Politely request contact info when needed

## 🛠️ Admin Management

### **Access Chatbot Contacts**
- **URL**: `/admin/chatbot-contacts`
- **Features**: View, filter, and manage all contacts

### **Contact Statuses**
- **🆕 New**: Fresh inquiries requiring attention
- **📞 Contacted**: Team has reached out to customer
- **✅ Closed**: Inquiry resolved successfully

### **Actions Available**
- **View Details**: See full conversation and contact info
- **Mark Contacted**: Update status when team responds
- **Mark Closed**: Complete the inquiry process
- **Filter Views**: Sort by status for better organization

## 📊 Database Schema

### **CHATBOT_CONTACTS Table**
```sql
CREATE TABLE CHATBOT_CONTACTS (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,                    -- Customer name (optional)
  email TEXT,                   -- Email address
  phone TEXT,                   -- Phone number
  message TEXT,                 -- Additional message
  conversationId TEXT,          -- Unique chat session ID
  source TEXT DEFAULT 'chatbot', -- Lead source
  status TEXT DEFAULT 'new',    -- Inquiry status
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## 🔧 Configuration

### **Company Information**
The AI is trained with:
- **Company Name**: Corp-Digital
- **Services**: IT Solutions, Software Development, Business Consulting
- **Specialties**: Web Apps, Mobile Apps, ERP, CRM, Infrastructure
- **Location**: Kuwait
- **Website**: corp.digital53.com

### **AI Behavior**
- **Professional Tone**: Always helpful and courteous
- **Service Focus**: Primarily handles service-related questions
- **Contact Collection**: Automatically requests info when needed
- **Fallback Handling**: Graceful error handling with contact prompts

## 📈 Analytics & Reporting

### **Dashboard Metrics**
- **Total Contacts**: Overall inquiry volume
- **New Inquiries**: Unprocessed leads
- **Contacted**: In progress responses
- **Closed**: Completed inquiries

### **Performance Tracking**
- **Response Time**: How quickly AI responds
- **Contact Rate**: Percentage requiring human follow-up
- **Resolution Rate**: Successfully closed inquiries

## 🚨 Troubleshooting

### **Common Issues**

#### **Chatbot Not Responding**
1. Check Gemini API key validity
2. Verify network connectivity
3. Check browser console for errors

#### **Contact Form Not Saving**
1. Verify database permissions
2. Check API endpoint availability
3. Validate form data requirements

#### **AI Responses Poor Quality**
1. Review company context in API
2. Check message formatting
3. Verify API response handling

### **Debug Mode**
Enable console logging for troubleshooting:
```javascript
// In chatbot API
console.log('AI Response:', aiResponse);
console.log('Contact Detection:', isAskingForContact);
```

## 🔒 Security & Privacy

### **Data Protection**
- **Contact Info**: Stored securely in local database
- **Conversation History**: Not permanently stored
- **API Security**: Gemini API key protected

### **User Privacy**
- **Optional Information**: Name is not required
- **Minimal Data**: Only essential contact details collected
- **Secure Storage**: Database access controlled

## 📱 Mobile Responsiveness

### **Design Features**
- **Floating Button**: Always accessible on mobile
- **Responsive Chat**: Adapts to screen sizes
- **Touch Friendly**: Optimized for mobile interaction
- **Keyboard Support**: Handles mobile keyboards properly

## 🔄 Integration Points

### **Existing Systems**
- **Database**: Uses existing SQLite setup
- **Admin Panel**: Integrates with current admin system
- **Styling**: Consistent with website theme
- **Navigation**: Added to admin dashboard

### **Future Enhancements**
- **CRM Integration**: Connect with customer management systems
- **Email Automation**: Automatic follow-up emails
- **Analytics Dashboard**: Advanced reporting and insights
- **Multi-language Support**: Arabic and English responses

## 📞 Support & Maintenance

### **Regular Tasks**
- **Monitor AI Responses**: Ensure quality and accuracy
- **Update Company Info**: Keep service details current
- **Review Contacts**: Follow up on new inquiries
- **Performance Review**: Analyze response effectiveness

### **Updates & Maintenance**
- **API Key Rotation**: Regular security updates
- **Context Updates**: Refresh company information
- **Response Training**: Improve AI knowledge base
- **System Monitoring**: Check for errors and issues

## 🎯 Best Practices

### **For Admins**
1. **Regular Monitoring**: Check new contacts daily
2. **Quick Response**: Contact new leads within 24 hours
3. **Status Updates**: Keep contact statuses current
4. **Quality Review**: Monitor AI response quality

### **For Customers**
1. **Clear Questions**: Ask specific service questions
2. **Contact Info**: Provide accurate email/phone
3. **Follow-up**: Respond to company outreach
4. **Feedback**: Report any issues or concerns

## 📚 API Reference

### **Chatbot Endpoint**
```
POST /api/chatbot
Body: { message, conversationId, userInfo }
Response: { response, isAskingForContact, conversationId, timestamp }
```

### **Contact Collection Endpoint**
```
POST /api/chatbot-contact
Body: { name, email, phone, message, conversationId, source }
Response: { message, id }
```

### **Contact Management Endpoint**
```
GET /api/chatbot-contacts          # Fetch all contacts
PUT /api/chatbot-contacts          # Update contact status
DELETE /api/chatbot-contacts       # Delete contact
```

## 🎉 Success Metrics

### **Key Performance Indicators**
- **Response Accuracy**: AI answers customer questions correctly
- **Contact Collection**: Percentage of inquiries requiring follow-up
- **Customer Satisfaction**: Positive feedback on chatbot experience
- **Lead Conversion**: Contacts that become customers

### **Business Impact**
- **24/7 Availability**: Always-on customer support
- **Reduced Response Time**: Instant answers to common questions
- **Lead Generation**: Automatic collection of interested prospects
- **Brand Enhancement**: Professional, tech-forward image

---

**Need Help?** Contact the development team for technical support or feature requests.
