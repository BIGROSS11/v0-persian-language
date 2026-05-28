"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink, ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce solution with modern UI, product management, and secure payment integration.",
    tags: ["E-Commerce", "WordPress", "Online Shop"],
    image: "/images/project-ecommerce.png",
    link: "http://mpress.fwh.is/",
  },
  {
    id: 2,
    title: "Creative Portfolio",
    description: "Stunning portfolio website showcasing creative projects with smooth animations and modern design patterns.",
    tags: ["Web Design", "React", "Tailwind CSS"],
    image: "/images/45.png",
    link: "#",
  },
  {
    id: 3,
    title: "Mobile App UI",
    description: "Beautiful and intuitive mobile application interface with comprehensive design system and interactions.",
    tags: ["Mobile UI", "Figma", "Design"],
    image: "/images/Yo.png",
    link: "#",
  },
  {
    id: 4,
    title: "Visual Effects Showcase",
    description: "Professional motion graphics and visual effects project combining cinematography with digital artistry.",
    tags: ["After Effects", "Adobe Premiere", "Video"],
    image: "/images/fucman.png",
    link: "#",
  },
]

export function PortfolioSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handlePrevious = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
      setTimeout(() => setIsTransitioning(false), 600)
    }
  }

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
      setTimeout(() => setIsTransitioning(false), 600)
    }
  }

  const handleDotClick = (index: number) => {
    if (!isTransitioning && index !== currentIndex) {
      setIsTransitioning(true)
      setCurrentIndex(index)
      setTimeout(() => setIsTransitioning(false), 600)
    }
  }

  const currentProject = projects[currentIndex]
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <section id="portfolio" className="py-20 px-6 md:py-32">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            My Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Discover my latest projects and creative endeavors showcasing expertise in web design, development, and visual effects.
          </p>
        </div>

        {/* Portfolio Carousel */}
        <div className="relative">
          {/* Main Card */}
          <div className="bg-card border border-border rounded-3xl overflow-hidden">
            {/* Image Section */}
            <div className="relative w-full aspect-video bg-gradient-to-br from-secondary to-secondary/50 overflow-hidden group">
              {/* Main Image */}
              <div
                className={`absolute inset-0 transition-all duration-700 ease-out ${
                  isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
                }`}
              >
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Floating Secondary Image */}
              <div className="hidden lg:block absolute -right-8 top-6 w-1/3 aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-card/50 bg-secondary animate-float">
                <img
                  src={nextProject.image}
                  alt={nextProject.title}
                  className="w-full h-full object-cover"
                  crossOrigin="anonymous"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 md:p-12 bg-card">
              <div className={`transition-all duration-700 ease-out ${
                isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}>
                {/* Project Number and Title */}
                <div className="mb-6">
                  <span className="text-sm font-semibold text-primary uppercase tracking-widest">
                    Project {String(currentIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
                    {currentProject.title}
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                    {currentProject.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {currentProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full border border-primary/30 text-sm font-medium text-foreground bg-primary/5 hover:bg-primary/10 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Controls and Button */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  {/* Navigation Controls */}
                  <div className="flex items-center gap-4">
                    <button
                      onClick={handlePrevious}
                      disabled={isTransitioning}
                      aria-label="Previous project"
                      className="group relative w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
                    </button>

                    <div className="flex items-center gap-2">
                      {projects.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => handleDotClick(index)}
                          disabled={isTransitioning}
                          aria-label={`Go to project ${index + 1}`}
                          className={`transition-all duration-300 rounded-full disabled:cursor-not-allowed ${
                            index === currentIndex
                              ? "w-8 h-3 bg-primary"
                              : "w-3 h-3 bg-muted-foreground/40 hover:bg-muted-foreground/60"
                          }`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={handleNext}
                      disabled={isTransitioning}
                      aria-label="Next project"
                      className="group relative w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={currentProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                  >
                    View Project
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Count Info */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>Explore {projects.length} featured projects</p>
        </div>
      </div>
    </section>
  )
}
