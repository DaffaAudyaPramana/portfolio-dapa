import {
  Mail,
  Linkedin,
  Github,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div>
          <p className="text-purple-600 font-semibold mb-3 uppercase tracking-wide text-black">
            Tentang Saya
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug text-black">
            Fullstack Developer & DevOps Engineer
          </h2>

<p className="text-gray-700 leading-relaxed mb-6">
  Saya adalah lulusan Teknik Informatika 
  dengan pengalaman <strong>Fullstack Developer</strong> dan 
  <strong> Junior DevOps Engineer</strong>. Saya terbiasa mengembangkan 
  dan mengelola aplikasi web end-to-end, mulai dari perancangan antarmuka 
  hingga pengelolaan sistem di sisi server.
</p>

<p className="text-gray-700 leading-relaxed">
  Berpengalaman bekerja dalam lingkungan pengembangan berbasis microservices, 
  saya fokus pada membangun solusi yang stabil, efisien, dan mudah dikembangkan. 
  Saya juga memiliki pemahaman dalam deployment aplikasi serta memastikan 
  performa sistem tetap optimal melalui monitoring dan troubleshooting yang terstruktur.
</p>

          {/* KONTRIBUSI */}
          <h3 className="text-2xl font-bold mt-12 mb-4 text-black">
            Kontribusi Profesional
          </h3>

          <p className="text-gray-700 leading-relaxed">
            Berkontribusi dalam deployment dan maintenance aplikasi 
            microservices di lingkungan staging & production, pengelolaan 
            database, reverse proxy configuration (Traefik), backup & restore 
            database, serta pengembangan sistem berbasis web seperti 
            IQ Test, CMS, dan sistem assessment berbasis Laravel.
          </p>
        </div>


{/* RIGHT SIDE */}
<div>
  <h3 className="text-3xl font-bold mb-6 text-white">
    Spesialisasi & Tech Stack
  </h3>

  <p className="text-gray-400 leading-relaxed mb-8 max-w-xl">
    Sebagai <span className="text-purple-400 font-semibold">Fullstack Developer</span>, 
    saya membangun aplikasi yang scalable, maintainable, dan siap production 
    dengan pendekatan modern engineering.
  </p>

  {/* GRID */}
  <div className="grid sm:grid-cols-2 gap-5">

    {/* CARD */}
    <div className="p-5 rounded-xl bg-white/5 backdrop-blur border border-white/10 hover:border-purple-500 transition group">
      <h4 className="font-semibold text-white mb-2 group-hover:text-purple-400 transition">
        Frontend
      </h4>
      <p className="text-sm text-gray-400">
        HTML, CSS, JavaScript (ES6), Vue.js, Laravel
      </p>
    </div>

    <div className="p-5 rounded-xl bg-white/5 backdrop-blur border border-white/10 hover:border-purple-500 transition group">
      <h4 className="font-semibold text-white mb-2 group-hover:text-purple-400 transition">
        Backend
      </h4>
      <p className="text-sm text-gray-400">
        Golang, Laravel, RESTful API
      </p>
    </div>

    <div className="p-5 rounded-xl bg-white/5 backdrop-blur border border-white/10 hover:border-purple-500 transition group">
      <h4 className="font-semibold text-white mb-2 group-hover:text-purple-400 transition">
        Database
      </h4>
      <p className="text-sm text-gray-400">
        MySQL, PostgreSQL, MongoDB
      </p>
    </div>

    <div className="p-5 rounded-xl bg-white/5 backdrop-blur border border-white/10 hover:border-purple-500 transition group">
      <h4 className="font-semibold text-white mb-2 group-hover:text-purple-400 transition">
        DevOps
      </h4>
      <p className="text-sm text-gray-400">
        Docker, Traefik, Deployment, Troubleshooting
      </p>
    </div>
          {/* CONNECT */}
<h3 className="text-3xl font-bold mt-12 mb-4 text-black">
  Mari Terkoneksi
</h3>

<p className="text-gray-700 mb-6">
  Terbuka untuk kolaborasi, diskusi teknologi, atau peluang profesional baru.
  Jangan ragu untuk menghubungi saya melalui:
</p>

<div className="flex flex-wrap gap-4">
  {[
    {
      icon: <Mail size={18} />,
      link: "mailto:Daffaaudyapramana03@gmail.com",
    },
    {
      icon: <Linkedin size={18} />,
      link: "https://linkedin.com/in/daffaaudyapramana",
    },
    {
      icon: <Github size={18} />,
      link: "https://github.com/DaffaAudyaPramana",
    },
    {
      icon: <Instagram size={18} />,
      link: "https://instagram.com/audydaffpramn",
    }
  ].map((item, index) => (
    <a
      key={index}
      href={item.link}
      target="_blank"
      className="w-11 h-11 flex items-center justify-center rounded-full 
                 border border-gray-300 bg-white text-black 
                 hover:bg-black hover:text-white 
                 transition-all duration-300"
    >
      {item.icon}
    </a>
  ))}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
