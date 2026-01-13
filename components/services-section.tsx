"use client"

import { useState } from "react"

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Create responsive, fast, and SEO-optimized websites using modern technologies and best practices.",
    icon: "🌐",
    features: ["React.js", "Responsive Design", "Performance Optimization"],
  },
  {
    id: 2,
    title: "Full Stack Development",
    description: "End-to-end application development from database design to deployment and maintenance.",
    icon: "⚙️",
    features: ["Frontend Screens Ui","Backend APIs", "Database Design", "Cloud Deployment"],
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed with user experience and accessibility in mind.",
    icon: "🎨",
    features: ["Design Systems", "Prototyping", "User Research"],
  },
  {
    id: 4,
    title: "Logo Design",
    description: "Native and cross-platform mobile apps that deliver exceptional performance and user experience.",
    icon: "💢",
    features: ["Attractive Logo's","Proactive Designs"],
  },
]

export default function ServicesSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group relative p-6 rounded-xl transition-all duration-300 transform cursor-pointer
                ${
                  hoveredId === service.id
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-2xl scale-105"
                    : "bg-card text-foreground shadow-lg hover:shadow-xl"
                }`}
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{service.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>

              {/* Description */}
              <p
                className={`text-sm mb-4 line-clamp-2 ${hoveredId === service.id ? "text-white/90" : "text-muted-foreground"}`}
              >
                {service.description}
              </p>

              {/* Features - Show on Hover */}
              <div
                className={`overflow-hidden transition-all duration-300 ${hoveredId === service.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <ul className="space-y-2 pt-4 border-t border-white/20">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
