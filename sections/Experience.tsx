import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <p className="text-purple-600 font-semibold mb-2">
          Pengalaman
        </p>

        <h2 className="text-4xl font-bold mb-4 text-black">
          Pengalaman Kerja, Freelance, & Magang
        </h2>

        <p className="text-gray-600 mb-16">
          Pernah bekerja dan magang pada perusahaan berikut
        </p>

        <div className="flex justify-center gap-12 flex-wrap">

          {experiences.map((exp, index) => (
            <a
              key={index}
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-24 h-24 object-contain 
                           grayscale 
                           opacity-60
                           transition 
                           duration-300 
                           group-hover:grayscale-0 
                           group-hover:opacity-100 
                           group-hover:scale-110"
              />
            </a>
          ))}

        </div>

      </div>
    </section>
  );
}