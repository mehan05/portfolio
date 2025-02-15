import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import type { Project } from "@/types/portfolio"
import { motion } from "framer-motion"

interface ProjectsSectionProps {
  projects: Project[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <motion.section
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        Works Done
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card className="overflow-hidden bg-zinc-900/50 border-zinc-800 hover:border-purple-500 transition-all duration-300 backdrop-blur-sm" onClick={() => window.open(project.link, "_blank")}>
              <div className="relative h-48 mb-2">
                <Image src={project.image || "/placeholder.svg"} alt={project.title}  width={500}
  height={500} className="object-cover" />
              </div>
              <div className="p-6 text-justify">
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 ">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-zinc-800 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                <Link href={project.link} className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
                  Learn more →
                </Link>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

