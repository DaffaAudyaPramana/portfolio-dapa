import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Daffa Audya P | Portfolio",
  description: "Portfolio IT Programmer Daffa Audya",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-white text-gray-900 min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
