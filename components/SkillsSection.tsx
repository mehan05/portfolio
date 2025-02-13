import { Card } from "@/components/ui/card"
import type { Skill } from "@/types/portfolio"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface SkillsSectionProps {
  skills: Skill[]
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <motion.section
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        Skills
      </h2>
      <div className="flex justify-center items-center">

        <Card className="p-6 min-h-[100px] w-full max-w-4xl bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">


          <div className="flex flex-wrap  items-center justify-center gap-5 ">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="flex flex-col space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="flex justify-between">
                  <Badge>
                        {skill.name}
                  </Badge>                
                </div>

              </motion.div>
            ))}
          </div>
        </Card>
      </div>
    </motion.section>
  )
}

