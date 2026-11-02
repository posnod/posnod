    'use client';

import { useState } from 'react';
import Button from '@/components/foundations/Button';

// Icon TUF
import FrameworkIcon from '@/components/icons/tuficon/FrameworkIcon';
import SelectionIcon from '@/components/icons/tuficon/SelectionIcon';
import GuidanceIcon from '@/components/icons/tuficon/GuidanceIcon';
import ExplorationIcon from '@/components/icons/tuficon/ExplorationIcon';
import OrderIcon from '@/components/icons/tuficon/OrderIcon';
import AdaptabilityIcon from '@/components/icons/tuficon/AdaptabilityIcon';
import Container from '@/components/icons/system/Container';
import ArrowRight2 from '@/components/icons/system/ArrowRight2';

export default function TufPage() {
  const [activeTab] = useState('topik');

  return (
    <div className="text-primary bg-white">
      {/* Section Hero */}
      <section className="page-p-hero pb-6 md:pb-8">
        <div className="container-wide mx-auto px-6">
          <h1 className="text-d1 mb-6 text-center container-reading mx-auto">
            Tempat rasa ingin tahu dan{' '}
            <strong className="inline-flex items-baseline gap-2 italic m">
              <Container className="w-14 h-12 md:w-14 md:h-12" />
              Struktur
            </strong>{' '}
            bertemu.
          </h1>

          <p className="text-base text-center container-form mx-auto mt-2">
            Jelajahi berbagai topik dan temukan Unit dari orang-orang yang berbagi
            pengetahuan, pengalaman, dan perspektif mereka.
          </p>
        </div>
      </section>

      {/* Section Ilustrasi Hero */}
      <section className="w-full h-48 md:h-64 lg:h-80 relative overflow-hidden">
        <img
          src="/images/TufHero.jpg"
          alt="Ilustrasi TUF"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white/80"></div>
      </section>

      {/* Section Foundations */}
      <section className="py-16 md:py-24 bg-tertiary">
        <div className="container-wide mx-auto px-6">
          <div className="text-center container-reading mb-16 mx-auto">
            <span className="text-body-base text-secondary mb-3 block">
              Foundations
            </span>
            <h2 className="text-s1 text-primary mb-4 leading-tight">
              Topik, Unit, dan Fokus.
            </h2>
            <p className="text-s1 text-secondary ">
              Struktur yang membuat setiap materi saling terhubung dan tetap fleksibel.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container-compact mx-auto">
            {[
              {
                label: 'Topik',
                title: 'Fondasi semua konten',
                desc: 'Mengelompokkan ilmu besar untuk menemukan minat. Jadi navigasi platform.',
              },
              {
                label: 'Unit',
                title: 'Paket konten per-Topik',
                desc: 'Materi belajar lebih utuh. Jadi wadah proyek.',
              },
              {
                label: 'Fokus',
                title: 'Konsep inti tiap konten',
                desc: 'Konsep terkonsentrasi. Rekomendasi lebih akurat.',
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-primary p-8 rounded-xl flex flex-col justify-between min-h-70"
              >
                {/* Label */}
                <div>
                  <span className="inline-block text-body-md text-tertiary tracking-widest">
                    {card.label}
                  </span>
                  
                  {/* Title  */}
                  <h3 className="text-d2 text-tertiary leading-snug">
                    {card.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-h3 text-tertiary leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section How It Works */}
      <section className="py-12 md:py-16">
        <div className="container-reading mx-auto px-6">
          <div className="mb-12 md:mb-16 lg:mb-20 text-center">
            <span className="text-body-base text-secondary block mb-3 md:mb-4">
              How it works?
            </span>
            <h2 className="container-reading text-s1 mx-auto">
              Mekanisme sederhana dibalik sistem yang terstruktur,{' '}
              <span className="text-secondary font-normal">dari konsep sampai penerapannya.</span>
            </h2>
          </div>

          {/* Steps List */}
          <div className="flex flex-col gap-12 md:gap-16 lg:gap-24">
            {[
              {
                title: 'Pilih Topik',
                desc: 'Bidang keilmuan sebagai kerangka awal.',
                detail:
                  'Bidang keilmuan yang menjadi kerangka awal untuk menentukan arah eksplorasi, membantu pengguna mengetahui apa relevan, dan memperluas rasa ingin tahu tanpa membatasi ke mana pembelajaran dapat berkembang.',
                image: '/images/PilihTopik.jpg',
                reverse: false,
              },
              {
                title: 'Bangun Unit',
                desc: 'Pengetahuan yang disusun untuk dipahami.',
                detail:
                  'Pengetahuan yang disusun untuk dipahami. Membuat belajar lebih utuh, berurutan, dan bisa jadi lebih dari sekadar kumpulan konten. Unit memberikan ruang untuk membahas suatu gagasan, keterampilan, metode, atau peran secara lebih mendalam.',
                image: '/images/BangunUnit.jpg',
                reverse: true,
              },
              {
                title: 'Terapkan Fokus',
                desc: 'Konsep inti yang menghubungkan antar konten.',
                detail:
                  'Berikan konteks yang lebih spesifik pada pengetahuan dalam sebuah konten agar hal yang dibahas dapat dipahami dari sudut pandang yang lebih jelas. Fokus membantu menghubungkan pembahasan pada konsep, aktivitas, metode, teknis, atau istilah tertentu tanpa membuat keterkaitannya dengan bidang keilmuan lainnya.',
                image: '/images/TerapkanFokus.jpg',
                reverse: false,
              },
              {
                title: 'Terhubung',
                desc: 'Konten terkait ke Topik, Unit, dan Fokus.',
                detail:
                  'Kaitkan pengetahuan dalam sebuah konten dengan Topik, Unit, dan Fokus yang relevan agar setiap pembahasan memiliki konteks yang jelas dan dapat ditemukan melalui belajar pengetahuan. Hubungan ini membantu pengguna melihat keterkaitan antara satu konten dengan pengetahuan lain melalui bagaimana mereka dapat menjelajahinya.',
                image: '/images/Terhubung.jpg',
                reverse: true,
              },
              {
                title: 'Belajar terarah',
                desc: 'Alur yang terstruktur dan mudah dipahami.',
                detail:
                  'Terstruktur dan mudah dipahami untuk membantu memahami suatu pengetahuan secara bertahap. Setiap bagian dirancang dengan hubungan yang jelas sehingga dapat membantu konteks, melihat keterkaitan antar pembahasan, dan menentukan sendiri sejauh mana ingin menjelajahinya.',
                image: '/images/BelajarTerarah.jpg',
                reverse: false,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 lg:gap-16 ${
                  item.reverse ? 'md:[&>div:first-child]:order-2' : ''
                }`}
              >
                {/* Text Content */}
                <div className="flex flex-col justify-center max-w-md">
                  <h3 className="text-h2 font-semibold mb-2 text-primary">{item.title}</h3>
                  <p className="text-body-base font-medium text-primary mb-3">{item.desc}</p>
                  <p className="text-body-sm text-secondary leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                {/* Image Content */}
                <div className="w-full">
                  <div className="relative aspect-16/10 md:aspect-6/4 rounded-xl overflow-hidden bg-tertiary">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-20 mb-14 bg-tertiary">
        <div className="container-wide mx-auto px-6 text-center">
          <h2 className="text-h3 mb-6">Coba mulai sekarang</h2>
          <div className="flex justify-center items-center gap-4">
            <Button
              variant="accent"
              size="sm"
              radius="32"
            >
              Mulai Gratis
            </Button>
            <a
              href="#"
              className="text-body-sm text-secondary flex items-center gap-1"
            >
              Jelajahi Posnod <ArrowRight2 className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* Section What You Can Do */}
      <section className="py-12 md:py-16">
        <div className="container-wide mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-body-base text-secondary">What you can do?</span>
            <h2 className="text-s1 container-form mt-2 mb-4 mx-auto">
              Ini yang terjadi saat struktur, kurasi, dan fokus bekerja sama.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container-form mx-auto">
            {[
              { Icon: FrameworkIcon, title: 'Framework', desc: 'Alur belajar dari Topik sampai Fokus.' },
              { Icon: SelectionIcon, title: 'Selection', desc: 'Rangkaian pembelajaran yang konsisten.' },
              { Icon: GuidanceIcon, title: 'Guidance', desc: 'Sistem memahami spesifikasi konten.' },
              { Icon: ExplorationIcon, title: 'Exploration', desc: 'Jelajah dari ilmu besar ke konsep kecil.' },
              { Icon: OrderIcon, title: 'Order', desc: 'Semua materi ada tempatnya.' },
              { Icon: AdaptabilityIcon, title: 'Adaptability', desc: 'Mudah diperluas tanpa berantakan.' },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-tertiary p-1 rounded-lg flex flex-row items-center gap-3 w-full mx-auto"
              >
                <div className="shrink-0 flex items-center justify-center pl-3 -mt-6">
                  <item.Icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-body-base">{item.title}</h3>
                  <p className="text-caption text-secondary -mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}