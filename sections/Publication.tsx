export default function Publications() {
  return (
    <section id="publications" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <p className="text-purple-600 text-center font-semibold mb-2">
          Publikasi
        </p>

        <h2 className="text-4xl font-bold text-center mb-4">
          Publikasi
        </h2>

        <p className="text-gray-600 text-center mb-16">
          Berikut publikasi jurnal dan buku saya
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* JURNAL */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">

            <img
              src="/publications/jurnal.png"
              alt="Jurnal"
              className="w-full h-48 object-cover"
            />

            <div className="p-6">

              <h3 className="text-xl font-semibold mb-4">
                Implementasi Framework Laravel Pada Perancangan Aplikasi Sistem
                Pendaftaran Programming Course Roblox
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Kursus pemrograman Roblox adalah sarana pendidikan yang telah berjalan
                selama sekitar 1 tahun, di mana kursus ini awalnya dimulai dalam skala kecil
                dan diselenggarakan secara daring pada setiap sesi sebagai sarana pembelajaran.
                Sejauh ini, pendaftaran peserta kursus masih dilakukan secara manual, yaitu
                peserta harus mengisi formulir pendaftaran dan mengirimkannya kepada admin.
                Oleh karena itu, sistem pendaftaran berbasis web dirancang untuk menyederhanakan
                proses pendaftaran dan pengelolaan data peserta kursus secara lebih efisien.
              </p>

              <a
                href="#"
                target="_blank"
                className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition"
              >
                Baca Selengkapnya
              </a>

            </div>
          </div>

          {/* BUKU */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">

            <img
              src="/publications/book.png"
              alt="Buku Roblox"
              className="w-full h-48 object-cover"
            />

            <div className="p-6">

              <h3 className="text-xl font-semibold mb-4">
                Tutorial Membuat Game Puzzle Roblox
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Di era teknologi yang berkembang pesat saat ini, game Roblox sangat erat
                kaitannya dalam kehidupan sehari-hari. Banyak pengguna yang menikmati game
                namun belum memahami bagaimana cara membuatnya, khususnya game puzzle.
                Buku ini dibuat sebagai panduan pembelajaran yang membahas konsep dasar
                hingga tutorial praktis dalam membangun game puzzle di Roblox dengan
                pendekatan yang mudah dipahami.
              </p>

              <a
                href="#"
                target="_blank"
                className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition"
              >
                Baca Selengkapnya
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}