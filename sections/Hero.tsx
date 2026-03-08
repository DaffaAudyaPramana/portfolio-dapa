import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <Reveal>
        <div>
          <p className="animate-FadeInUp">
            Halo Semua 👋, Saya
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Daffa Audya Pramana
          </h1>

          <p className="text-gray-600 mb-6">
            IT Programmer yang berfokus pada pengembangan aplikasi web modern
            menggunakan React & Next.js.
          </p>

          <a
            href="#contact"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-700 transition"
          >
            Hubungi Saya
          </a>
        </div>
        </Reveal>

        {/* Right Content */}
        <Reveal>
        <div className="flex justify-center">
          <div className="w-72 h-72 rounded-full bg-purple-600 flex items-center justify-center overflow-hidden">
            <img
              src="/profile.png"
              alt="Daffa"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        </Reveal>

      </div>
    </section>
  );
}
