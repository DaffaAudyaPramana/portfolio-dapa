import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-700 text-center">
      <div className="max-w-6xl mx-auto px-6">

        <p className="text-purple-400 font-semibold mb-2">
          Pendidikan & Bootcamp
        </p>

        <h2 className="text-4xl font-bold text-white mb-4">
          Riwayat Pendidikan & Bootcamp
        </h2>

        <p className="text-gray-300 mb-16">
          Pernah dan sedang belajar pada program dan universitas berikut
        </p>

        <div className="flex justify-center gap-14 flex-wrap">

          {education.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <img
                src={item.logo}
                alt="education"
                className="
                  w-34 h-34 object-contain
                  grayscale opacity-60
                  transition-all duration-300
                  group-hover:grayscale-0
                  group-hover:opacity-100
                  group-hover:scale-110
                "
              />
            </a>
          ))}

        </div>

      </div>
    </section>
  );
}