"use client";
import { motion } from "framer-motion";

export default function JourneySection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-start pt-32 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-24 text-indigo-400">
            Who is Sankalp?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I'm Sankalp, a passionate web developer who turned curiosity into code.
            I build modern apps with React, Next.js, and Tailwind, focusing on clean design and real-world functionality.
          </p>
          <p className="text-gray-400 mt-4">
            Outside of development, I love exploring automation, open-source, and building tools with AI.
          </p>
        </motion.div>

        {/* Optional Illustration */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
<img
  src="/about.jpg"
  alt="Journey Illustration"
  className="w-64 md:w-[90%] rounded-3xl object-cover shadow-lg"
  style={{
    clipPath:
      "polygon(61% 0, 100% 22%, 93% 64%, 63% 100%, 24% 92%, 0 66%, 12% 27%, 42% 7%)",
  }}
/>


        </motion.div>

      </div>
    </section>
  );
}
