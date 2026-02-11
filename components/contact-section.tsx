import { Github, Instagram, Send } from "lucide-react"

const socials = [
  { name: "GitHub", icon: Github, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Telegram", icon: Send, href: "#" },
]

export function ContactSection() {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="font-display text-4xl md:text-5xl tracking-wide text-foreground mb-12">
        Contact
      </h2>
      <div className="flex justify-center gap-6">
        {socials.map((social) => {
          const Icon = social.icon
          return (
            <a
              key={social.name}
              href={social.href}
              aria-label={social.name}
              className="text-foreground text-3xl transition-opacity duration-300 hover:opacity-50"
            >
              <Icon className="w-8 h-8" />
            </a>
          )
        })}
      </div>
    </section>
  )
}
