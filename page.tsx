"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Mail, Twitter, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8 max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-white">
          <Image src="/placeholder.svg" alt="Profile" fill className="object-cover" />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            John Doe me
          </h1>
          <p className="text-xl mt-2 text-gray-300">Full Stack Developer</p>
          <p className="mt-2 text-gray-400 max-w-md">
            Building digital experiences with a focus on user-centric design and modern technologies.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Skills
        </h2>
        <Card className="p-6 bg-zinc-900 border-zinc-800">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL"].map((skill) => (
              <div key={skill} className="px-4 py-2 rounded-full border border-zinc-700 text-center text-sm">
                {skill}
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* Projects Grid */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Project One",
              description: "A full-stack web application",
              link: "#",
            },
            {
              title: "Project Two",
              description: "Mobile-first responsive design",
              link: "#",
            },
            {
              title: "Project Three",
              description: "API development and integration",
              link: "#",
            },
            {
              title: "Project Four",
              description: "UI/UX design implementation",
              link: "#",
            },
          ].map((project, index) => (
            <Card key={index} className="p-6 bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors">
              <h3 className="font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              <Link href={project.link} className="text-sm text-purple-400 hover:text-purple-300">
                Learn more →
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* Reach Out Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Reach Out
        </h2>
        <Card className="p-6 bg-zinc-900 border-zinc-800">
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button variant="outline" className="gap-2">
              <Mail className="w-4 h-4" />
              Email
            </Button>
            <Button variant="outline" className="gap-2">
              <Github className="w-4 h-4" />
              GitHub
            </Button>
            <Button variant="outline" className="gap-2">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
            <Button variant="outline" className="gap-2">
              <Twitter className="w-4 h-4" />
              Twitter
            </Button>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
      </footer>
    </div>
  )
}

