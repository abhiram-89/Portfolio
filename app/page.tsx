"use client"

import { useState } from "react"
import HeroSection from "@/components/hero-section"
import ProjectsShowcase from "@/components/projects-showcase"
import ServicesSection from "@/components/services-section"
import ContactSection from "@/components/contact-section"
import AIChat from "@/components/ai-chat"
import Navigation from "@/components/navigation"
import AboutSection from "@/components/About_me"
import SkillsSection from "@/components/skills"

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  return (
    <main className="w-full overflow-hidden">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <section id="home" className="scroll-mt-20">
        <HeroSection onChatOpen={() => setIsChatOpen(true)} />
      </section>
      <section id="About_me" className="scroll-mt-20">
        <AboutSection/>
      </section>

      <section id="Skills" className="scroll-mt-20 ">
        <SkillsSection/>
      </section>

      <section id="projects" className="scroll-mt-20">
        <ProjectsShowcase />
      </section>

      <section id="services" className="scroll-mt-20">
        <ServicesSection />
      </section>

      <section id="contact" className="scroll-mt-20">
        <ContactSection />
      </section>

      {/* AI Chat Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 z-40 w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center animate-glow md:bottom-8 md:right-8"
        aria-label="Open AI Chat"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </button>

      {/* AI Chat Component */}
      {isChatOpen && <AIChat onClose={() => setIsChatOpen(false)} />}
    </main>
  )
}
