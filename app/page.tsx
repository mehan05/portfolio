"use client"

import { useState, useEffect } from "react"
import { ProfileHeader } from "@/components/ProfileHeader"
import { SkillsSection } from "@/components/SkillsSection" 
import { ProjectsSection } from "@/components/ProjectsSection"
import { ContactSection } from "@/components/ContactSection"
import { profileInfo, skills, projects, socialLinks } from "@/data/portfolio-data"
import dynamic from "next/dynamic";

const WarpBackground = dynamic(() => import("@/components/magicui/warp-background"), { ssr: false });


export default function Portfolio() {
  const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);



if (!mounted) return null;


  return (

    
    <div
    className={`min-h-screen bg-gradient-to-br bg-black text-white dark:text-black transition-colors duration-300`}
    >
      <WarpBackground>
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8 bg-black ">
        <ProfileHeader profile={profileInfo} />
        <div className="w-full  ">
        <SkillsSection skills={skills} />

        </div>
        <ProjectsSection projects={projects} />
        <ContactSection socialLinks={socialLinks} />

        <footer className="text-center text-gray-400 text-sm mt-16">
          <p>
            © {new Date().getFullYear()} {profileInfo.name}. All rights reserved.
          </p>
        </footer>
      </div>

     
      </WarpBackground>
    </div>
  )
}

