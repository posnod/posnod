"use client"

import Image from 'next/image';
import Button from '@/components/foundations/Button';

export default function LandingPage() {
  return (
    <main className="relative flex-1 w-full bg-white overflow-hidden pt-16">
      
      {/* Ilustrasi Landing */}
      <div className="fixed inset-0 pointer-events-none items-center justify-end hidden lg:flex pt-18 pb-16">
        <Image
          src="/images/IllustratorLand.png"
          alt="Abstract Learning Illustration"
          width={400}
          height={400}
          priority
          className="w-auto h-auto max-w-md" 
        />
      </div>

      {/* Konten Utama */}
    <div className="relative z-10 flex flex-col justify-center min-h-[55vh] px-6 pt-4 pb-8 mx-auto text-center lg:text-left items-center lg:items-start">
      <div className="container-wide space-y-8 lg:pl-16">
          <h1 className="text-d1 text-primary">
            Everything <br /> worth learning
          </h1>
          <p className="text-body-base md:text-body-lg lg:text-xl text-primary">
            Bangun jalur belajar yang sesuai dengan rasa ingin tahumu.
          </p>

          {/* Button */}
          <div className="pt-4">
            <Button href="/register" variant="accent" size="lg" radius="32">
              Bergabung Sekarang
            </Button>
          </div>

        </div>
      </div>

    </main>
  );
}
