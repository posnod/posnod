'use client';

import '@/styles/global.css';
import Header from "@/components/layouts/header/Header";
import Footer from "@/components/layouts/footer/Footer";
import { useEffect, useState, useRef } from 'react';

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const hasLoadedRef = useRef(false);

  useEffect(() => {
    if (!hasLoadedRef.current) {
      hasLoadedRef.current = true;
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 5000);
      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen overflow-x-hidden">
        {/* Loading Overlay */}
        {isLoading && (
          <div className="fixed inset-0 z-50 bg-primary flex flex-col items-center justify-center">
            <div className="w-16 h-16 mb-8">
              <img
                src="/images/LogoLoading.png"
                alt="Posnod Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-sm text-secondary fixed bottom-4 left-0 right-0 text-center">
              <span className="font-bold">Media</span>{" "}
              <span className="font-normal">from</span>{" "}
              <span className="font-bold">Posnod</span>
            </p>
          </div>
        )}

        {/* Konten Utama */}
        {!isLoading && <Header />}
        <div className="grow flex flex-col min-h-0">{children}</div>
        <Footer />
      </body>
    </html>
  );
}