"use client"

import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "AI-Powered-Interview",
    description:
      "Intelligent interview preparation platform using AI to conduct mock interviews, provide real-time feedback, and analyze responses for improvement.",
    image: "/ai_interview_project.jpeg",
    tags: ["React.js", "Mui", "Python", "FastAPI","Autogen","MongoDB"],
    gitLink: "https://github.com/abhiram-89/AI-powered-interview.git",
  },
  {
    id: 2,
    title: "Hotel-Budget-Forecast",
    description:
      "Predictive analytics tool for hotel revenue management with AI-driven budget forecasting, occupancy predictions, and financial planning insights.",
    image: "/hotel_budget_project.jpeg",
    tags: ["Python", "Pandas", "Machine Learning", "FastAPI","FastMCP","React.js","MongoDB","Prophet","MUI","FastAgents"],
    gitLink: "https://github.com/abhiram-89/Hotel-Budget-forecast.git",
  },
  {
    id: 3,
    title: "AI-Business-Automation",
    description:
      "Comprehensive business automation solution leveraging AI to streamline workflows, automate repetitive tasks, and optimize operational efficiency.",
    image: "/ai_automation_project.png",
    tags: ["Python", "FastAPI", "Autogen", "React.js","MongoDB"],
    gitLink: "https://github.com/abhiram-89/AI-Business-Automation.git",
  },
  {
    id: 4,
    title: "Weather Insight",
    description: "Real-time weather visualization dashboard with interactive maps, detailed forecasts, historical data analysis, and personalized weather alerts.",
    image: "/weather.png",
    tags: ["Html", "Weather API", "Css", "JavaScript"],
    gitLink: "https://github.com/abhiram-89/Weather-Insight.git",
  },
]

export default function ProjectsShowcase() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .project-card {
          animation: fadeIn 0.5s ease-out forwards;
          opacity: 0;
        }
        
        .project-card:nth-child(1) { animation-delay: 0.1s; }
        .project-card:nth-child(2) { animation-delay: 0.2s; }
        .project-card:nth-child(3) { animation-delay: 0.3s; }
        .project-card:nth-child(4) { animation-delay: 0.4s; }
      `}</style>

      <section id="projects-section" className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-3">
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore my latest projects showcasing expertise in AI integration, full-stack development, and data-driven solutions
            </p>
            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="h-px w-12 bg-border"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              <div className="h-px w-12 bg-border"></div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="project-card group relative bg-card border border-border rounded-xl overflow-hidden hover:border-foreground/20 transition-all duration-300 hover:shadow-xl"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-75"
                  />
                  
                  {/* Simple Dark Overlay on Hover */}
                  <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${hoveredId === project.id ? 'opacity-100' : 'opacity-0'}`}></div>
                  
                  {/* View Button on Image */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${hoveredId === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <a
                      href={project.gitLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="group/btn px-8 py-4 bg-white dark:bg-black text-black dark:text-white rounded-xl font-bold text-lg shadow-2xl hover:scale-105 transition-transform duration-300"
                    >
                      <span className="flex items-center gap-3">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        View Project
                        <svg className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 6).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-muted text-foreground text-xs font-medium rounded-md hover:bg-muted/80 transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 6 && (
                      <span className="px-3 py-1.5 bg-muted text-muted-foreground text-xs font-medium rounded-md">
                        +{project.tags.length - 6}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Want to see more? Check out my GitHub for additional projects
            </p>
            <a
              href="https://github.com/abhiram-89"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-foreground text-background rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Explore Full Portfolio
            </a>
          </div>
        </div>
      </section>
    </>
  )
}