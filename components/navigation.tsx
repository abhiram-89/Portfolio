"use client"

import { useState, useEffect, useRef } from "react"

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const isScrollingRef = useRef(false)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const sections = [
    { id: "home", label: "Home" },
    { id: "about-section", label: "About" },
    { id:"skills-section",label:"Skills"},
    { id: "projects-section", label: "Projects" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" }
  ]

  useEffect(() => {
    const handleScroll = () => {
      // Don't update active section while programmatically scrolling
      if (isScrollingRef.current) return

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }

      scrollTimeoutRef.current = setTimeout(() => {
        const scrollPosition = window.scrollY + 100

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i].id)
          if (section) {
            const sectionTop = section.offsetTop
            const sectionHeight = section.offsetHeight

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
              setActiveSection(sections[i].id)
              break
            }
          }
        }
      }, 50)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once on mount

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [setActiveSection])

  const scrollToSection = (id: string) => {
    // Immediately update active section
    setActiveSection(id)
    
    // Mark that we're starting programmatic scroll
    isScrollingRef.current = true
    
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsOpen(false)
      
      // Reset scrolling flag after animation completes
      setTimeout(() => {
        isScrollingRef.current = false
      }, 1000) // Smooth scroll typically takes ~600-800ms
    }
  }

  return (
    <>
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .nav-animate {
          animation: slideDown 0.5s ease-out;
        }
      `}</style>

      <nav className="fixed top-0 left-0 right-0 z-50 nav-animate">
        {/* Glass morphism background */}
        <div className="absolute inset-0 bg-background/70 backdrop-blur-xl border-b border-border/50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo with gradient ring */}
            <button 
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-3 group"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary  opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold ">
                  AB
                </div>
              </div>
            </button>

            {/* Desktop Menu - Pill Style - Centered */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-2 bg-card/50 backdrop-blur-sm rounded-full px-2 py-2 border border-border/50 shadow-lg">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    activeSection === section.id
                      ? "text-white"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {activeSection === section.id && (
                    <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-300"></span>
                  )}
                  <span className="relative z-10">{section.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button - Animated */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu - Slide Down */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="py-4 space-y-2">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === section.id
                      ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                      : "text-muted-foreground hover:text-foreground hover:bg-card"
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}