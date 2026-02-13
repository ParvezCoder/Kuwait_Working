"use client";
import React, { useEffect } from "react";
import { createChat } from "@n8n/chat";

const Chatbot = () => {
  useEffect(() => {
	createChat({
	  webhookUrl:
		"https://coderr7.app.n8n.cloud/webhook/9d109148-cd12-4fbe-a4d7-ac9c3c4605e2/chat",
	  webhookConfig: {
		method: "POST",
		headers: {},
	  },
	  target: "#n8n-chat",
	  mode: "window",
	  chatInputKey: "chatInput",
	  chatSessionKey: "sessionId",
	  loadPreviousSession: true,
	  metadata: {},

	  showWelcomeScreen: false,
	  defaultLanguage: "en",
	  initialMessages: [
		"👋 Hello! I'm A.I Assistant of Parvez Ahmed.",
		// "How can I help you today?",
	  ],
	  i18n: {
		en: {
		  title: "🤖 AI Chatbot of Parvez Ahmed",
		  subtitle: "",
		  // subtitle: "Ask me anything — I’m here to assist you 24/7!",
		  footer: "Powered by ReXson Solution",
		  getStarted: "Start Chat",
		  inputPlaceholder: "Type your question here...",
		  closeButtonTooltip: "Close chat", // ✅ Added this line
		},
	  },
	  enableStreaming: false,
	});
  }, []);

  return null;
};

export default Chatbot;
