'use client';

import Image from 'next/image';

import WideArrowRight from '@/components/icons/system/WideArrowRight';
import Button from '@/components/foundations/Button';

export default function Tentang() {
  return (
    <main className="text-primary bg-white">
      
      {/* About Hero */}
      <section className="pt-20 pb-12 px-4 flex flex-col items-center text-center">
        <Button
          variant="ghost"
          size="sm"
          radius="32"
          className="mb-8 text-label text-disabled"
        >
          About Us
        </Button>

        <h1 className="text-d1 container-wide tracking-tight mb-6 max-w-3xl mx-auto leading-tight">
          Sebuah kisah tentang belajar & kebebasan
        </h1>

        <p className="text-s3 max-w-xl mx-auto mb-10 leading-relaxed">
          Tentang sistem yang lama, pertanyaan yang selalu kami bawa, dan ruang baru yang ingin kami bangun bersama.
        </p>
      </section>

      {/* Section 2: Gambar Utama */}
      <section className="px-4 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="relative w-full h-75 md:h-112.5 rounded-3xl overflow-hidden bg-tertiary">
            <Image
              src="/images/AboutHero.png"
              alt="About hero"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Section 3: Narrative Text */}
      <section className="px-4 pb-20">
        <div className="max-w-2xl mx-auto flex flex-col gap-6 text-primary leading-relaxed">
          <p>
            Hai. Kalau kamu membaca ini, kemungkinan besar kamu merasa sama seperti aku—kadang pendidikan itu membingungkan, kadang terasa membosankan, kadang malah membuatmu bertanya: "Ini semua untuk siapa?"
          </p>
          <p>
            Kamu mungkin ingat duduk di kelas, mengikuti aturan, mengerjakan tugas, menunggu guru atau dosen memberi jawaban. Kamu belajar, tapi bukan karena ingin tahu. Kamu belajar karena diminta.
          </p>
          <p>
            Dan di era modern, meskipun dunia serba digital, banyak platform "belajar" justru membuatmu merasa terjebak lagi dalam aturan lama, tapi dengan desain yang lebih mewah.
          </p>
          <p>
            "Kenapa belajar harus ribet? Kenapa harus mengikuti ritme orang lain? Kenapa pertanyaan kita kadang tidak dianggap penting?"
          </p>
          <p className="font-medium text-primary">
            Dari situlah Posnod lahir.
          </p>
        </div>
      </section>

      {/* Section 4: Sejarah Pendidikan */}
      <section className="px-4 pb-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-h2 md:text-h1 font-medium mb-8 text-left">
            Sejarah Pendidikan & Apa yang Terjadi?
          </h2>
          
          <div className="flex flex-col gap-6 text-primary leading-relaxed">
            <p>
              Pendidikan tradisional awalnya bukan tentang manusia. Itu tentang sistem. Tentang mengulang pola, mengukur, menilai, dan menyesuaikan individu dengan standar yang sama.
            </p>
            <p>
              Di zaman Revolusi Industri, sekolah dibuat seperti pabrik. Disiplin ketat, barisan lurus, suara guru sebagai satu-satunya pedoman. Murid berbeda sedikit? Tertinggal. Kreativitas? Sering diabaikan.
            </p>
            <p>
              Sistem yang dirancang untuk keseragaman, tidak pernah benar-benar dirancang untuk kita. Abad ke-21 datang dengan janji digital. Informasi berlimpah, belajar dari mana saja, kapan saja. Tapi kenyataannya? Sistem masih kaku, nilai masih menjadi fokus, kurikulum masih menuntut keseragaman. Banyak orang belajar di platform "modern", tapi tetap merasa terjebak dalam struktur yang sama.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Kemana Tujuan Kami */}
      <section className="px-4 pb-24">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-h2 md:text-h1 font-medium mb-8 text-left">
            Kemana Tujuan Kami?
          </h2>
          
          <div className="flex flex-col gap-6 text-primary leading-relaxed">
            <p>
              Dan dari kesadaran itu, Posnod lahir. Bukan dari ide besar, tapi dari kegelisahan yang pelan-pelan tumbuh di hati banyak orang yang masih percaya: pendidikan seharusnya lebih manusiawi dari ini.
            </p>
            <p>
              Kami tidak membangun sistem baru untuk menggantikan yang lama. Kami membangun ruang di mana kamu yang menyusun jalannya sendiri — lewat Topik, Unit, dan Fokus (TUF), potongan-potongan kecil yang bisa kamu rangkai sesuai rasa ingin tahumu, bukan sesuai silabus orang lain.
            </p>
            <p>
              Mau eksplorasi ilmu baru? Mendalami hal yang membangkitkan rasamu? Atau sekedar berdiskusi untuk memahami hidup? Semuanya bisa dimulai dari sini — tanpa urutan yang dipaksakan, tanpa nilai yang menghakimi, tanpa satu standar untuk semua orang.
            </p>
            <p>
              Karena bagi kami, belajar bukan soal seberapa cepat kamu sampai. Tapi seberapa jujur kamu terhubung dengan apa yang kamu pelajari.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: CTA Links */}
      <section className="border-t border-medium">
        <a href="#" className="group flex justify-between items-center px-8 md:px-16 py-12 md:py-16 border-b border-medium">
          <span className="text-h1 md:text-d2 font-medium tracking-tight">Mulai belajar</span>
          <WideArrowRight className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:translate-x-2" />
        </a>
        <a href="#" className="group flex justify-between items-center px-8 md:px-16 py-12 md:py-16 border-b border-medium">
          <span className="text-h1 md:text-d2 font-medium tracking-tight">Mulai membuat</span>
          <WideArrowRight className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:translate-x-2" />
        </a>
      </section>

    </main>
  );
}