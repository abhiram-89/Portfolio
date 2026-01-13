"use client"

import { useEffect, useState } from "react"

interface HeroSectionProps {
  onChatOpen: () => void
}

export default function HeroSection({ onChatOpen }: HeroSectionProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])
 const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects-section')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          10%, 30% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          40%, 60% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-wave {
          animation: wave 2.5s ease-in-out infinite;
          transform-origin: 70% 70%;
          display: inline-block;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
      
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>

        <div className="max-w-7xl w-full mx-auto px-6 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className={`space-y-6  mt-6 lg:space-y-8 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-6 text-balance">
                  <span className="inline-block animate-wave text-5xl sm:text-6xl lg:text-7xl mr-2">👋</span>
                  <span className="inline-block hover:scale-110 transition-transform duration-300">Hi,</span>{" "}
                  <span className="inline-block hover:scale-110 transition-transform duration-300">I'm</span>{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block hover:scale-110 transition-transform duration-300 animate-gradient">
                    Abhiram
                  </span>
                  {/* <span className="text-lg ms-6 ps-6 sm:text-md lg:text-lg text-muted-foreground font-normal block mt-2">
                    Full Stack Developer & Creative Web Designer
                  </span> */}
                </h1>
                {/* <p className="text-xl sm:text-sm mt-5 text-muted-foreground">Full Stack Developer & Creative Web Designer</p> */}
              </div>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                I Design Sleek, responsive web experiences that blend creativity with cutting-edge technology. I’m passionate about transforming ideas into interactive, user-friendly digital solutions that leave an impact.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={onChatOpen}
                  className="px-6 sm:px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transform hover:scale-105 transition-all duration-300"
                >
                  Meet My Buddy
                </button>
                <button 
                  onClick={scrollToProjects}
                  className="px-6 sm:px-8 py-3 bg-muted text-foreground rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transform hover:scale-105 transition-all duration-300"
                >
                  View My Desk
                </button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a
                  href="https://www.linkedin.com/in/abhiram-bandaru-250221244/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card rounded-full hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/abhiram-89"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card rounded-full hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                  aria-label="GitHub Profile"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/abhiram_bandaru/#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card rounded-full hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                  aria-label="Instagram Profile"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Profile Image */}
            <div
              className={`relative flex justify-center items-center transition-all duration-1000 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
            >
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center">
                {/* Animated Rings */}
                <div
                  className="absolute inset-0 rounded-full border-4 border-primary/30 animate-spin"
                  style={{ animationDuration: "20s" }}
                ></div>
                
                <div
                  className="absolute inset-6 rounded-full border-3 border-secondary/20 animate-spin"
                  style={{ animationDuration: "15s", animationDirection: "reverse" }}
                ></div>

                {/* Profile Image - Circular */}
                <div className="absolute inset-2 flex items-center justify-center">
                  <div className="relative w-80 h-80 sm:w-82 sm:h-82">
                    <img
                      src="/Abhi_image.jpeg"
                      alt="Abhiram Profile"
                      className="w-full h-full rounded-full object-cover shadow-2xl ring-4 ring-primary/20"
                    />
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 to-secondary/20 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}