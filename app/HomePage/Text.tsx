"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "../../components/ui/hero-highlight";

export default function Text() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold  text-white dark:text-white max-w-4xl leading-relaxed lg:leading-snug mx-auto "
      >
        Hi! I&apos;m {" "}
        <Highlight className="text-gray-900 dark:text-white">
          Asif Foisal
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
