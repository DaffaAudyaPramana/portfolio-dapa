import { projects } from "../data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <p className="text-purple-600 text-center font-semibold mb-2">
          Portfolio
        </p>

        <h2 className="text-4xl font-bold text-center mb-4">
          Project
        </h2>

        <p className="text-gray-600 text-center mb-12">
          Berikut beberapa project yang pernah saya kerjakan
        </p>

        <div className="group bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10 hover:border-purple-500 transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

      </div>
    </section>
  );
}