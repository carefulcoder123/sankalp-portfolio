"use client";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import DotGrid from "./reactBits/Backgrounds/DotGrid/DotGrid";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen max-w-screen w-full flex items-center justify-center px-4 md:px-16 py-28 md:py-18 overflow-hidden">

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
  <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full max-w-7xl mx-auto z-10">

    {/* Text Section */}
    <div className="flex-1 text-center md:text-left px-2">
      <motion.h1
        className="text-4xl font-cursive md:text-7xl font-bold text-white mb-8"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span>Hi, I'm </span>
        <span className="text-teal-500">
          <Typewriter
            words={[
              'Sankalp',
              'a Web Developer',
              'a Linux Administrator',
              'an Tech Enthusiast',
              'a Fast Learner',
            ]}
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
        A lifelong learner in tech — developing modern web apps and automating Linux systems with Ansible to build efficient and scalable solutions.
      </motion.p>

      <motion.a
        href="#portfolio"
        className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-black font-semibold backdrop-blur-md border border-neutral-400 bg-neutral-100 hover:bg-neutral-200 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg hover:scale-[1.03] group"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
      >
        <span className="text-base">Explore My Work</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
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
