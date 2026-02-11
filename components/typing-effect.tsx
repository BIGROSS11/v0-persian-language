"use client"

import { useEffect, useState } from "react"

const words = [
  "Front-end junior",
  "WordPress Expert",
  "Python Expert",
  "Gen Z Mindset",
  "back-end developer",
  "linux",
  "UI focused",
]

export function TypingEffect() {
  const [text, setText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.substring(0, charIndex + 1))
          setCharIndex((prev) => prev + 1)

          if (charIndex + 1 === currentWord.length) {
            setTimeout(() => setIsDeleting(true), 1200)
          }
        } else {
          setText(currentWord.substring(0, charIndex - 1))
          setCharIndex((prev) => prev - 1)

          if (charIndex - 1 === 0) {
            setIsDeleting(false)
            setWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, wordIndex])

  return (
    <p className="mt-3 text-lg text-foreground">
      {text}
      <span className="inline-block w-0.5 h-5 bg-foreground ml-0.5 animate-pulse" />
    </p>
  )
}
