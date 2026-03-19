"use client";

import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section 
    id="home"
    className="min-h-screen flex items-center pt-32 relative overflow-hidden">
      
      {/* subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* LEFT */}
        <Reveal>
          <div className="space-y-6">
            
            <p className="text-sm text-gray-400 tracking-wide">
              Halo, nama saya
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-white">Daffa Audya</span>{" "}
              <span className="text-purple-500">Pramana</span>
            </h1>

            <p className="text-gray-400 max-w-md leading-relaxed">
              Fullstack Developer dengan fokus pada pengembangan web scalable 
              dan saat ini memperdalam DevOps untuk memahami deployment end-to-end.
            </p>

            <div className="flex gap-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-300 shadow-lg hover:shadow-purple-500/30"
              >
                Hubungi Saya
              </a>
            </div>
          </div>
        </Reveal>

        {/* RIGHT */}
        <Reveal>
          <div className="flex justify-center">
            <div className="relative group">
              
              {/* glow effect */}
              <div className="absolute inset-0 rounded-full bg-purple-600 blur-3xl opacity-20 group-hover:opacity-40 transition duration-500" />

              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-600 relative z-10 transform group-hover:scale-105 transition duration-500">
                <img
                  src="/profile.png"
                  alt="Daffa"
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