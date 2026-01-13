"use client"

import { useEffect, useState } from "react"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById("about-section")
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  const stats = [
    { value: "10+", label: "Projects" },
    { value: "5+", label: "Months Exp" },
    { value: "6+", label: "Technologies" },
    { value: "100%", label: "Dedication" }
  ]

  const highlights = [
    {
      icon: "💡",
      title: "Creative Problem Solver",
      description: "Innovative solutions for complex challenges"
    },
    {
      icon: "⚡",
      title: "Performance Focused",
      description: "Optimized code and lightning-fast applications"
    },
    {
      icon: "🎨",
      title: "UI/UX Enthusiast",
      description: "Beautiful, intuitive user experiences"
    },
    {
      icon: "🚀",
      title: "Scalable Architecture",
      description: "Building for growth and performance"
    }
  ]

  return (
    <>
      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .fade-up {
          animation: fadeUp 0.6s ease-out forwards;
        }
      `}</style>

      <section id="about-section" className="min-h-screen flex items-center justify-center relative py-16 sm:py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 right-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className={`text-center mb-10 sm:mb-16 ${isVisible ? 'fade-up' : 'opacity-0'}`}>
                 <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">About Me</span>
          </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
            </div>

            {/* About Text */}
            <div className={`mb-12 sm:mb-16 ${isVisible ? 'fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="bg-card border border-border rounded-lg p-6 sm:p-8 hover:border-primary/50 transition-all duration-300">
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg text-center max-w-4xl mx-auto">
                    Hi, I’m Abhi — a passionate full-stack developer who builds clean, 
                    responsive web applications using React on the frontend and FastAPI with MongoDB on the backend. 
                    I enjoy creating intelligent, user-friendly experiences by combining modern web technologies with AI. 
                    I’m constantly learning, experimenting, 
                    and improving to turn ideas into smart, real-world digital solutions.                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className={`mb-12 sm:mb-16 ${isVisible ? 'fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {highlights.map((highlight, index) => (
                  <div 
                    key={highlight.title}
                    className="group p-6 bg-card rounded-lg border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:scale-105 text-center"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {highlight.icon}
                    </div>
                    <h3 className="font-bold text-foreground text-lg mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {highlight.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className={`mb-12 sm:mb-16 ${isVisible ? 'fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <div 
                    key={stat.label}
                    className="text-center p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className={`text-center ${isVisible ? 'fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
              <a 
                href="Resume.pdf" 
                download
                className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transform hover:scale-105 transition-all duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}