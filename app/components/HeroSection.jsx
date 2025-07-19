"use client";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import DotGrid from "./reactBits/Backgrounds/DotGrid/DotGrid";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-46 py-20 overflow-hidden">

      {/* DotGrid Background */}
      <div className="absolute inset-0 bg-neutral-950 -z-10">
        <DotGrid
          dotSize={6}
          gap={15}
          baseColor="#364153"
          activeColor="#6a7282"
          backgroundColor="transparent"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full z-10">
        
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            className="text-4xl font-cursive md:text-7xl font-bold text-white mb-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span>Hi, I'm </span>
            <span className="text-blue-400">
              <Typewriter
                words={['Sankalp', 'a Web Developer', 'a Problem Solver']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl text-gray-300 max-w-xl mb-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            A passionate developer focused on crafting beautiful and functional web experiences.
          </motion.p>

          <motion.a
            href="#portfolio"
            className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-7 py-4 rounded-full transition"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Explore My Work
          </motion.a>
        </div>

        {/* Image Section */}
        <motion.div
          className="flex-shrink-0 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <img
            src="/profile.png"
            alt="Sankalp"
            className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-gray-600 shadow-3xl object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}
