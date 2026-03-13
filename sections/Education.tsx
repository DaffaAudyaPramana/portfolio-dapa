import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="bg-slate-700 text-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <p className="text-purple-400 font-semibold mb-2">
          Pendidikan & Bootcamp
        </p>

        <h2 className="text-4xl font-bold mb-4">
          Riwayat Pendidikan & Bootcamp
        </h2>

        <p className="text-gray-300 mb-12">
          Pernah dan sedang belajar pada program dan universitas berikut
        </p>

        <div className="flex flex-wrap justify-center gap-10">

          {education.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              className="group flex flex-col items-center"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="w-24 h-24 object-contain mb-4 grayscale group-hover:grayscale-0 transition"
              />

              <h4 className="font-semibold">{item.name}</h4>
              <p className="text-sm text-gray-300">{item.role}</p>
              <span className="text-xs text-gray-400">{item.year}</span>
            </a>
          ))}

        </div>

      </div>
    </section>
  );
}