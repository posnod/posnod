'use client';

import Button from '@/components/foundations/Button';

// Icon Private
import NonLinierIcon from '@/components/icons/privateicon/NonLinierIcon';
import EvolvingIcon from '@/components/icons/privateicon/EvolvingIcon';
import OrganicIcon from '@/components/icons/privateicon/OrganicIcon';
import CollectiveIcon from '@/components/icons/privateicon/CollectiveIcon';
import Container from '@/components/icons/system/Container';
import ArrowRight2 from '@/components/icons/system/ArrowRight2';

export default function PrivateMode() {
  return (
    <div className="text-primary bg-tertiary">
      {/* Section 1: Hero */}
      <section className="page-p-hero pb-6 md:pb-8">
        <div className="container-wide mx-auto px-6">
          <h1 className="text-d1 mb-6 text-center container-reading mx-auto">
            Tempat rasa ingin tahu dan{' '}
            <strong className="inline-flex items-baseline gap-2 italic">
              <Container className="w-14 h-12 md:w-14 md:h-12" />
              Ruang
            </strong>{' '}
            bertemu.
          </h1>

          <p className="text-base text-center container-form mx-auto mt-2">
            Jelajahi berbagai topik dan temukan Unit dari orang-orang yang berbagi
            pengetahuan, pengalaman, dan perspektif mereka.
          </p>
        </div>
      </section>

      {/* Section 1.5: Ilustrasi Hero */}
      <section className="w-full h-48 md:h-64 lg:h-80 relative overflow-hidden">
        <img
          src="/images/PrivateModeHero.png"
          alt="Ilustrasi Private Mode"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white/80"></div>
      </section>

      {/* Section 2: Private Mode Intro */}
      <section className="py-16 md:py-24 bg-tertiary">
        <div className="container-wide mx-auto px-6">
          <div className="text-center container-reading mb-16 mx-auto">
            <span className="text-caption text-secondary mb-3 block">
              Private Mode
            </span>
            <h2 className="text-s1 text-primary mb-4 leading-tight">
              Bangun ruang belajar pribadimu.
            </h2>
            <p className="text-s1 text-secondary -mt-4">
              Simpan, susun, dan gabungkan konten sesuai caramu sendiri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container-compact mx-auto">
            {[
              {
                label: 'Kurikulum versimu',
                title: 'Susun Unit sesuai kebutuhanmu',
              },
              {
                label: 'Personal ke komunitas',
                title: 'Dibagikan & dikembangkan bersama.',
              },
              {
                label: 'Terus bergerak',
                title: 'Dibuat & terus dikembangkan.',
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-primary p-8 rounded-xl flex flex-col"
              >
                <div>
                  <span className="inline-block text-body-md text-tertiary tracking-widest">
                    {card.label}
                  </span>

                  <h3 className="text-h2 text-tertiary leading-snug mt-3">
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: How It Works */}
      <section className="py-16 md:py-20">
        <div className="container-compact mx-auto px-6">
          <div className="mb-12 md:mb-16 lg:mb-20 text-center">
            <span className="text-caption text-secondary block mb-3 md:mb-4">
              How it works?
            </span>
            <h2 className="container-reading text-s1 mx-auto">
              Simpan konten, susun jadi alur belajarmu sendiri.{' '}
              <span className="text-secondary font-normal">Privat atau bagikan.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-12 md:gap-16 lg:gap-24">
            {[
              {
                title: 'Belajar & Simpan',
                desc: 'Konten dari feed disimpan ke Private Mode.',
                detail:
                  'Konten yang menarik dapat dikumpulkan sebagai bagian dari ruang belajar, sehingga dapat kembali menjelajahinya, menghubungkannya dengan pengetahuan lain, dan melanjutkan pembelajaran sesuai dengan kebutuhanmu.',
                image: '/images/Belajar&Simpan.jpg',
                reverse: false,
              },
              {
                title: 'Susun Alur Pribadi',
                desc: 'Buat Fokus, kelompokkan konten, bentuk Unit.',
                detail:
                  'Mulai dari Fokus yang menarik perhatianmu, kelompokkan konten yang saling berkaitan, lalu bentuk menjadi Unit yang lebih terarah. Susun pengetahuan sesuai dengan hubungan dan kebutuhanmu sendiri, sehingga setiap hal yang kamu temukan dapat berkembang menjadi bagian dari alur pembelajaran yang personal.',
                image: '/images/SusunAlurPribadi.jpg',
                reverse: true,
              },
              {
                title: 'Publikasi',
                desc: 'Bagikan sebagai kurikulum, learning path, atau eksperimen.',
                detail:
                  'Bagikan alur pengetahuan yang telah kamu susun untuk digunakan dan dijelajahi oleh orang lain. Publikasi dapat mencakup berbagai bentuk, dari kurikulum, learning path, hingga eksperimen yang dapat dipelajari, diuji, dan dikembangkan bersama berdasarkan pengalaman mereka.',
                image: '/images/Publikasi.jpg',
                reverse: false,
              },
              {
                title: 'Evolusi Kolektif',
                desc: 'Orang lain pakai, ubah, atau gabungkan jadi versi baru.',
                detail:
                  'Biarkan pengetahuan berkembang melalui kontribusi orang lain. Alur yang kamu bagikan dapat digunakan, diubah, dikembangkan, atau digabungkan dengan pengetahuan lain menjadi versi baru yang lebih sesuai dengan kebutuhan dan perspektif masing-masing.',
                image: '/images/EvolusiKolektif.jpg',
                reverse: true,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 lg:gap-16 ${
                  item.reverse ? 'md:[&>div:first-child]:order-2' : ''
                }`}
              >
                <div className="flex flex-col justify-center max-w-md">
                  <h3 className="text-h2 mb-2 text-primary">
                    {item.title}
                  </h3>
                  <p className="text-body-base text-primary mb-3">
                    {item.desc}
                  </p>
                  <p className="text-body-sm text-secondary leading-relaxed">
                    {item.detail}
                  </p>
                </div>

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

      {/* Section Comparison Table */}
      <section className="py-16 md:py-24 bg-tertiary">
        <div className="container-wide mx-auto px-6 max-w-5xl">
          
          {/* Header Section */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-caption text-secondary tracking-widest mb-4 block">
              Private mode vs sistem publik
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
              Sistem publik mengikuti struktur dari Pro.{' '}
              <span className="text-secondary font-normal block mt-2 md:inline md:mt-0">
                Privat mode bebas dirombak jadi jalur belajarmu sendiri.
              </span>
            </h2>
          </div>

          {/* Table Wrapper */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left min-w-150">
              <thead>
                <tr className="border-b border-gray-300">
                  {/* Kolom Label (Kosong di Header) */}
                  <th className="w-[30%] py-5 px-4 font-normal"></th>
                  
                  {/* Kolom Sistem Publik - Ada garis kanan (vertikal tengah) */}
                  <th className="w-[35%] py-5 px-4 text-center text-sm font-semibold text-primary border-r border-gray-300">
                    Sistem Publik
                  </th>
                  
                  {/* Kolom Private Mode - Tanpa garis kanan */}
                  <th className="w-[35%] py-5 px-4 text-center text-sm font-semibold text-primary">
                    Private Mode
                  </th>
                </tr>
              </thead>
              
              <tbody>
                {[
                  { 
                    label: 'Konten dari Profesional', 
                    public: 'Tampilan sesuai urutan asli', 
                    private: 'Bisa diatur ulang.' 
                  },
                  { 
                    label: 'Unit & Fokus', 
                    public: 'Ditentukan oleh Profesional', 
                    private: 'Bisa dirancang dan digabung.' 
                  },
                  { 
                    label: 'Sumber konten', 
                    public: 'Satu Profesional', 
                    private: 'Gabungan banyak Profesional' 
                  },
                  { 
                    label: 'Urutan belajar', 
                    public: 'Mengikuti alur Profesional', 
                    private: 'Ditentukan sendiri' 
                  },
                  { 
                    label: 'Publikasi ke Komunitas', 
                    public: 'Tidak bisa', 
                    private: 'Opsional, bisa dibagikan' 
                  },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-300 last:border-b-0 group">
                    {/* Label Baris - Rata Kiri, Tanpa Garis Kanan */}
                    <td className="py-5 px-4 text-sm font-medium text-primary align-middle">
                      {row.label}
                    </td>
                    
                    {/* Isi Publik - Rata Tengah, Ada Garis Kanan (Vertikal Tengah) */}
                    <td className="py-5 px-4 text-sm text-center text-gray-500 border-r border-gray-300 align-middle">
                      {row.public}
                    </td>
                    
                    {/* Isi Private - Rata Tengah, Tanpa Garis Kanan */}
                    <td className="py-5 px-4 text-sm text-center text-gray-500 align-middle">
                      {row.private}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 5: CTA */}
      <section className="py-20 bg-tertiary mb-14">
        <div className="container-wide mx-auto px-6 text-center">
          <h2 className="text-h3 mb-6">Coba mulai sekarang</h2>
          <div className="flex justify-center items-center gap-4">
            <Button variant="accent" size="sm" radius="32">
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

      {/* Section 6: What You Can Do */}
      <section className="py-12 md:py-16">
        <div className="container-wide mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-caption text-secondary tracking-widest uppercase">
              What you can do?
            </span>
            <h2 className="text-s1 container-form mt-2 mb-4 mx-auto">
              Belajar tanpa linear, tanpa kurikulum final, tanpa perlu jadi Profesional.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container-form mx-auto">
            {[
              { Icon: NonLinierIcon, title: 'Non-Linear', desc: 'Semua orang punya jalurnya sendiri.' },
              { Icon: EvolvingIcon, title: 'Evolving', desc: 'Yang ada hanya versi yang terus diperbaiki.' },
              { Icon: OrganicIcon, title: 'Organic', desc: 'Bukan ditentukan institusi.' },
              { Icon: CollectiveIcon, title: 'Collective', desc: 'Bahkan tanpa harus jadi profesional.' },
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