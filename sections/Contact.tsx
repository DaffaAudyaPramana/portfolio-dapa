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

        <h2 className="text-4xl font-bold mb-6">
          Hubungi Saya
        </h2>

        <div className="flex justify-center gap-4 flex-wrap">

          <a
            href="tel:082117252716"
            className="w-12 h-12 flex items-center justify-center rounded-full border hover:bg-purple-600 hover:text-white transition"
          >
            <Phone size={20} />
          </a>

          <a
            href="mailto:Daffaaudyapramana03@gmail.com"
            className="w-12 h-12 flex items-center justify-center rounded-full border hover:bg-purple-600 hover:text-white transition"
          >
            <Mail size={20} />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="w-12 h-12 flex items-center justify-center rounded-full border hover:bg-purple-600 hover:text-white transition"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            className="w-12 h-12 flex items-center justify-center rounded-full border hover:bg-purple-600 hover:text-white transition"
          >
            <Github size={20} />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            className="w-12 h-12 flex items-center justify-center rounded-full border hover:bg-purple-600 hover:text-white transition"
          >
            <Instagram size={20} />
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            className="w-12 h-12 flex items-center justify-center rounded-full border hover:bg-purple-600 hover:text-white transition"
          >
            <Youtube size={20} />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            className="w-12 h-12 flex items-center justify-center rounded-full border hover:bg-purple-600 hover:text-white transition"
          >
            <Twitter size={20} />
          </a>

        </div>

      </div>
    </section>
  );
}