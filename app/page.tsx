import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";


export default function Home() {
  return (
    <main className=" relative z-0 overflow-hidden  ">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  );
}
