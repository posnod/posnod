import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";

const hemeraPro = localFont({
  src: "../public/fonts/Heme-Pro-Regular.ttf",
  variable: "--font-hemera",
  weight: "400",
  style: "normal",
});

export const metadata = {
  title: "Posnod Learning",
  icons: {
    icon: "/images/L-Remove.png",
    shortcut: "/images/L-Remove.png",
    apple: "/images/L-Remove-png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={hemeraPro.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
