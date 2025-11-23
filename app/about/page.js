export default function About() {
  return (
    <main className="bg-gray-100 min-h-screen pb-28 pt-20">

      {/* TITLE */}
      <h1 className="text-center text-3xl font-semibold leading-snug">
        Sebuah kisah tentang <br /> belajar & kebebasan
      </h1>

      {/* INTRO BOX */}
      <div className="w-full flex justify-center mt-10">
        <div className="w-[80%] bg-white p-10 rounded-3xl shadow-sm text-gray-700 text-[15px] leading-relaxed whitespace-pre-line">
          {`Hai. Kalau kamu membaca ini, kemungkinan besar kamu merasa sama seperti aku—kadang pendidikan itu 
          membingungkan, kadang terasa membosankan, kadang malah membuatmu bertanya: “Ini semua untuk siapa?”

          Kamu mungkin ingat duduk di kelas, mengikuti aturan, mengerjakan tugas, menunggu guru atau dosen memberi 
          jawaban. Kamu belajar, tapi bukan karena ingin tahu. Kamu belajar karena diminta.

          Dan di era modern, meskipun dunia serba digital, banyak platform “belajar” justru membuatmu merasa terjebak lagi dalam 
          aturan lama, tapi dengan desain yang lebih mewah.

          Posnod lahir dari ketidakpuasan itu. Dari pertanyaan: “Kenapa belajar harus ribet? Kenapa harus mengikuti ritme orang 
          lain? Kenapa pertanyaan kita kadang tidak dianggap penting?”`}
        </div>
      </div>

      {/* SECTION TITLE */}
      <h2 className="text-center text-xl font-medium mt-24">
        Sejarah Pendidikan & Apa yang Terjadi?
      </h2>

      {/* CARD 1 */}
      <div className="w-full flex justify-center mt-12">
        <div className="w-[80%] bg-white p-10 rounded-3xl shadow-sm flex gap-10">
          <img src="/images/LP 1.png" className="w-[210px]" alt="" />
          <p className="text-gray-700 text-[15px] leading-relaxed whitespace-pre-line">
            {`Pendidikan tradisional awalnya bukan tentang manusia. 
            Itu tentang sistem. Tentang mengulang pola, mengukur, menilai, 
            dan menyesuaikan individu dengan standar yang sama.`}
          </p>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="w-full flex justify-center mt-12">
        <div className="w-[80%] bg-white p-10 rounded-3xl shadow-sm flex gap-10">
          <img src="/images/LP 2.png" className="w-[210px]" alt="" />
          <p className="text-gray-700 text-[15px] leading-relaxed whitespace-pre-line">
            {`Di zaman Revolusi Industri, sekolah dibuat seperti pabrik: 
            disiplin ketat, barisan lurus, suara guru sebagai satu-satunya 
            pedoman. Murid berbeda sedikit? Tertinggal. Kreativitas? Sering 
            diabaikan.`}
          </p>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="w-full flex justify-center mt-12">
        <div className="w-[80%] bg-white p-10 rounded-3xl shadow-sm flex gap-10">
          <img src="/images/LP 3.png" className="w-[210px]" alt="" />
          <p className="text-gray-700 text-[15px] leading-relaxed whitespace-pre-line">
            {`Abad ke-21 datang dengan janji digital: informasi berlimpah, belajar dari mana saja, kapan saja. 
            Tapi kenyataannya? Sistem masih kaku, nilai masih menjadi fokus, kurikulum masih menuntut keseragaman. 
            Banyak orang belajar di platform “modern”, tapi tetap merasa terjebak dalam struktur yang sama.`}
          </p>
        </div>
      </div>

      {/* FINAL SECTION */}
      <h2 className="text-center text-xl font-medium mt-28">
        Kemana tujuan kami?
      </h2>

      <div className="w-full flex justify-center mt-10">
        <div className="w-[80%] bg-white p-10 rounded-3xl shadow-sm text-gray-700 text-[15px] leading-relaxed whitespace-pre-line">
          {`Dan dari kesadaran itu, Posnod lahir. Bukan dari sekedar ide besar, tapi dari kegelisahan yang pelan-pelan tumbuh di 
          hati banyak orang yang masih percaya: Pendidikan seharusnya lebih manusiawi dari ini.

          Kami ingin keluar dari sistem yang sejak awal memang tidak dirancang untuk menumbuhkan kami, sistem yang membuat belajar 
          terasa jauh dari maknanya. Posnod hadir bukan sekedar alternatif, tapi sebagai ruang baru untuk membayangkan kembali arti 
          belajar, ruang hidup, membebaskan, dan membuat manusia tumbuh.

          Sebagai langkah awal kami meramu banyak cara belajar ke dalam satu ruang. Mau eksplorasi ilmu baru? Mendalami hal 
          yang membangkitkan rasa ingin tahu? Atau sekedar berdiskusi untuk memahami kehidupan? Semuanya bisa dimulai dari sini.
          Bahkan kamu bisa merangkai cara belajarmu sendiri, bebas layaknya menyusun potongan puzzle, tanpa batasan silabus, tanpa 
          aturan kaku.`}
        </div>
      </div>

    </main>
  );
}
