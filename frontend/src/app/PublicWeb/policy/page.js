"use client";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto w-full max-w-180 px-6 py-20 md:px-0 md:py-24">
        {/* Title */}
        <h1 className="text-d2 mb-10">Kebijakan Privasi</h1>

        {/* Last Updated */}
        <div className="mb-8">
          <p className="text-caption text-secondary mb-2">
            Terakhir diperbarui
          </p>

          <p className="text-body-sm">8 Desember 2025</p>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-border mb-8" />

        {/* INTRO */}
        <p className="text-body-sm leading-[1.6] mb-8">
          Posnod menghargai privasi penggunanya dan berkomitmen untuk melindungi
          data pribadi Anda. Kebijakan ini menjelaskan tentang bagaimana kami
          mengumpulkan, menggunakan, menyimpan, dan melindungi informasi yang
          Anda berikan saat menggunakan platform kami. Anda menyetujui praktik
          yang dijelaskan dalam kebijakan ini.
        </p>

        {/* INFORMASI YANG DIKUMPULKAN */}
        <h2 className="text-h3 mt-12 mb-6">Informasi yang Kami Kumpulkan</h2>

        <p className="text-body-sm leading-[1.6] mb-7">
          Kami dapat mengumpulkan informasi untuk menyediakan layanan yang aman
          dan personal bagi Anda, informasi ini meliputi:
        </p>

        {/* INFORMASI PRIBADI */}
        <div className="mb-7">
          <h3 className="text-h5 mb-3">Informasi Pribadi</h3>

          <p className="text-body-sm leading-[1.6] border-l border-border pl-3">
            Nama, alamat email, foto profil, dan data lain yang Anda berikan
            saat pendaftaran atau saat menggunakan fitur Posnod.
          </p>
        </div>

        {/* INFORMASI AKTIVITAS */}
        <div className="mb-7">
          <h3 className="text-h5 mb-3">Informasi Aktivitas</h3>

          <p className="text-body-sm leading-[1.6] border-l border-border pl-3">
            Aktivitas belajar, konten yang diakses, foto profil, dan data
            lainnya yang Anda berikan saat pendaftaran atau saat menggunakan
            fitur Private Mode.
          </p>
        </div>

        {/* INFORMASI TEKNIS */}
        <div className="mb-7">
          <h3 className="text-h5 mb-3">Informasi Teknis</h3>

          <p className="text-body-sm leading-[1.6] border-l border-border pl-3">
            Alamat IP, jenis perangkat, sistem operasi, browser, dan log
            aktivitas di platform.
          </p>
        </div>

        {/* INFORMASI TAMBAHAN */}
        <div className="mb-8">
          <h3 className="text-h5 mb-3">Informasi Tambahan</h3>

          <p className="text-body-sm leading-[1.6] border-l border-border pl-3">
            Data personal yang Anda berikan untuk tujuan tertentu, misalnya
            feedback, survei, atau pembuatan konten.
          </p>
        </div>

        {/* TUJUAN PENGGUNAAN DATA */}
        <h2 className="text-h3 mt-12 mb-6">Tujuan Penggunaan Data</h2>

        <p className="text-body-sm leading-[1.6] mb-5">
          Data yang dikumpulkan digunakan untuk:
        </p>

        <ul className="list-disc pl-5 space-y-2 text-body-sm leading-[1.6]">
          <li>Menyediakan, memelihara, dan meningkatkan layanan Posnod.</li>

          <li>
            Memberikan pengalaman belajar yang personal, termasuk rekomendasi
            konten.
          </li>

          <li>Memastikan keamanan akun dan platform.</li>

          <li>
            Mengelola komunikasi terkait layanan, pembaruan, atau event Posnod.
          </li>

          <li>Memenuhi kewajiban hukum yang berlaku.</li>
        </ul>

        {/* PENGGUNAAN PRIVATE MODE */}
        <h2 className="text-h3 mt-12 mb-6">Penggunaan Private Mode</h2>

        <p className="text-body-sm leading-[1.6] mb-5">
          Posnod menerapkan protokol keamanan standar industri untuk melindungi
          data Anda:
        </p>

        <ul className="list-disc pl-5 space-y-2 text-body-sm leading-[1.6] mb-7">
          <li>Enkripsi data saat transmisi dan penyimpanan.</li>

          <li>
            Proteksi terhadap akses tidak sah, perubahan, atau pengungkapan
            data.
          </li>

          <li>Audit dan pemantauan rutin untuk menjaga integritas sistem.</li>
        </ul>

        <p className="text-body-sm leading-[1.6]">
          Meskipun kami melakukan upaya terbaik, tidak ada sistem yang
          sepenuhnya bebas risiko. Anda tetap bertanggung jawab untuk menjaga
          kerahasiaan kredensial akun Anda.
        </p>

        {/* BERBAGI DATA */}
        <h2 className="text-h3 mt-12 mb-6">Berbagi Data</h2>

        <p className="text-body-sm leading-[1.6] mb-5">
          Posnod tidak menjual, menyewakan, atau memperdagangkan informasi
          pribadi pengguna. Data hanya dapat dibagikan dalam kondisi berikut:
        </p>

        <ul className="list-disc pl-5 space-y-2 text-body-sm leading-[1.6]">
          <li>
            Untuk menyediakan layanan tertentu, misal integrasi fitur pihak
            ketiga yang sah.
          </li>

          <li>Jika diwajibkan oleh hukum atau peraturan yang berlaku.</li>

          <li>
            Dalam proses merger, akuisisi, atau restrukturisasi bisnis, dengan
            ketentuan privasi tetap terjaga.
          </li>
        </ul>

        {/* HAK PENGGUNA */}
        <h2 className="text-h3 mt-12 mb-6">Hak Pengguna</h2>

        <p className="text-body-sm leading-[1.6] mb-5">
          Anda memiliki hak atas data pribadi Anda, termasuk:
        </p>

        <ul className="list-disc pl-5 space-y-2 text-body-sm leading-[1.6] mb-7">
          <li>Mengakses, memperbaiki, atau memperbarui informasi pribadi.</li>

          <li>Menghapus akun atau data tertentu dari platform.</li>

          <li>Menolak atau membatasi penggunaan data untuk tujuan tertentu.</li>
        </ul>

        <p className="text-body-sm leading-[1.6]">
          Untuk menggunakan hak-hak ini, silakan hubungi{" "}
          <a
            href="mailto:support@posnod.com"
            className="text-info hover:underline"
          >
            support@posnod.com
          </a>
          . Posnod akan menanggapi permintaan Anda sesuai dengan hukum yang
          berlaku.
        </p>

        {/* RETENSI DATA */}
        <h2 className="text-h3 mt-12 mb-6">Retensi Data</h2>

        <p className="text-body-sm leading-[1.6]">
          Data pribadi akan disimpan selama akun Anda aktif atau sesuai
          kebutuhan operasional, keamanan, atau hukum. Setelah tidak diperlukan,
          data akan dihapus atau dianonimkan dengan cara yang aman.
        </p>

        {/* PERUBAHAN KEBIJAKAN */}
        <h2 className="text-h3 mt-12 mb-6">Perubahan Kebijakan Privasi</h2>

        <p className="text-body-sm leading-[1.6]">
          Posnod dapat memperbarui kebijakan ini dari waktu ke waktu. Setiap
          perubahan akan dipublikasikan ke halaman ini dengan tanggal terbaru.
          Penggunaan layanan setelah perubahan menandakan persetujuan Anda
          terhadap kebijakan yang diperbarui.
        </p>

        {/* KONTAK */}
        <h2 className="text-h3 mt-12 mb-6">Kontak</h2>

        <p className="text-body-sm leading-[1.6] mb-4">
          Jika Anda memiliki pertanyaan, kekhawatiran, atau permintaan terkait
          privasi:
        </p>

        <p className="text-body-sm leading-[1.6] pb-20">
          Email:{" "}
          <a
            href="mailto:support@posnod.com"
            className="text-info hover:underline"
          >
            support@posnod.com
          </a>
        </p>
      </section>
    </main>
  );
}
