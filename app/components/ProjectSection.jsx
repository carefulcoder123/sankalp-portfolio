// components/ProjectsSection.jsx
"use client";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import SplitText from "./reactBits/TextAnimations/SplitText/SplitText";



const projects = [
  {
    title: "ArroWorks",
    description:
      "Built a responsive website for ArroWorks, an agency platform, highlighting offered services and project showcases with an engaging and modern design.",
    image: "/arroworks.png",
    video: "https://res.cloudinary.com/dvfxxfjjm/video/upload/arroWorks_na18jo.mp4", // Optional
    link: "https://arro-works.vercel.app/",
  },
  {
    title: "Swizzle",
    description:
      "Created “Swizzle” — a vibrant café website featuring cocktails, enhanced with GSAP and scroll animations for an engaging, modern user experience.",
    image: "/swizzle.png",
    video: "https://res.cloudinary.com/dvfxxfjjm/video/upload/swizzle_xphvao.mp4", // Optional
    link: "https://swizzle-website.vercel.app/",
  },
  {
    title: "Mauli Opticals",
    description:
      "Built an e-commerce website for Mauli Opticals, featuring product listings, face-shape-based frame recommendations, and full add-to-cart and order functionality.",
    image: "/mauli_opticals.png",
    video: "https://res.cloudinary.com/dvfxxfjjm/video/upload/mauli_opticals_ok10fn.mp4", // Optional
    link: "https://mauliopticals.thsite.top/login.php",
  },
  {
    title: "SFitness",
    description:
      "Developed a responsive website for SFitness gym, showcasing available services, trainers, and programs with a clean and professional layout.",
    image: "/sfitness.png",
    video: "https://res.cloudinary.com/dvfxxfjjm/video/upload/sfitness_hek9jv.mp4", // Optional
    link: "https://s-fitness-gules.vercel.app/",
  },
];

export default function ProjectsSection() {
  return (
    <section id="portfolio" className="py-20 font-sora px-6 md:px-20 text-white scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        {/* <motion.h2 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0}}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-12 text-center text-indigo-400">
          My Work
        </motion.h2> */}
 
        <div className="flex justify-center">

          <SplitText
            text="My Work"
            className="text-4xl md:text-5xl font-bold h-[60px] mb-16 text-center text-neutral-200"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          viewport={{ once: true }}
          className="w-full flex justify-center">
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}


        </div>
      </div>
    </section>
  );
}
