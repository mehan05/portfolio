import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import type { SocialLink } from "@/types/portfolio"
import { motion } from "framer-motion"

interface ContactSectionProps {
  socialLinks: SocialLink[]
}

export function ContactSection({ socialLinks }: ContactSectionProps) {
  return (
    <motion.section
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        Reach Out
      </h2>
      <Card className="p-6 bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {socialLinks.map((link, index) => (
            <motion.div
              key={link.platform}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Button
                variant="outline"
                className="gap-2 hover:bg-purple-500 hover:text-white transition-all duration-300"
                asChild
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <link.icon className="w-4 h-4" />
                  {link.platform}
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.section>
  )
}

