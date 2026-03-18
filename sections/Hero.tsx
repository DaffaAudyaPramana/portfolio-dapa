import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-black text-white pt-24"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <Reveal>
          <div>
            <p className="text-gray-400 mb-3">
              Halo, nama saya
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Daffa Audya Pramana
            </h1>

            <p className="text-gray-400 max-w-lg mb-8 leading-relaxed">
              Lulusan Teknik Informatika yang berfokus pada pengembangan aplikasi web sebagai
              <span className="text-white font-medium"> Fullstack Developer</span>.
              Saat ini saya juga sedang memperdalam pengetahuan di bidang
              <span className="text-white font-medium"> DevOps</span> untuk memahami
              proses deployment dan pengelolaan sistem secara end-to-end.
            </p>

            <a
              href="#contact"
              className="inline-block bg-purple-600 text-white px-7 py-3 rounded-full font-medium hover:bg-purple-700 transition duration-300"
            >
              Hubungi Saya
            </a>
          </div>
        </Reveal>

        {/* Right Content */}
        <Reveal>
          <div className="flex justify-center">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-purple-600 p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                <img
                  src="/profile.png"
                  alt="Daffa Audya Pramana"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}