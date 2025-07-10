import { SidebarItem } from "@/types/sidebar";

// Define a type for the structure of your sidebar data
export type SidebarData = {
  favourites: SidebarItem[];
  today: SidebarItem[];
  yesterday: SidebarItem[];
  previous?: SidebarItem[]; // Optional: if you plan to have a 'previous' category
};

// Mock data for the sidebar sections
export const MOCK_SIDEBAR_DATA: SidebarData = {
  favourites: [
    { id: "1", title: "Investment Opportunities and Market Analysis", color: "#84764C", icon: "opportunity", hasMenu: true },
    { id: "2", title: "Financial Independence Planning Strategy", color: "#744C84", icon: "strategy", hasMenu: true },
    { id: "3", title: "Cryptocurrency Investment Research", color: "#84764C", icon: "crypto", hasMenu: true },
    { id: "4", title: "Real Estate Investment Fundamentals", color: "#84764C", icon: "realestate", hasMenu: true },
    { id: "5", title: "Stock Market Analysis and Trading", color: "#84764C", icon: "stock", hasMenu: true },
    { id: "6", title: "Passive Income Generation Methods", color: "#744C84", icon: "passive", hasMenu: true },
    { id: "7", title: "Portfolio Diversification Strategies", color: "#84764C", icon: "portfolio", hasMenu: true },
    { id: "8", title: "Tax Optimization and Planning", color: "#744C84", icon: "tax", hasMenu: true },
  ],
  today: [
    { id: "9", title: "Morning Market Updates and Analysis", color: "#84764C", icon: "morning", hasMenu: true },
    { id: "10", title: "Passive Income Strategies for Beginners", color: "#744C84", icon: "beginner", hasMenu: true },
    { id: "11", title: "Cryptocurrency News and Trends", color: "#84764C", icon: "news", hasMenu: true },
    { id: "12", title: "Personal Finance Management Tips", color: "#744C84", icon: "finance", hasMenu: true },
    { id: "13", title: "Investment Portfolio Review Session", color: "#84764C", icon: "review", hasMenu: true },
    { id: "14", title: "Economic Indicators and Market Impact", color: "#744C84", icon: "economic", hasMenu: true },
    { id: "15", title: "Retirement Planning Discussion", color: "#84764C", icon: "retirement", hasMenu: true },
  ],
  yesterday: [
    { id: "16", title: "Stock Market Performance Analysis", color: "#84764C", icon: "performance", hasMenu: true },
    { id: "17", title: "Passive Income Research and Planning", color: "#744C84", icon: "research", hasMenu: true },
    { id: "18", title: "Investment Opportunities in Tech Sector", color: "#84764C", icon: "tech", hasMenu: true },
    { id: "19", title: "Financial Goal Setting and Tracking", color: "#744C84", icon: "goal", hasMenu: true },
    { id: "20", title: "Market Volatility and Risk Management", color: "#84764C", icon: "volatility", hasMenu: true },
    { id: "21", title: "Alternative Investment Options", color: "#744C84", icon: "alternative", hasMenu: true },
  ],
};

// Mock data for user tokens (for ProgressBar)
export const MOCK_TOKENS = { current: 1, max: 3 };

// Mock data for initial chat messages on the main screen
// This would eventually come from a specific chat's message history API
export const MOCK_CHAT_MESSAGES = [
  {
    id: "msg1",
    sender: "AI",
    text: "Hello! I'm your AI assistant. How can I help you today?",
    timestamp: "2025-07-10T10:00:00Z",
  },
  {
    id: "msg2",
    sender: "user",
    text: "Can you tell me about investment strategies?",
    timestamp: "2025-07-10T10:01:00Z",
  },
  {
    id: "msg3",
    sender: "AI",
    text: "Certainly! There are various investment strategies...",
    timestamp: "2025-07-10T10:01:30Z",
  }
];

// Mock data for prompt suggestions (for PromptSuggestions component)
export const MOCK_PROMPT_SUGGESTIONS = [
  "What are the best passive income streams?",
  "Explain cryptocurrency basics.",
  "How to build a diversified investment portfolio?",
  "Latest trends in real estate investment."
];

// If you have welcome screen data (e.g., user name for "Welcome back, [Name]!")
export const MOCK_WELCOME_DATA = {
  userName: "Investor"
};