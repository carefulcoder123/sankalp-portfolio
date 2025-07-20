"use client";
import { motion } from "framer-motion";
import SplitText from "./reactBits/TextAnimations/SplitText/SplitText";


export default function JourneySection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-start py-20 px-6 md:px-20 scroll-mt-24"
    >
<div className="max-w-6xl mx-auto text-center md:text-left"> {/* Added px-4 and text-center */}
  <SplitText
    text="Who is Sankalp?"
    className="text-3xl sm:text-4xl md:text-5xl  font-bold mb-16 text-indigo-500"
    delay={100}
    duration={0.6}
    ease="power3.out"
    splitType="chars"
    from={{ opacity: 0, y: 40 }}
    to={{ opacity: 1, y: 0 }}
    threshold={0.1}
    rootMargin="-100px"
  />

  <div className="grid md:grid-cols-2 gap-10 items-center text-left"> {/* text-left for paragraphs */}
    {/* Text Section */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <p className="text-gray-300 text-lg leading-relaxed text-justify">
        I’m Sankalp, a web developer and automation enthusiast who believes in building smart, scalable solutions.
        I specialize in building modern, responsive web apps using React, Next.js, and Tailwind CSS, while ensuring performance and clean UI/UX.
        <br /><br />
        With a strong foundation in Linux (RHCSA certified) and hands-on experience with automation using Ansible, I enjoy bridging the gap between development and infrastructure. I'm deeply curious about DevOps, open-source tools, and exploring how AI can enhance productivity.
      </p>
      <p className="text-gray-400 mt-4">
        Apart from development, I focus on enhancing workflows through automation and learning how to build with AI.
      </p>
    </motion.div>

    {/* Image Section */}
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
</div>





    </section>
  );
}
