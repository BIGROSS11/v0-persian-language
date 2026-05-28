"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Website",
    description: "Electro-shop website (use VPN)",
    tags: ["E-Commerce", "WordPress", "Online Shop"],
    image: "/images/project-ecommerce.png",
    link: "http://mpress.fwh.is/",
  },
  {
    title: "Portfolio Website",
    description: "Creative portfolio with modern design and smooth interactions.",
    tags: ["Web App", "React", "Tailwind CSS"],
    image: "/images/project-ecommerce.png",
    link: "#",
  },
  {
    title: "Mobile App Interface",
    description: "User-friendly mobile app interface with intuitive navigation.",
    tags: ["Mobile", "UI/UX", "Figma"],
    image: "/images/project-ecommerce.png",
    link: "#",
  },
  {
    title: "Brand Design System",
    description: "Comprehensive design system for enterprise applications.",
    tags: ["Design System", "After Effects", "Adobe Premiere"],
    image: "/images/project-ecommerce.png",
    link: "#",
  },
]

export function PortfolioSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')

  const prev = () => {
    setDirection('prev')
    setCurrent((c) => (c === 0 ? projects.length - 1 : c - 1))
  }
  const next = () => {
    setDirection('next')
    setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1))
  }

  const project = projects[current]

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl md:text-5xl tracking-wide text-foreground">
            My Works
          </h2>
          <p className="text-muted-foreground mt-3 text-lg">
            Discover My Most Recent Project Highlights
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Project Card */}
          <div className="bg-card rounded-2xl overflow-hidden border border-border">
            {/* Image Area */}
            <div className="relative w-full aspect-video bg-secondary/50 overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className={`relative w-[85%] h-[85%] rounded-lg overflow-hidden shadow-2xl transition-all duration-500 ease-out ${
                    direction === 'next' ? 'animate-slideInRight' : 'animate-slideInLeft'
                  }`}
                >
                  <img
                    key={current}
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    crossOrigin="anonymous"
                  />
                </div>
              </div>
              {/* Floating second mockup */}
              <div className="absolute -right-4 top-8 w-[45%] h-[80%] rounded-lg overflow-hidden shadow-2xl opacity-60 rotate-2 hidden md:block animate-float">
                <img
                  src={projects[(current + 1) % projects.length].image || "/placeholder.svg"}
                  alt="Next project preview"
                  className="w-full h-full object-cover"
                  crossOrigin="anonymous"
                />
              </div>
            </div>

            {/* Info Area */}
            <div className={`p-6 md:p-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6 transition-all duration-500 ease-out ${
              direction === 'next' ? 'animate-fadeInUp' : 'animate-fadeInUp'
            }`}>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 animate-fadeIn">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed animate-fadeIn animation-delay-100">
                  {project.description}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={tag}
                      className={`px-4 py-1.5 rounded-full border border-border text-sm text-foreground bg-secondary/50 hover:bg-secondary transition-all duration-300 animate-fadeIn`}
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* View Project Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-80 hover:scale-105 transition-all duration-300 animate-fadeIn"
                >
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  aria-label="Previous project"
                  className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-80 hover:scale-110 transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next project"
                  className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-80 hover:scale-110 transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 'next' : 'prev')
                  setCurrent(i)
                }}
                aria-label={`Go to project ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-primary scale-125" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
