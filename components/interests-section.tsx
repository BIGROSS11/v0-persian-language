"use client"

import { Film, Gamepad2, Brain } from "lucide-react"

const interests = [
  { name: "Movies", icon: Film },
  { name: "Gaming", icon: Gamepad2 },
  { name: "Psychology", icon: Brain },
]

export function InterestsSection() {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="font-display text-4xl md:text-5xl tracking-wide text-foreground mb-12">
        Interests
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {interests.map((interest) => {
          const Icon = interest.icon
          return (
            <div
              key={interest.name}
              className="group bg-card rounded-xl px-10 py-8 flex flex-col items-center gap-3 transition-all duration-300 hover:bg-foreground hover:text-background"
            >
              <Icon className="w-8 h-8" />
              <p className="font-semibold">{interest.name}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
