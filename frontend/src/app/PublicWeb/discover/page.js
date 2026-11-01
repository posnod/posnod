'use client';

import { useState } from 'react';
import Button from '@/components/foundations/Button';

// Icon Page
import Number1 from '@/components/icons/discovericon/Number-1';
import Number2 from '@/components/icons/discovericon/Number-2';
import Number3 from '@/components/icons/discovericon/Number-3';
import Number4 from '@/components/icons/discovericon/Number-4';
import Number5 from '@/components/icons/discovericon/Number-5';
import Number6 from '@/components/icons/discovericon/Number-6';
import DiscoverIcon from '@/components/icons/discovericon/DiscoverIcon';
import ConnectIcon from '@/components/icons/discovericon/ConnectIcon';
import ObserveIcon from '@/components/icons/discovericon/ObserveIcon';
import LearnIcon from '@/components/icons/discovericon/LearnIcon';
import SharingIcon from '@/components/icons/discovericon/SharingIcon';
import CreatedIcon from '@/components/icons/discovericon/CreatedIcon';
import ReflectIcon from '@/components/icons/discovericon/ReflectIcon';
import GrowIcon from '@/components/icons/discovericon/GrowIcon';
import PlusIcon from '@/components/icons/discovericon/PlusIcon';
import MinusIcon from '@/components/icons/discovericon/MinusIcon';
import Container from '@/components/icons/system/Container'
import MediaText from '@/components/icons/discovericon/MediaText';
import ProPlusText from '@/components/icons/discovericon/ProPlusText';
import InkText from '@/components/icons/discovericon/InkText';


export default function Discover() {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <div className="text-primary bg-white">
      {/* Section Hero */}
      <section className="page-p-hero pb-6 md:pb-8">
        <div className="container-wide mx-auto px-6">
            <h1 className="text-d1 mb-6 text-center container-reading mx-auto">
            Tempat rasa ingin tahu dan{' '}
            <strong className="inline-flex items-baseline gap-2 italic m">
              <Container className="w-14 h-12 md:w-14 md:h-12" />
              Pengetahuan
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
          src="/images/DiscoverHero.png"
          alt="Ilustrasi Discover"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white/80"></div>
      </section>

      {/* Section Services */}
      <section className="py-8 md:py-12">
        <div className="container-wide mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-body-base text-secondary">Services</span>
            <h2 className="text-s2 mt-2 mb-4 container-form mx-auto">
              Dari konten yang kamu temukan, sampai karya yang kamu susun sendiri.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                category: 'Social Learning',
                title: 'Media',
                desc: 'Belajar dengan cara yang lebih natural, seperti menjelajah feed, namun tetap terarah.',
                image: '/images/BackgroundMediaa.jpg',
                TextIcon: MediaText,
              },
              {
                category: 'For a Professional',
                title: 'Pro+',
                desc: 'Ruang para professional untuk membuat konten dan membagikannya.',
                image: '/images/BackgroundProo+.jpg',
                TextIcon: ProPlusText,
              },
              {
                category: 'Coming Soon',
                title: 'Ink',
                desc: 'Solusi untuk institusi, perusahaan, sekolah, kampus, dan organisasi.',
                image: '/images/BackgroundInk.png',
                TextIcon: InkText,
              },
            ].map((card, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div className="relative h-56 rounded-3xl overflow-hidden group">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <card.TextIcon className="w-32 h-16 md:w-40 md:h-20" />
                  </div>
                </div>
                <div className="text-start">
                  <span className="text-caption text-secondary">{card.category}</span>
                  <p className="text-body-md text-sprimary mt-1">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section How It Works */}
      <section className="py-10 md:py-16 ml-36">
        <div className="container-wide mx-auto px-6 grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 items-start">
          {/* Kolom Kiri - Header */}
          <div>
            <span className="text-body-base text-secondary">How its work?</span>
          </div>

          {/* Kolom Kanan - Step List */}
          <div className="flex flex-col gap-4">
            <h2 className="text-s1 container-reading">
              Menggabungkan struktur dan fleksibilitas,
            </h2>
            <h3 className="text-s1 container-form text-secondary -mt-4">
              untuk menemukan dan menyusun pengetahuanmu sendiri.
            </h3>
            {[
              { num: 1, title: 'Mulai dari Topik', desc: 'Pintu masuk ke satu bidang keilmuan.' },
              { num: 2, title: 'Temukan lewat feed', desc: 'Konten muncul otomatis sesuai Topik yang dipilih.' },
              { num: 3, title: 'Pahami lewat Unit', desc: 'Rangkaian konten yang tersusun, bukan acak.' },
              { num: 4, title: 'Hubungkan dengan Fokus', desc: 'Menghubungkan konsep lintas Unit.' },
              { num: 5, title: 'Susun pembelajaran pribadi', desc: 'Simpan, gabung, dan atur alur sesuai keinginanmu.' },
              { num: 6, title: 'Belajar dengan ritme sendiri', desc: 'Tanpa target waktu dan tekanan sosial.' },
            ].map((step) => (
              <div
                key={step.num}
                className="flex items-center gap-5 w-2xl bg-gray-200 rounded-xl px-4 py-3"
              >
                {/* Badge Nomor */}
                <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center">
                  {step.num === 1 && <Number1 className="w-8 h-8" />}
                  {step.num === 2 && <Number2 className="w-8 h-8" />}
                  {step.num === 3 && <Number3 className="w-8 h-8" />}
                  {step.num === 4 && <Number4 className="w-8 h-8" />}
                  {step.num === 5 && <Number5 className="w-8 h-8" />}
                  {step.num === 6 && <Number6 className="w-8 h-8" />}
                </div>

                {/* Teks */}
                <div>
                  <h4 className="font-medium text-body-base">{step.title}</h4>
                  <p className="text-body-sm text-secondary -mt-2">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section What You Can Do */}
      <section className="py-12 md:py-16">
        <div className="container-wide mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-body-base text-secondary">What you can do?</span>
            <h2 className="text-s1 container-form mt-2 mb-4 mx-auto">
              Setiap orang belajar dengan cara berbeda, ini caramu.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container-form mx-auto">
            {[
              { Icon: DiscoverIcon, title: 'Discover', desc: 'Ide dan perspektif baru lewat alur yang hidup.' },
              { Icon: ConnectIcon, title: 'Connect', desc: 'Terhubung dengan orang yang selaras.' },
              { Icon: ObserveIcon, title: 'Observe', desc: 'Lihat cara orang lain berpikir dan menyusun.' },
              { Icon: LearnIcon, title: 'Learn', desc: 'Inti konsep, contoh, dan praktik kecil.' },
              { Icon: SharingIcon, title: 'Sharing', desc: 'Bagikan prosesmu, buka ruang diskusi baru.' },
              { Icon: CreatedIcon, title: 'Create', desc: 'Ubah pemahaman jadi karya nyata.' },
              { Icon: ReflectIcon, title: 'Reflect', desc: 'Amati apa yang bekerja dan tidak.' },
              { Icon: GrowIcon, title: 'Grow', desc: 'Perluas jangkauan, bangun kompetensi.' },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-200 p-1 rounded-2xl border border-medium flex flex-row items-center gap-3 w-full mx-auto"
              >
                <div className="shrink-0 flex items-center justify-center pl-3 -mt-6">
                  <item.Icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-body-base ">{item.title}</h3>
                  <p className="text-caption text-secondary -mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section className="py-16 md:py-24">
        <div className="container-wide pl-28 mx-auto px-6 grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 items-start">
          
          <div>
            <h2 className="text-body-base text-secondary flex items-center gap-2">FAQ's</h2>
          </div>

          {/* Kolom dan List Pertanyaan*/}
          <div className="container-content pl-24 flex flex-col divide-y divide-gray-400">
            {[
              {
                question: 'Apa itu Posnod?',
                answer: 'Posnod adalah platform pembelajaran yang membantu siapa pun menemukan, mempelajari, dan membangun pengetahuan secara mandiri. Kamu bebas menentukan apa yang ingin dipelajari, dari mana memulainya, bagaimana prosesnya, dan sejauh mana ingin mendalaminya.',
              },
              {
                question: 'Apakah Posnod seperti sosial media?',
                answer: 'Posnod menggunakan beberapa konsep yang familiar dari social media, seperti feed dan interaksi antar pengguna. Namun, fokus Posnod bukan bersosialisasi, melainkan menemukan dan berbagi pengetahuan.',
              },
              {
                question: 'Bagaimana cara belajar di Posnod?',
                answer: 'Kamu dapat mulai dari hal yang ingin kamu ketahui atau pelajari. Temukan Unit yang relevan, pelajari materi di dalamnya, lalu lanjutkan ke pengetahuan lain sesuai kebutuhanmu. Tidak ada kurikulum atau jalur belajar yang wajib diikuti.',
              },
              {
                question: 'Apa itu TUF?',
                answer: 'TUF adalah struktur pengetahuan Posnod yang terdiri dari Topik, Unit, dan Fokus. Topik - bidang pengetahuan. Unit - satu kesatuan pembelajaran. Fokus - aspek tertentu yang dibahas dalam sebuah Unit. TUF membantu pengguna menemukan pengetahuan dengan struktur yang jelas tanpa membatasi cara mereka belajar.',
              },
              {
                question: 'Apa perbedaan Topik, Unit, dan Fokus?',
                answer: 'Topik menunjukkan bidangnya, Unit menunjukkan apa yang dipelajari, sedangkan Fokus menunjukkan aspek yang dibahas. Contoh: Topik: Desain Unit: Building a Card UI System in Figma Fokus: UI Design, Components, Auto Layout, Design System, Figma Satu Fokus dapat berkaitan dengan beberapa Topik karena pengetahuan tidak selalu dapat dipisahkan berdasarkan bidang.',
              },
              {
                question: 'Apakah saya harus mengikuti urutan tertentu?',
                answer: 'Tidak. Posnod tidak mengharuskan kamu mengikuti urutan, kurikulum, atau jenjang tertentu. Kamu dapat memulai dari bagian yang paling relevan dengan kebutuhanmu dan menentukan sendiri langkah berikutnya.',
              },
              {
                question: 'Apakah Posnod menyediakan sertifikat?',
                answer: 'Tidak. Posnod tidak menggunakan sertifikat sebagai tujuan utama pembelajaran. Fokusnya adalah membantu kamu memperoleh dan membangun pengetahuan yang dapat digunakan dalam kehidupan, pekerjaan, atau hal yang sedang kamu kerjakan.',
              },
              {
                question: 'Siapa yang membuat konten di Posnod?',
                answer: 'Siapapun yang terdaftar di Posnod Pro⁺ dapat membuat dan membagikan kontennya di Posnod. Tidak ada persyaratan untuk menjadi Profesional, praktisi, gelar, atau bekerja di bidang tertentu. Setiap pengguna Pro⁺ dapat membuat Unit dan membagikan pengetahuan sesuai dengan apa yang ingin mereka jelaskan. Pengguna juga bebas menentukan topik dan fokus yang ingin dibahas, selama kontennya mengikuti aturan dan standar Posnod.',
              },
              {
                question: 'Apa itu Private Mode?',
                answer: 'Private Mode adalah ruang pribadi di Posnod untuk belajar, mencatat, berpikir, dan mengeksplorasi pengetahuan tanpa harus membagikannya kepada pengguna lain.',
              },
              {
                question: 'Apakah Posnod gratis?',
                answer: 'Ya. Ya. Siapapun yang terdaftar di Posnod Pro⁺ dapat membuat dan membagikan kontennya di Posnod. Tidak ada persyaratan untuk menjadi Profesional, praktisi, gelar, atau bekerja di bidang tertentu. Setiap pengguna Pro⁺ dapat membuat Unit dan membagikan pengetahuan sesuai dengan apa yang ingin mereka jelaskan. Pengguna juga bebas menentukan topik dan fokus yang ingin dibahas, selama kontennya mengikuti aturan dan standar Posnod. Private Mode adalah ruang pribadi di Posnod untuk belajar, mencatat, berpikir, dan mengeksplorasi pengetahuan tanpa harus membagikannya kepada pengguna lain. Posnod dapat digunakan untuk menemukan dan mempelajari pengetahuan tanpa biaya. Beberapa fitur atau layanan tambahan dapat dikembangkan sebagai bagian dari ekosistem Posnod di masa depan.',
              },
              {
                question: 'Apakah Posnod sudah memiliki komunitas?',
                answer: 'Posnod sedang mengembangkan fitur komunitas sebagai bagian dari ekosistemnya. Untuk tahap awal, fokus Posnod adalah membangun pengalaman utama untuk menemukan, mempelajari, dan berbagi pengetahuan.',
              },
              {
                question: 'Apa itu Posnod Pro dan Posnod Ink?',
                answer: 'Pro⁺ adalah ruang untuk profesional dan kontributor yang ingin membagikan pengetahuan serta membangun profil profesional mereka di Posnod. Ink (Institutional Network Keys) adalah ruang untuk organisasi, institusi, dan komunitas yang ingin memiliki kehadiran dan ruang khusus dalam ekosistem Posnod.',
              },
              {
                question: 'Apakah Posnod cocok untuk pemula?',
                answer: 'Ya. Kamu tidak perlu memiliki latar belakang pendidikan atau tingkat kemampuan tertentu untuk mulai menggunakan Posnod. Kamu dapat memulai dari pertanyaan, kebutuhan, atau hal sederhana yang ingin kamu pahami.',
              },
              {
                question: 'Dimana Posnod bisa digunakan?',
                answer: 'Posnod dapat digunakan melalui perangkat yang terhubung ke internet. Pengguna dapat mengaksesnya untuk menemukan, mempelajari, dan mengeksplorasi pengetahuan dari mana saja.',
              },
            ].map((item, i) => (
              <div key={i} className="py-5 group cursor-pointer">
                <div 
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  className="flex items-center gap-4"
                >
                  <span className="shrink-0 w-5 h-5 flex items-center justify-center">
                    {openFAQ === i ? <MinusIcon className="w-5 h-5" /> : <PlusIcon className="w-5 h-5" />}
                  </span>
                  
                  {/* Teks Pertanyaan */}
                  <span className="flex items-center justify-between w-full text-body-base font-medium text-primary group-hover:text-secondary transition-colors">
                    {item.question}
                  </span>
                </div>

                {openFAQ === i && (
                  <div className="mt-3 ml-9 text-body-sm text-secondary leading-relaxed animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-20 mb-14 bg-secondary">
        <div className="container-wide mx-auto px-6 text-center">
          <h2 className="text-h3 mb-6">Coba mulai sekarang</h2>
          <div className="flex justify-center items-center gap-4">
            <Button
              variant="accent"
              size="sm"
              radius="32"
            >
              Masuk Posnod
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
