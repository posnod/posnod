POSNOD PRO+

Product Specification

Dokumen: Product Specification Pro+
Versi: 0.1
Status: Draft
Produk: Posnod Pro+
Perusahaan: Posnod Labs

---

1. Gambaran Umum

Posnod Pro+ merupakan ruang bagi Profesional untuk membuat, mengelola, dan membagikan konten pembelajaran melalui Unit.

Pro+ menyediakan fasilitas untuk mengelola profil Profesional, Unit, konten video, komunikasi dengan pengguna, statistik, dan pengaturan akun Profesional.

2. Akses dan Pembuatan Pro+

2.1 Melalui Auth

Pengguna dapat memilih Pro+ sebagai tujuan akses melalui halaman Auth.

Alur:

1. Pengguna memilih Pro+.
2. Sistem memeriksa apakah email sudah terdaftar.
3. Jika email sudah terdaftar, pengguna diarahkan ke Pro+.
4. Jika email belum terdaftar, pengguna harus melakukan registrasi terlebih dahulu.
5. Setelah registrasi dan verifikasi email, pengguna diarahkan ke Media.

2.2 Melalui Media

Pengguna dapat mengakses Pro+ melalui tombol (+) di Media.

- Jika sudah memiliki Pro+, pengguna langsung diarahkan ke Homepage Pro+.
- Jika belum memiliki Pro+, pengguna memulai proses pembuatan profil Profesional.

2.3 Pembuatan Profil Profesional

Pengguna yang pertama kali membuat Pro+ harus mengisi:

- Professional Topic: hanya boleh memilih satu.
- Foto profil.
- Nama.
- Username.
- Biografi.

Setelah selesai mengisi profil, pengguna langsung diarahkan ke Homepage Pro+.

2.4 Integrasi Profil

Foto profil, nama, username, dan biografi terintegrasi antara Media dan Pro+.

- Perubahan melalui Pro+ otomatis diperbarui di Media.
- Perubahan melalui Media otomatis diperbarui di Pro+.
- Professional Topic merupakan informasi khusus Pro+.

3. Homepage dan Navigasi

Homepage Pro+ memiliki empat bagian utama:

3.1 Beranda

Tempat Profesional membuat dan mengelola Unit serta mengunggah konten video.

3.2 Messenger

Tempat Profesional menerima dan membalas pesan dari pengguna Media.

3.3 Statistik

Tempat Profesional melihat data interaksi dan performa konten.

3.4 Settings

Tempat Profesional mengelola pengaturan khusus akun Pro+.

4. Pengelolaan Unit

4.1 Pembuatan Unit

Profesional dapat membuat Unit sebagai wadah untuk mengelompokkan konten video.

Informasi yang diperlukan:

- Nama Unit.
- Deskripsi Unit.

4.2 Jumlah Unit

- Profesional bebas membuat Unit tanpa batas jumlah.
- Tidak ada batas maksimal jumlah Unit.

4.3 Pengelolaan Unit

Profesional dapat:

- Membuat Unit.
- Mengedit Unit.
- Menghapus Unit.

4.4 Penghapusan Unit

Ketika Profesional menghapus Unit:

- Seluruh konten di dalam Unit ikut terhapus.
- Konten yang sudah dipindahkan ke Unit lain tidak ikut terhapus.
- Sistem harus memberikan konfirmasi sebelum penghapusan dilakukan.

5. Pengelolaan Konten

5.1 Jenis Konten

Untuk tahap MVP, Pro+ hanya mendukung konten berupa video.

5.2 Informasi Konten

Setiap video memiliki:

- File video.
- Judul.
- Deskripsi.
- Unit tempat video disimpan.

5.3 Pengunggahan Konten

Profesional dapat mengunggah video melalui dua cara:

Melalui Beranda

1. Profesional memilih fitur unggah konten.
2. Profesional memilih video.
3. Profesional mengisi judul dan deskripsi.
4. Profesional wajib menentukan Unit tempat video akan disimpan.
5. Video diunggah ke Unit yang dipilih.

Melalui Halaman Unit

1. Profesional membuka Unit.
2. Profesional memilih fitur unggah konten.
3. Profesional memilih video.
4. Profesional mengisi judul dan deskripsi.
5. Video otomatis ditempatkan di Unit yang sedang dibuka.

5.4 Aturan Penempatan Konten

- Setiap video wajib ditempatkan dalam satu Unit.
- Satu video hanya dapat berada dalam satu Unit.
- Video dapat dipindahkan ke Unit lain.

5.5 Pengelolaan Konten

Profesional dapat:

- Mengedit judul dan deskripsi video.
- Mengganti video.
- Memindahkan video ke Unit lain.
- Menghapus video.

5.6 Penghapusan Konten

Ketika Profesional menghapus video:

- Video langsung dihapus dari Pro+ dan Media.
- Video tidak lagi dapat diakses pengguna.
- Riwayat pengguna yang pernah menonton video tersebut juga ikut dihapus.

6. Messenger

Messenger digunakan untuk komunikasi antara Profesional dan pengguna Media.

Aturan:

- Profesional hanya dapat membalas pesan yang dikirim pengguna Media.
- Profesional tidak dapat memulai percakapan.
- Profesional tidak dapat mengirim pesan terlebih dahulu kepada pengguna Media.

7. Statistik

Statistik Pro+ menyediakan dua tingkat informasi: statistik keseluruhan akun dan statistik masing-masing video.

7.1 Statistik Keseluruhan

Menampilkan:

- Total penonton unik seluruh video.
- Total Upvotes.
- Total Downvotes.
- Total penyimpanan konten.
- Jumlah video yang telah diunggah.
- Jumlah Connections.

7.2 Statistik Per Video

Setiap video memiliki statistik:

- Jumlah penonton unik.
- Jumlah Upvotes.
- Jumlah Downvotes.
- Jumlah penyimpanan.

7.3 Aturan Privasi Statistik

- Profesional hanya dapat melihat jumlah penonton.
- Profesional tidak dapat melihat identitas pengguna Media yang menonton video.
- Penonton unik digunakan agar pemutaran berulang oleh pengguna yang sama tidak dihitung sebagai penonton baru.

7.4 Batasan Statistik MVP

Untuk tahap MVP, statistik tidak mencakup:

- Grafik perkembangan harian dan mingguan.
- Analisis demografi penonton.
- Identitas pengguna yang menonton.
- Rekomendasi waktu terbaik untuk mengunggah.
- Prediksi performa konten.
- Perbandingan performa konten yang kompleks.

8. Settings

Settings Pro+ merupakan perluasan dari pengaturan dasar Media. Bagian ini berisi pengaturan yang berkaitan dengan identitas dan aktivitas Profesional.

8.1 Profil Profesional

Informasi profil yang dikelola:

- Foto profil.
- Nama.
- Username.
- Biografi.
- Professional Topic.

Foto profil, nama, username, dan biografi terintegrasi dengan Media.

8.2 Informasi Profesional

Profesional dapat mengelola:

- Website pribadi.
- Tautan media sosial.
- Email kontak.
- Lokasi.

Email kontak merupakan usulan elemen profil yang masih perlu dikonfirmasi sebelum ditetapkan.

8.3 Posnod Account Center

Pengaturan keamanan dan informasi akun tidak dikelola melalui Settings Pro+.

Pengaturan tersebut dipusatkan di Posnod Account Center.

9. Prinsip dan Aturan Sistem

1. Satu akun Posnod dapat mengakses Media dan Pro+.
2. Pembuatan Pro+ tidak memerlukan akun terpisah.
3. Satu Profesional dapat memiliki Unit tanpa batas jumlah.
4. Setiap video wajib terhubung dengan satu Unit.
5. Untuk MVP, jenis konten yang didukung hanya video.
6. Profesional hanya dapat membalas pesan yang dimulai oleh pengguna Media.
7. Statistik tidak menampilkan identitas penonton.
8. Pengaturan keamanan akun terpusat di Posnod Account Center.

---

10. Catatan yang Belum Diputuskan

Hal-hal berikut belum memiliki keputusan final dan tidak boleh dianggap sebagai ketentuan sistem:

- Apakah akses melalui Auth untuk email terdaftar selalu mengasumsikan pengguna sudah memiliki Pro+.
- Detail format, ukuran maksimum, durasi, dan batas unggahan video.
- Detail preferensi notifikasi Profesional.
- Detail pengaturan privasi profil.
- Detail penonaktifan atau penghapusan Pro+.
- Detail mekanisme perhitungan statistik dan periode penghitungan.
- Apakah email kontak ditampilkan secara publik atau hanya digunakan untuk keperluan internal.

Akhir Dokumen