"use client";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaNode, FaLinux, FaPython } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiNextdotjs, SiExpress, SiGit, SiAnsible, SiMysql } from "react-icons/si";


const skills = [
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Node.js", icon: <FaNode className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "MySQL", icon: <SiMysql className="text-yellow-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Git", icon: <SiGit className="text-red-500" /> },
  { name: "Linux", icon: <FaLinux className="text-gray-200" /> },
  { name: "Python", icon: <FaPython className="text-blue-400" /> },
  { name: "Ansible", icon: <SiAnsible className="text-red-400" /> },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 md:px-20  text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-indigo-400">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center justify-center bg-neutral-900 text-white rounded-xl py-6 shadow-md hover:scale-[1.03] transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="text-sm font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
