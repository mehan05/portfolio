import Image from "next/image"
import type { ProfileInfo } from "@/types/portfolio"
import { motion } from "framer-motion"
import { SparklesText } from "./magicui/sparkles-text"

interface ProfileHeaderProps {
  profile: ProfileInfo
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center gap-8 mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative  w-60 h-60 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Image src={profile.avatar || "/placeholder.svg"} alt={profile.name} fill className="object-cover" />
      </motion.div>
      
      <div className="text-center md:text-left w-full">
        <motion.h1
          className="text-5xl font-bold bg-clip-text text-transparent text-violet-600  w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <SparklesText text={`${profile.name}`} />
        </motion.h1>
        <motion.p
          className="text-2xl mt-2 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {profile.role}
        </motion.p>
        <motion.p
          className="mt-4 text-gray-400 w-full text-sm" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {profile.bio}
        </motion.p>
      </div>
    </motion.div>
  )
}

