import type React from "react"

export interface Project {
  title: string
  description: string
  link: string
  technologies?: string[]
  image?: string
}

export interface Skill {
  name: string
  logo: string
  category?: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: React.ComponentType<{ className?: string }>
}

export interface ProfileInfo {
  name: string
  role: string
  bio: string
  avatar: string
}

