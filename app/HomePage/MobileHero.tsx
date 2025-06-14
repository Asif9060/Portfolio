'use client';
import profile from "../../public/profile.jpg"
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const MobileHero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black md:hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1" fill="currentColor" className="text-purple-400" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>
      
      <div className="relative flex flex-col items-center justify-center h-full px-6 text-center">
        {/* Profile Image */}
        <motion.div 
          className="relative w-52 h-52 mb-8 overflow-hidden rounded-full shadow-lg border-2 border-purple-500"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src={profile} 
            alt="Profile" 
            fill
            sizes="128px"
            className="object-cover"
            priority
          />
        </motion.div>
        
        {/* Headline */}
        <motion.h1 
          className="mb-3 text-3xl font-bold tracking-tight text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Creating Digital Experiences
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p 
          className="max-w-xs mb-8 text-base text-gray-300"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Front-end developer specializing in modern, responsive web applications
        </motion.p>
        
        {/* CTA Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/projects">
            <span 
              className="inline-block px-8 py-3 font-medium text-black transition-colors rounded-full shadow-md bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500"
              aria-label="View my projects"
            >
              View Projects
            </span>
          </Link>
        </motion.div>
      </div>
      
      {/* Decorative element */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-purple-900/30 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      />
    </div>
  );
};

export default MobileHero;