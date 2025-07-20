// components/ProjectsSection.jsx
"use client";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "ArroWorks",
    description:
      "A music streaming UI clone built with Next.js and Tailwind. Responsive layout and smooth playback UI.",
    image: "/arroworks.png",
    video: "https://res.cloudinary.com/dvfxxfjjm/video/upload/arroWorks_na18jo.mp4", // Optional
    link: "https://arro-works.vercel.app/",
  },
  {
    title: "Swizzle",
    description:
      "A CRM web app to manage customer interactions using Spring Boot and Hibernate with dynamic charts.",
    image: "/swizzle.png",
    video: "https://res.cloudinary.com/dvfxxfjjm/video/upload/swizzle_xphvao.mp4", // Optional
    link: "https://swizzle-website.vercel.app/",
  },
  {
    title: "Mauli Opticals Website",
    description:
      "A modern portfolio website for a freelancer agency built using React and Framer Motion.",
    image: "/mauli_opticals.png",
    video: "https://res.cloudinary.com/dvfxxfjjm/video/upload/mauli_opticals_ok10fn.mp4", // Optional
    link: "https://mauliopticals.thsite.top/login.php",
  },
  {
    title: "SFitness",
    description:
      "A modern portfolio website for a freelancer agency built using React and Framer Motion.",
    image: "/sfitness.png",
    video: "https://res.cloudinary.com/dvfxxfjjm/video/upload/sfitness_hek9jv.mp4", // Optional
    link: "https://s-fitness-gules.vercel.app/",
  },
];

export default function ProjectsSection() {
  return (
    <section id="portfolio" className="py-20 font-sora px-6 md:px-20 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-indigo-400">
          My Work
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
