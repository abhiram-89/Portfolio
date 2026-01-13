"use client"

import { useEffect, useState } from "react"

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredSkill, setHoveredSkill] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById("skills-section")
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  const skillCategories = [
    {
      icon: "💻",
      title: "Frontend Development",
      iconBg: "bg-blue-500",
      skills: [
        { name: "React.js", level: 75 },
        { name: "JavaScript", level: 75 },
        { name: "Html", level: 90 },
        { name: "Css", level: 88 },
        { name: "Typescript", level: 65 }
      ]
    },
    {
      icon: "🗄️",
      title: "Backend Development",
      iconBg: "bg-purple-500",
      skills: [
        { name: "Python", level: 80 },
        { name: "FastAPI", level: 85 },
        { name: "MongoDB", level: 88 },
        { name: "SQL", level: 75 }
      ]
    },
    {
      icon: "🤖",
      title: "AI & ML",
      iconBg: "bg-emerald-500",
      skills: [
        { name: "Autogen", level: 85 },
        { name: "LangChain", level: 60 },
        { name: "FastAgents", level: 90 },
        { name: "FastMCP", level: 85 },
        { name: "Pandas", level: 77 },
        { name: "Numpy", level: 60 }
      ]
    },
    {
      icon: "🎨",
      title: "Design & UI/UX",
      iconBg: "bg-pink-500",
      skills: [
        { name: "UI Design", level: 85 },
        { name: "Prototyping", level: 80 },
        { name: "Figma", level: 82 },
        { name: "User Experience", level: 88 }
      ]
    },
    {
      icon: "🔧",
      title: "Tools",
      iconBg: "bg-orange-500",
      skills: [
        { name: "Git & GitHub", level: 87 },
        { name: "Docker", level: 60 },
        { name: "Cloud [AWS]", level: 70 },
        { name: "PostmanAPI", level: 85 },
        { name: "MS Office", level: 90 },
        { name: "Xampp", level: 75 },
        { name: "Netlify", level: 85 }
      ]
    },
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
        
        @keyframes progressBar {
          from { width: 0%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.6); }
        }
        
        .fade-up {
          animation: fadeUp 0.6s ease-out forwards;
        }
        
        .skill-bar {
          animation: progressBar 1.5s ease-out forwards;
        }
        
        .float-icon {
          animation: float 3s ease-in-out infinite;
        }
        
        .skill-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .skill-card:hover {
          transform: translateY(-8px) scale(1.02);
        }
        
        .skill-item {
          transition: all 0.2s ease;
          cursor: pointer;
        }
        
        .skill-item:hover {
          transform: translateX(4px);
        }
        
        .skill-bar-fill {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .skill-bar-fill::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: shimmer 2s infinite;
        }
        
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        .icon-wrapper {
          transition: all 0.3s ease;
        }
        
        .skill-card:hover .icon-wrapper {
          transform: scale(1.1) rotate(5deg);
        }
      `}</style>

      <section id="skills-section" className="min-h-screen flex items-center justify-center relative py-16 sm:py-20">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl"></div>
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className={`text-center mb-12 sm:mb-16 ${isVisible ? 'fade-up' : 'opacity-0'}`}>
              <p className="text-primary font-semibold text-sm sm:text-base mb-4 tracking-wider uppercase">My Expertise</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Skills & Technologies
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
                Comprehensive knowledge across modern web technologies and best practices
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6"></div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, idx) => (
                <div
                  key={category.title}
                  className={`skill-card bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 ${isVisible ? 'fade-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`icon-wrapper ${category.iconBg} p-3 rounded-lg text-2xl shadow-lg`}>
                      {category.icon}
                    </div>
                    <h3 className="font-bold text-foreground text-lg">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIdx) => (
                      <div 
                        key={skill.name}
                        className="skill-item"
                        onMouseEnter={() => setHoveredSkill(`${category.title}-${skill.name}`)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className={`text-sm font-medium transition-colors ${
                            hoveredSkill === `${category.title}-${skill.name}` 
                              ? 'text-primary' 
                              : 'text-foreground'
                          }`}>
                            {skill.name}
                          </span>
                          <span className={`text-sm font-semibold transition-all ${
                            hoveredSkill === `${category.title}-${skill.name}`
                              ? 'text-primary scale-110'
                              : 'text-muted-foreground'
                          }`}>
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className={`skill-bar-fill h-full bg-gradient-to-r from-primary to-secondary rounded-full ${isVisible ? 'skill-bar' : ''} ${
                              hoveredSkill === `${category.title}-${skill.name}` ? 'opacity-100' : 'opacity-90'
                            }`}
                            style={{ 
                              width: isVisible ? `${skill.level}%` : '0%',
                              animationDelay: `${0.5 + skillIdx * 0.1}s`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Call to Action */}
            <div className={`text-center mt-16 ${isVisible ? 'fade-up' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
              <p className="text-muted-foreground text-sm sm:text-base">
                Always learning and expanding my skill set to stay current with industry trends
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}