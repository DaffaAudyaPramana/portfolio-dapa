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
  Saya adalah lulusan <strong>Bachelor of Applied Computer Science</strong> 
  dengan pengalaman sebagai <strong>Fullstack Developer</strong> dan 
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
  <h3 className="text-3xl font-bold mb-6 text-black">
    Spesialisasi & Tech Stack
  </h3>

  <p className="text-gray-700 leading-relaxed mb-6">
    Sebagai <strong>Fullstack Developer</strong> dengan pengalaman di sisi 
    pengembangan dan operasional sistem, fokus utama saya adalah membangun 
    aplikasi web yang terstruktur, scalable, serta mudah dikelola dalam 
    lingkungan production.
  </p>

  <ul className="space-y-4 text-gray-700">
    <li>
      <strong>Frontend:</strong> HTML, CSS, JavaScript (ES6), Vue.js, Laravel
    </li>
    <li>
      <strong>Backend:</strong> Golang, Laravel, RESTful API Development
    </li>
    <li>
      <strong>Database:</strong> MySQL, PostgreSQL, MongoDB
    </li>
    <li>
      <strong>DevOps & Deployment:</strong> Docker, Docker Compose, 
      Reverse Proxy (Traefik), Server Troubleshooting
    </li>
    {/* <li>
      <strong>Architecture & Workflow:</strong> Microservices-based systems, 
      SDLC, Clean Code Principles
    </li> */}
  </ul>

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
    },
    // {
    //   icon: <Youtube size={18} />,
    //   link: "https://youtube.com/@username",
    // },
    // {
    //   icon: <Twitter size={18} />,
    //   link: "https://twitter.com/username",
    // },
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
    </section>
  );
}
