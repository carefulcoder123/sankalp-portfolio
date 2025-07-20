import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import ClickSpark from "./components/reactBits/Animations/ClickSpark/ClickSpark";



export default function Home() {
  return (
    <>
    <ClickSpark
  sparkColor='#fff'
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}
>
  {/* Your content here */}
    <Navbar />
    <HeroSection/>

    <div className="h-[1px] w-[80vw] mx-auto my-16  bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    <AboutSection/>
    <div className="h-[1px] w-[80vw] mx-auto my-16 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    <ProjectsSection/>
    <div className="h-[1px] w-[80vw] mx-auto my-16 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    <SkillsSection/>
    <div className="h-[1px] w-[80vw] mx-auto my-16 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    <ContactSection/>
</ClickSpark>



    </>
  )
}
