"use client"

import type React from "react"
import { useState } from "react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Using Web3Forms - Get your access key from https://web3forms.com
      const formDataToSend = new FormData()
      formDataToSend.append('access_key', 'e3c106ab-1ecc-4c23-a41b-01abdde2d095') // Replace with your access key
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('subject', formData.subject)
      formDataToSend.append('message', formData.message)
      formDataToSend.append('from_name', 'Client From Portfolio')
      formDataToSend.append('redirect', 'false')

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus({ type: 'success', message: 'Thank you for reaching out! I\'ll get back to you soon.' })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        throw new Error(data.message || 'Failed to send message')
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Oops! Something went wrong. Please try again or email me directly.' })
      console.error('Error sending email:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 md:py-10 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-3">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Get In Touch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Have a project in mind? I'd love to hear from you. Get in touch!
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-card rounded-xl shadow-lg p-8 md:p-12 border border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="Your Name"
                required
                disabled={isSubmitting}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="mail@example.com"
                required
                disabled={isSubmitting}
              />
            </div>
          </div>

          {/* Subject */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-foreground mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              placeholder="Project Inquiry"
              required
              disabled={isSubmitting}
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
              placeholder="Tell me about your project..."
              required
              disabled={isSubmitting}
            ></textarea>
          </div>

          {/* Status Message */}
          {submitStatus && (
            <div className={`mb-6 p-4 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20'}`}>
              {submitStatus.message}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <a 
            href="mailto:abhirambandaru95@gmail.com"
            className="text-center p-6 rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-300 group"
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">✉️</div>
            <h3 className="font-semibold text-foreground mb-2">Email</h3>
            <p className="text-muted-foreground group-hover:text-primary transition-colors break-all text-sm">
              abhirambandaru95@gmail.com
            </p>
          </a>
          
          <a 
            href="tel:+917997142789"
            className="text-center p-6 rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-300 group"
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">📱</div>
            <h3 className="font-semibold text-foreground mb-2">Phone</h3>
            <p className="text-muted-foreground group-hover:text-primary transition-colors">
              +91 7997142789
            </p>
          </a>
          
          <div className="text-center p-6 rounded-lg border border-border">
            <div className="text-4xl mb-3">📍</div>
            <h3 className="font-semibold text-foreground mb-2">Location</h3>
            <p className="text-muted-foreground">Amalapuram, India</p>
          </div>
        </div>
      </div>
    </section>
  )
}