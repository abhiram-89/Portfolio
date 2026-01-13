"use client"

import { useState, useRef, useEffect } from "react"

interface Message {
  id: string
  type: "bot" | "user"
  content: string
  timestamp: Date
  showMenu?: boolean
  isHtml?: boolean
}

const menuFollowups = [
  { label: "📂 Projects", value: "projects" },
  { label: "💼 Services", value: "services" },
  { label: "📞 Contact", value: "contact" },
]

const projects = [
  {
    title: "AI-Powered Interview",
    description: "Intelligent interview preparation platform using AI to conduct mock interviews with real-time feedback.",
    tags: ["React.js", "Mui", "Python", "FastAPI", "Autogen", "MongoDB"],
    gitLink: "https://github.com/abhiram-89/AI-powered-interview.git",
  },
  {
    title: "Hotel Budget Forecast",
    description: "Predictive analytics tool for hotel revenue management with AI-driven budget forecasting.",
    tags: ["Python", "Pandas", "ML", "FastAPI", "FastMCP", "React.js", "MongoDB", "Prophet"],
    gitLink: "https://github.com/abhiram-89/Hotel-Budget-forecast.git",
  },
  {
    title: "AI Business Automation",
    description: "Comprehensive business automation solution leveraging AI to streamline workflows.",
    tags: ["Python", "FastAPI", "Autogen", "React.js", "MongoDB"],
    gitLink: "https://github.com/abhiram-89/AI-Business-Automation.git",
  },
  {
    title: "Weather Insight",
    description: "Real-time weather visualization dashboard with interactive maps and detailed forecasts.",
    tags: ["Html", "Weather API", "Css", "JavaScript"],
    gitLink: "https://github.com/abhiram-89/Weather-Insight.git",
  },
]

const services = [
  {
    title: "Web Development",
    description: "Create responsive, fast, and SEO-optimized websites using modern technologies.",
    icon: "🌐",
    features: ["React.js", "Responsive Design", "Performance Optimization"],
  },
  {
    title: "Full Stack Development",
    description: "End-to-end application development from database design to deployment.",
    icon: "⚙️",
    features: ["Frontend UI", "Backend APIs", "Database Design", "Cloud Deployment"],
  },
  {
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed with user experience in mind.",
    icon: "🎨",
    features: ["Design Systems", "Prototyping", "User Research"],
  },
  {
    title: "Logo Design",
    description: "Creative and professional logo designs that represent your brand.",
    icon: "💢",
    features: ["Attractive Logos", "Proactive Designs"],
  },
]

interface AIChatProps {
  onClose: () => void
}

export default function AIChat({ onClose }: AIChatProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [hasGreeted, setHasGreeted] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (!hasGreeted) {
      const greeting: Message = {
        id: "1",
        type: "bot",
        content: "Hello! 👋 Welcome to Abhiram's Portfolio Buddy. I'm here to help you explore my work, services, and get in touch. What would you like to know about?",
        timestamp: new Date(),
        showMenu: true,
      }
      setMessages([greeting])
      setHasGreeted(true)
    }
  }, [hasGreeted])

  const generateProjectsHTML = () => {
    return `
      <div class="space-y-4 mt-3">
        <p class="font-semibold text-sm mb-3">🎨 Featured Projects:</p>
        ${projects.map((project, idx) => `
          <div class="bg-white/5 dark:bg-black/20 rounded-lg p-3 border border-white/10">
            <h4 class="font-bold text-sm mb-1">${idx + 1}. ${project.title}</h4>
            <p class="text-xs opacity-80 mb-2">${project.description}</p>
            <div class="flex flex-wrap gap-1 mb-2">
              ${project.tags.slice(0, 4).map(tag => `
                <span class="px-2 py-0.5 bg-white/10 rounded text-xs">${tag}</span>
              `).join('')}
              ${project.tags.length > 4 ? `<span class="px-2 py-0.5 bg-white/10 rounded text-xs">+${project.tags.length - 4}</span>` : ''}
            </div>
            <a href="${project.gitLink}" target="_blank" rel="noopener noreferrer" 
               class="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300">
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
          </div>
        `).join('')}
      </div>
    `
  }

  const generateServicesHTML = () => {
    return `
      <div class="space-y-3 mt-3">
        <p class="font-semibold text-sm mb-3">💼 Services I Offer:</p>
        ${services.map((service, idx) => `
          <div class="bg-white/5 dark:bg-black/20 rounded-lg p-3 border border-white/10">
            <div class="flex items-start gap-2 mb-2">
              <span class="text-2xl">${service.icon}</span>
              <div class="flex-1">
                <h4 class="font-bold text-sm">${service.title}</h4>
                <p class="text-xs opacity-80 mt-1">${service.description}</p>
              </div>
            </div>
            <div class="flex flex-wrap gap-1 mt-2">
              ${service.features.map(feature => `
                <span class="px-2 py-0.5 bg-white/10 rounded text-xs flex items-center gap-1">
                  <span class="w-1 h-1 rounded-full bg-green-400"></span>
                  ${feature}
                </span>
              `).join('')}
            </div>
          </div>
        `).join('')}
        <p class="text-xs opacity-70 mt-3">💡 Each service is tailored to your specific needs!</p>
      </div>
    `
  }

  const generateContactHTML = () => {
    return `
      <div class="space-y-3 mt-3">
        <p class="font-semibold text-sm mb-3">📞 Let's Connect:</p>
        
        <a href="mailto:abhirambandaru95@gmail.com" 
           class="flex items-center gap-3 p-3 bg-white/5 dark:bg-black/20 rounded-lg border border-white/10 hover:border-blue-400 transition-all group">
          <div class="text-2xl">✉️</div>
          <div class="flex-1">
            <div class="font-semibold text-xs">Email</div>
            <div class="text-xs opacity-80 group-hover:text-blue-400 transition-colors break-all">abhirambandaru95@gmail.com</div>
          </div>
          <svg class="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </a>

        <a href="tel:+917997142789" 
           class="flex items-center gap-3 p-3 bg-white/5 dark:bg-black/20 rounded-lg border border-white/10 hover:border-green-400 transition-all group">
          <div class="text-2xl">📱</div>
          <div class="flex-1">
            <div class="font-semibold text-xs">Phone</div>
            <div class="text-xs opacity-80 group-hover:text-green-400 transition-colors">+91 7997142789</div>
          </div>
          <svg class="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </a>

        <div class="flex items-center gap-3 p-3 bg-white/5 dark:bg-black/20 rounded-lg border border-white/10">
          <div class="text-2xl">📍</div>
          <div class="flex-1">
            <div class="font-semibold text-xs">Location</div>
            <div class="text-xs opacity-80">Amalapuram, India</div>
          </div>
        </div>

        <div class="flex gap-2 mt-3">
          <a href="https://github.com/abhiram-89" target="_blank" rel="noopener noreferrer"
             class="flex-1 flex items-center justify-center gap-2 p-2 bg-white/5 dark:bg-black/20 rounded-lg border border-white/10 hover:border-purple-400 transition-all text-xs">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/abhiram-bandaru-250221244/" target="_blank" rel="noopener noreferrer"
             class="flex-1 flex items-center justify-center gap-2 p-2 bg-white/5 dark:bg-black/20 rounded-lg border border-white/10 hover:border-blue-400 transition-all text-xs">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    `
  }

  const handleMenuClick = (value: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: value.charAt(0).toUpperCase() + value.slice(1),
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setIsLoading(true)

    setTimeout(() => {
      let botResponse = ""
      let isHtml = false

      switch (value) {
        case "projects":
          botResponse = generateProjectsHTML()
          isHtml = true
          break
        case "services":
          botResponse = generateServicesHTML()
          isHtml = true
          break
        case "contact":
          botResponse = generateContactHTML()
          isHtml = true
          break
        default:
          botResponse = "I'm here to help! You can ask me about my projects, services, or how to get in touch."
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: botResponse,
        timestamp: new Date(),
        showMenu: true,
        isHtml: isHtml,
      }
      setMessages((prev) => [...prev, botMsg])
      setIsLoading(false)
    }, 500)
  }

  const handleSendMessage = () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    setTimeout(() => {
      const lowerInput = input.toLowerCase()
      let botResponse = ""
      let isHtml = false

      if (lowerInput.includes("project")) {
        botResponse = generateProjectsHTML()
        isHtml = true
      } else if (lowerInput.includes("service")) {
        botResponse = generateServicesHTML()
        isHtml = true
      } else if (lowerInput.includes("contact") || lowerInput.includes("reach") || lowerInput.includes("email") || lowerInput.includes("phone")) {
        botResponse = generateContactHTML()
        isHtml = true
      } else if (lowerInput.includes("hi") || lowerInput.includes("hello") || lowerInput.includes("hey")) {
        botResponse = "Hello! 👋 Great to hear from you! I'm here to help you learn more about Abhiram's work. Feel free to ask me anything!"
      } else if (lowerInput.includes("thank") || lowerInput.includes("thanks")) {
        botResponse = "You're welcome! 😊 Is there anything else you'd like to know?"
      } else if (lowerInput.includes("skills") || lowerInput.includes("tech") || lowerInput.includes("technology")) {
        botResponse = "Abhiram has expertise in:\n\n💻 Frontend: React.js, JavaScript, HTML, CSS, TypeScript\n🗄️ Backend: Python, FastAPI, MongoDB, SQL\n🤖 AI/ML: Autogen, LangChain, FastAgents, Pandas\n🔧 Tools: Git, Docker, AWS, Postman\n🎨 Design: UI/UX, Figma, Prototyping"
      } else if (lowerInput.includes("experience") || lowerInput.includes("work")) {
        botResponse = "Abhiram is a dedicated full-stack developer with experience in building scalable web applications. He specializes in AI integration, modern web technologies, and creating seamless digital experiences for startups and enterprises."
      } else if (lowerInput.includes("who") || lowerInput.includes("about")) {
        botResponse = "I'm Abhiram's AI assistant! 🤖 I can help you explore his portfolio, projects, services, and contact information. What would you like to know?"
      } else {
        botResponse = "I understand! 😊 I can help you with:\n\n📂 Projects - View featured work\n💼 Services - Explore offerings\n💻 Skills - Check expertise\n📞 Contact - Get in touch\n\nJust ask me anything!"
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: botResponse,
        timestamp: new Date(),
        showMenu: !isHtml,
        isHtml: isHtml,
      }

      setMessages((prev) => [...prev, botMsg])
      setIsLoading(false)
    }, 800)
  }

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 w-[calc(100vw-2rem)] sm:w-96 bg-gradient-to-br from-card to-card/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[32rem] sm:h-[36rem] md:h-[500px] z-50 border-2 border-primary/20 animate-slide-in-up">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary via-primary to-secondary text-white p-3 sm:p-4 flex items-center justify-between relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
        <div className="flex items-center gap-2 sm:gap-3 relative z-10">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-lg sm:text-xl shadow-lg ring-2 ring-white/30">
            🤖
          </div>
          <div>
            <h3 className="font-bold text-sm sm:text-base">Abhiram's AI Buddy</h3>
            <p className="text-xs text-white/80 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
              Online & Ready
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 sm:p-2 hover:bg-white/20 rounded-lg transition-all relative z-10 group"
          aria-label="Close chat"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gradient-to-b from-background/50 to-background/80 backdrop-blur-sm">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"} animate-fade-in`}>
            <div
              className={`max-w-[85%] sm:max-w-xs px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl text-xs sm:text-sm shadow-lg transition-all hover:shadow-xl ${
                msg.type === "user"
                  ? "bg-gradient-to-r from-primary to-secondary text-white rounded-br-none"
                  : "bg-card border-2 border-border text-foreground rounded-bl-none"
              }`}
            >
              {msg.isHtml ? (
                <div dangerouslySetInnerHTML={{ __html: msg.content }} className="[&_a]:cursor-pointer" />
              ) : (
                <div className="whitespace-pre-wrap">{msg.content}</div>
              )}
              
              {msg.showMenu && !msg.isHtml && (
                <div className="mt-3 space-y-2">
                  <p className="text-[10px] sm:text-xs opacity-75 font-semibold">Quick actions:</p>
                  <div className="flex flex-col gap-1.5">
                    {menuFollowups.map((item) => (
                      <button
                        key={item.value}
                        onClick={() => handleMenuClick(item.value)}
                        className={`px-3 py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-xs font-semibold transition-all hover:scale-105 active:scale-95 ${
                          msg.type === "user"
                            ? "bg-white/20 hover:bg-white/30 text-white shadow-md"
                            : "bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start animate-fade-in">
            <div className="bg-card border-2 border-border text-foreground px-4 py-3 rounded-2xl rounded-bl-none shadow-lg">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce"></div>
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0.4s" }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 sm:p-4 border-t-2 border-border bg-card/80 backdrop-blur-sm">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Ask me anything..."
            className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 bg-background border-2 border-border rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
          <button
            onClick={handleSendMessage}
            disabled={isLoading || !input.trim()}
            className="px-3 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-primary to-secondary text-white rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
            aria-label="Send message"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}