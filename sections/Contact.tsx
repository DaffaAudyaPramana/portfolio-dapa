import {
  Mail,
  Linkedin,
  Github,
  Instagram,
  Youtube,
  Twitter,
  Phone
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50 text-center">
      <div className="max-w-4xl mx-auto px-6">

        <p className="text-purple-600 font-semibold mb-2">
          Kontak
        </p>

        <h2 className="text-4xl font-bold mb-6 text-black">
          Hubungi Saya
        </h2>

        <div className="flex justify-center gap-4 flex-wrap">

          <a
            href="tel:082117252716"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-purple-200 text-purple-600 hover:bg-purple-600 hover:text-white hover:scale-110 transition duration-300"
          >
            <Phone size={20} />
          </a>

          <a
            href="mailto:Daffaaudyapramana03@gmail.com"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-purple-200 text-purple-600 hover:bg-purple-600 hover:text-white hover:scale-110 transition duration-300"
          >
            <Mail size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/daffaaudyapramana/"
            target="_blank"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-purple-200 text-purple-600 hover:bg-purple-600 hover:text-white hover:scale-110 transition duration-300"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="https://github.com/DaffaAudyaPramana"
            target="_blank"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-purple-200 text-purple-600 hover:bg-purple-600 hover:text-white hover:scale-110 transition duration-300"
          >
            <Github size={20} />
          </a>

          <a
            href="https://instagram.com/audydaffpramn"
            target="_blank"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-purple-200 text-purple-600 hover:bg-purple-600 hover:text-white hover:scale-110 transition duration-300"
          >
            <Instagram size={20} />
          </a>

          {/* <a
            href="https://youtube.com"
            target="_blank"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-purple-200 text-purple-600 hover:bg-purple-600 hover:text-white hover:scale-110 transition duration-300"
          >
            <Youtube size={20} />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-purple-200 text-purple-600 hover:bg-purple-600 hover:text-white hover:scale-110 transition duration-300"
          > */}
            {/* <Twitter size={20} />
          </a> */}

        </div>

      </div>
    </section>
  );
}