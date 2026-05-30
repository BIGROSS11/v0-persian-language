"use client"

import { useEffect, useRef, useState } from "react"

const skills = [
  { name: "FIGMA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "ADOBE PREMIERE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JAVASCRIPT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "GITHUB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "MYSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "PYTHON", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "WORDPRESS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
]

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-6 md:px-16 lg:px-24 bg-canvas"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="block w-1 h-10 bg-accent-emphasis rounded-full" />
          <h2 className="font-display text-4xl md:text-5xl tracking-wide text-emphasis">
            What I do
          </h2>
        </div>
        <p className="text-muted max-w-2xl mx-auto leading-relaxed">
          {"I'm Ali from Karaj, Iran, a programmer with a strong passion for programming, web development, and WordPress. I enjoy creating practical and engaging projects, exploring UI/UX design, and learning new technologies. Currently, I'm freelancing and developing my skills, aiming to build meaningful projects and collaborate with like-minded people. I'm motivated by challenges and constantly looking to grow both technically and creatively."}
        </p>
      </div>

      {/* Skills Grid with Side Label */}
      <div className="flex items-start gap-6 max-w-5xl mx-auto">
        {/* Vertical "Skills" label */}
        <div className="hidden md:flex flex-col items-center gap-3 pt-8">
          <span className="block w-1 h-16 bg-accent-emphasis rounded-full" />
          <span
            className="font-display text-2xl tracking-widest text-emphasis font-semibold"
            style={{ writingMode: "vertical-lr" }}
          >
            Skills
          </span>
        </div>

        {/* Skill Cards Grid */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`
                group flex flex-col items-center justify-center
                bg-subtle border border-muted rounded-lg p-5
                transition-all duration-500 ease-out
                hover:-translate-y-2 hover:border-accent hover:shadow-[0_8px_24px_rgba(9,105,218,0.2)]
                hover:bg-canvas
                relative overflow-hidden
                cursor-pointer
                ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
                }
              `}
              style={{
                transitionDelay: isVisible ? `${index * 80}ms` : "0ms",
                aspectRatio: "1",
                animation: isVisible ? `skillPulse 2.5s ease-in-out infinite` : "none",
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Primer glow effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            
              {/* biome-ignore lint/a11y/imgRedundantAlt: skill icon */}
              <img
                src={skill.icon || "/placeholder.svg"}
                alt={`${skill.name} icon`}
                width={56}
                height={56}
                className={`mb-3 transition-transform duration-300 group-hover:scale-110 relative z-10 ${
                  skill.name === "GITHUB" ? "invert" : ""
                }`}
                crossOrigin="anonymous"
              />
              <p className="text-sm font-semibold text-emphasis tracking-wide relative z-10">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
