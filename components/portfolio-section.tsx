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
    title: "Project Two",
    description: "A brief description of the second project and what it does.",
    tags: ["Web App", "PHP", "MySQL"],
    image: "/placeholder-project-2.jpg",
    link: "#",
  },
  {
    title: "Project Three",
    description: "A brief description of the third project and what it does.",
    tags: ["E-Commerce", "WordPress", "CSS"],
    image: "/placeholder-project-3.jpg",
    link: "#",
  },
  {
    title: "Project Four",
    description: "A brief description of the fourth project and what it does.",
    tags: ["Portfolio", "HTML", "JavaScript"],
    image: "/placeholder-project-4.jpg",
    link: "#",
  },
]

export function PortfolioSection() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? projects.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1))

  const project = projects[current]

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-1 h-10 bg-foreground rounded-full" />
            <h2 className="font-display text-4xl md:text-5xl tracking-wide text-foreground">
              My Works
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Discover My Most Recent Project Highlights
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className={`group bg-card rounded-2xl overflow-hidden border border-border transition-all duration-300 hover:border-[#ff4d2d] hover:shadow-[0_12px_40px_rgba(255,77,45,0.2)] ${
                idx === current ? "ring-2 ring-[#ff4d2d]" : ""
              }`}
            >
              {/* Image */}
              <div className="relative w-full aspect-video bg-secondary/50 overflow-hidden">
                <img
                  src={proj.image || "/placeholder.svg"}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  crossOrigin="anonymous"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {proj.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {proj.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full border border-border bg-secondary/30 text-foreground hover:bg-[#ff4d2d]/10 hover:border-[#ff4d2d] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#ff4d2d] text-foreground font-semibold text-sm hover:bg-[#e0432a] transition-colors"
                >
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            onClick={prev}
            aria-label="Previous project"
            className="w-12 h-12 rounded-full bg-[#ff4d2d] text-foreground flex items-center justify-center hover:bg-[#e0432a] transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to project ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === current ? "bg-[#ff4d2d] w-8" : "bg-muted-foreground/30 w-2"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next project"
            className="w-12 h-12 rounded-full bg-[#ff4d2d] text-foreground flex items-center justify-center hover:bg-[#e0432a] transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
