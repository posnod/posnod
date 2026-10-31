'use client';

import Button from '@/components/foundations/Button';

export default function Komunitas() {
  return (
    <div className="text-primary">
      {/* Section */}
      <section className="pt-2 pb-10 md:pt-8 md:pb-16 lg:pt-10 lg:pb-18">
        <div className="p-h1 text-center">
          <span className="inline-block px-4 py-1 mb-6 text-caption text-accent bg-secondary rounded-full">
            Segera Hadir
          </span>

          <h1 className="text-d2 mb-4 md:mb-5">
            Sambungkan Dirimu dengan Orang-Orang yang Suka Belajar
          </h1>
 
          <p className="text-body-base mb-6 md:mb-8 max-w-2xl mx-auto">
            Private Mode adalah fitur Posnod yang memungkinkan pengguna menyimpan, mengatur, menggabungkan, dan membangun struktur belajar pribadi dari konten yang mereka temukan di feed Posnod.
          </p>

          <Button variant="fill" size="md" radius="32">
            Bergabung Sekarang
          </Button>
        </div>
      </section>
    </div>
  );
}