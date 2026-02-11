"use client"

import { useState, useCallback, useRef, useEffect } from "react"
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
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<"left" | "right">("right")
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const navigate = useCallback(
    (dir: "left" | "right") => {
      if (isAnimating) return
      setDirection(dir)
      setIsAnimating(true)

      timeoutRef.current = setTimeout(() => {
        setCurrent((c) => {
          if (dir === "right") return c === projects.length - 1 ? 0 : c + 1
          return c === 0 ? projects.length - 1 : c - 1
        })
        setIsAnimating(false)
      }, 400)
    },
    [isAnimating],
  )

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating || index === current) return
      setDirection(index > current ? "right" : "left")
      setIsAnimating(true)
      timeoutRef.current = setTimeout(() => {
        setCurrent(index)
        setIsAnimating(false)
      }, 400)
    },
    [isAnimating, current],
  )

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const project = projects[current]

  const animClass = isAnimating
    ? direction === "right"
      ? "opacity-0 translate-x-8"
      : "opacity-0 -translate-x-8"
    : "opacity-100 translate-x-0"

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl md:text-5xl tracking-wide text-foreground">
            My Works
          </h2>
          <p className="text-muted-foreground mt-3 text-lg">
            Discover My Most Recent Project Highlights
          </p>
        </div>

        <div className="relative">
          <div className="bg-card rounded-2xl overflow-hidden border border-border">
            {/* Image area with smooth transition */}
            <div className="relative w-full aspect-[16/9] bg-secondary/50 overflow-hidden">
              <div
                className={`absolute inset-0 transition-all ease-out ${animClass}`}
                style={{ transitionDuration: "400ms" }}
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                  crossOrigin="anonymous"
                  loading="eager"
                />
              </div>
            </div>

            {/* Info area with smooth transition */}
            <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div
                className={`flex-1 transition-all ease-out ${animClass}`}
                style={{ transitionDuration: "400ms", transitionDelay: "50ms" }}
              >
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 rounded-full border border-border text-sm text-foreground bg-secondary/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#ff4d2d] text-foreground font-semibold text-sm hover:bg-[#e0432a] transition-colors duration-200"
                >
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Navigation arrows */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => navigate("left")}
                  disabled={isAnimating}
                  aria-label="Previous project"
                  className="w-12 h-12 rounded-full bg-[#ff4d2d] text-foreground flex items-center justify-center hover:bg-[#e0432a] transition-colors duration-200 disabled:opacity-50"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => navigate("right")}
                  disabled={isAnimating}
                  aria-label="Next project"
                  className="w-12 h-12 rounded-full bg-[#ff4d2d] text-foreground flex items-center justify-center hover:bg-[#e0432a] transition-colors duration-200 disabled:opacity-50"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center gap-2.5 mt-6">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to project ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-[#ff4d2d] w-8"
                    : "bg-muted-foreground/30 w-2.5 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
