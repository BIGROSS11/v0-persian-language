"use client"

import { TypingEffect } from "./typing-effect"

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="font-display text-7xl md:text-9xl tracking-widest text-foreground">
        BIGROSS
      </h1>
      <TypingEffect />
    </section>
  )
}
