"use client";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useState } from "react";

export default function ProjectCard({ title, description, image, video, link, index }) {
  const [hovered, setHovered] = useState(false);
 
  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative bg-neutral-900 rounded-xl rounded-t-[30px] overflow-hidden backdrop-blur-md shadow-lg border border-white/10 transition-all duration-300 hover:scale-[1.02]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Image and Video Stack */}
      <div className="relative w-full h-44">
        {/* Image */}
        <img
          src={image}
          alt={title}
          className={`absolute top-0 left-0 w-full h-full object-cover rounded-t-[30px] transition-opacity duration-500 ${hovered ? "opacity-0" : "opacity-100"}`}
        />
        {/* Video */}
        <video
          src={video}
          muted
          loop
          playsInline
          autoPlay
          className={`absolute top-0 left-0 w-full h-full object-cover rounded-t-[30px] transition-opacity duration-500 ${hovered ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-neutral-300"
            title="View Live"
          >
            <Globe size={20} />
          </a>
        </div>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </motion.div>
  );
}
