export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h3 className="text-xl font-semibold text-white mb-2">
          Daffa Audya Pramana
        </h3>

        <p className="text-sm mb-4">
          Daffaaudyapramana03@gmail.com
        </p>

        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Daffa Audya Pramana. All rights reserved.
        </p>

      </div>
    </footer>
  );
}