import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Education from "@/sections/Education";
import Experience from "@/sections/Experience";
import Publications from "@/sections/Publications";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects/>
      <Education/>
      <Experience/>
      <Publications/>
      <Contact/>
    </main>
  );
}
