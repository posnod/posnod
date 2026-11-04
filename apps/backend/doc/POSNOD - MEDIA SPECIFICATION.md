POSNOD MEDIA

Product Specification

Status: Draft
Versi: 0.2
Tanggal: 4 November 2026

---

1. Gambaran Umum

Posnod Media merupakan ruang bagi pengguna untuk menemukan, melihat, dan mempelajari berbagai konten yang dibuat oleh Profesional.

Pengguna Media dapat:

- Menjelajahi Topik.
- Melihat Unit dan Focus.
- Menonton konten.
- Memberikan Upvote atau Downvote.
- Menyimpan dan membagikan konten.
- Terhubung dengan Profesional.
- Mengirim pesan kepada Profesional yang terhubung.
- Mengelola riwayat tontonan dan konten tersimpan.

Pengguna Media tidak memiliki profil publik yang dapat dilihat oleh pengguna lain maupun Profesional.

2. Auth dan Akses Media

2.1 Halaman Auth

Pengguna masuk melalui satu halaman Auth yang menyediakan:

- Email.
- Google.
- Apple.
- X.

Pengguna dapat memilih tujuan masuk, yaitu Media atau Pro+. Jika tidak memilih tujuan, pengguna diarahkan ke Media.

2.2 Login dan Registrasi

Login dan registrasi menggunakan satu formulir.

Alur berdasarkan email:

1. Pengguna memasukkan email.
2. Sistem memeriksa apakah email sudah terdaftar.
3. Jika belum terdaftar, muncul pemberitahuan bahwa email belum terdaftar dan pengguna dapat melanjutkan registrasi dengan membuat password.
4. Jika sudah terdaftar, pengguna melanjutkan proses login menggunakan email dan password.

Registrasi memerlukan verifikasi email.

2.3 Verifikasi Email

Setelah registrasi:

1. Sistem mengirim email verifikasi.
2. Pengguna diarahkan ke halaman khusus untuk menunggu verifikasi.
3. Halaman menampilkan pesan: "Silahkan verifikasi email yang sudah dikirim ke: (emailuser)".
4. Sistem mendeteksi ketika email berhasil diverifikasi.
5. Pengguna otomatis diarahkan ke tujuan masuk.

Username tidak dibuat saat registrasi. Pengguna dapat mengaturnya melalui Media Settings.

2.4 Aturan Pengalihan

- Pengguna baru yang memilih Pro+ saat registrasi tetap diarahkan ke Media setelah verifikasi.
- Pengguna yang sudah memiliki akun Media dan memilih Pro+ saat login dapat langsung diarahkan ke Pro+.
- Satu akun digunakan untuk mengakses Media dan Pro+.

3. Onboarding Topik

Pengguna yang pertama kali masuk ke Media harus memilih Topik.

Ketentuan:

- Tersedia 16 pilihan Topik.
- Pengguna wajib memilih minimal 1 Topik.
- Setelah memilih, pengguna diarahkan ke Homepage Media.

Pengguna dapat mengelola pilihan Topik kapan saja:

- Menambahkan Topik.
- Menghapus Topik.
- Mengganti pilihan Topik.

Pengguna wajib memiliki minimal 1 Topik dan tidak boleh menghapus seluruh pilihan.

4. Homepage Media

Homepage menampilkan kartu-kartu Topik yang dipilih pengguna.

Pengguna dapat membuka kartu Topik untuk melihat halaman Topik terkait.

Urutan dan algoritma rekomendasi konten di Homepage belum ditentukan.

5. Halaman Topik

Ketika pengguna membuka suatu Topik, halaman menampilkan:

1. Top Units yang berkaitan dengan Topik.
2. Kumpulan konten yang berkaitan dengan Topik.
3. Top Professionals yang berkaitan dengan Topik.

6. Halaman Unit

Ketika pengguna membuka suatu Unit, sistem menampilkan daftar konten yang berada di dalam Unit tersebut.

Hubungan struktur pembelajaran:

Topik → Unit → Konten → Focus

Satu konten dapat memiliki lebih dari satu Focus. Focus merupakan informasi yang melekat pada konten, bukan pada Unit.

7. Halaman Detail Konten

Halaman detail konten menampilkan:

- Pemutar video.
- Judul konten.
- Deskripsi konten.
- Nama Profesional.
- Username Profesional.
- Tanggal pembuatan konten.
- Jumlah View.
- Jumlah Votes.
- Jumlah Connections Profesional.
- Tombol Upvote.
- Tombol Downvote.
- Tombol Add to Connections.
- Daftar konten lain dari Unit yang sama.
- Rekomendasi konten serupa.

7.1 Voting

Aturan voting:

- Satu pengguna hanya memiliki satu pilihan vote aktif untuk satu konten.
- Pengguna dapat memilih Upvote atau Downvote.
- Pengguna dapat mengubah pilihan vote kapan saja.
- Pengguna dapat membatalkan vote kapan saja.
- Jumlah vote aktif hanya menghitung vote yang belum dibatalkan.

Aturan penghitungan angka yang ditampilkan secara publik masih perlu dipastikan, apakah hanya menghitung Upvote atau seluruh vote aktif.

7.2 Interaksi Konten

Pengguna Media dapat:

- Upvote.
- Downvote.
- Save.
- Add to Connections.
- Share.
- Report.

Komentar belum tersedia pada tahap awal Posnod Media.

7.3 Share

Pengguna dapat membagikan konten ke luar Posnod, misalnya melalui WhatsApp atau media sosial lainnya.

7.4 Report Content

Pengguna dapat melaporkan konten yang dianggap bermasalah atau melanggar aturan Posnod.

8. Search

8.1 Tampilan Awal

Ketika pengguna membuka Search, halaman menampilkan:

- Input Search.
- Rekomendasi 16 Topik.
- Rekomendasi Profesional Teratas.

8.2 Hasil Pencarian

Ketika pengguna memasukkan kata kunci, sistem menampilkan:

1. Daftar Focus yang berkaitan dengan pencarian.
2. Daftar konten yang berkaitan dengan pencarian.
3. Daftar Profesional Teratas yang berkaitan dengan pencarian.

8.3 Navigasi Hasil Pencarian

- Focus mengarahkan pengguna ke halaman berisi daftar konten dengan Focus tersebut.
- Konten dapat dibuka ke halaman detail konten.
- Profesional dapat diklik untuk membuka halaman profil Profesional.

9. Profil Profesional

Profil Profesional dapat dilihat oleh pengguna Media.

Halaman profil menampilkan:

- Foto profil.
- Title (Topik).
- Nama.
- Username.
- Deskripsi.
- Daftar Unit yang dibuat oleh Profesional.

Pengguna dapat mengklik salah satu Unit untuk membuka halaman Unit yang berisi daftar konten di dalamnya.

Pengguna Media hanya dapat melihat profil Profesional. Pengguna Media tidak memiliki profil publik dan tidak dapat dilihat oleh pengguna lain maupun Profesional.

10. Private Mode

Private Mode merupakan ruang bagi pengguna untuk mengakses kembali konten yang pernah dilihat atau disimpan.

Private Mode memiliki dua tab.

10.1 History

Menampilkan daftar konten yang pernah dilihat pengguna.

Pengguna dapat:

- Menghapus satu riwayat tontonan.
- Menghapus seluruh riwayat tontonan.

Penghapusan History tidak menghapus konten asli dan tidak mengurangi jumlah View konten.

10.2 Saved

Menampilkan daftar konten yang disimpan pengguna.

Pengguna dapat menghapus konten dari Saved tanpa menghapus konten aslinya.

11. Connections

Connections merupakan hubungan dua arah antara pengguna Media dan Profesional.

Aturan:

- Hanya pengguna Media yang dapat menambahkan Profesional.
- Profesional tidak dapat menambahkan pengguna Media.
- Connection terbentuk secara langsung tanpa persetujuan Profesional.
- Setelah terhubung, kedua pihak tercatat sebagai Connections satu sama lain.
- Pengguna Media dapat melihat daftar Profesional yang sudah terhubung.
- Pengguna Media dapat menghapus Connection.

11.1 Halaman Connections

Halaman Connections menampilkan dua bagian dalam satu halaman:

1. Daftar Profesional: menampilkan Profesional yang sudah terhubung dengan pengguna.
2. Connections Feed: menampilkan konten dari Profesional yang sudah terhubung.

11.2 Konfirmasi Penghapusan

Ketika pengguna memilih Remove Connection, sistem menampilkan popup konfirmasi dengan dua pilihan:

- Cancel: membatalkan penghapusan.
- Remove: melanjutkan penghapusan.

Setelah Connection dihapus, percakapan dengan Profesional tersebut dipindahkan ke Archive.

12. Connections Feed

Connections Feed menampilkan konten baru dari Profesional yang sudah terhubung dengan pengguna.

Connections Feed berada di halaman Connections bersama daftar Profesional yang sudah terhubung.

13. Messenger

Messenger menampilkan daftar Profesional yang sudah terhubung dengan pengguna Media.

13.1 Aturan Percakapan

- Pengguna Media dapat memulai percakapan dengan Profesional yang terhubung.
- Pengguna Media dapat mengirim pesan.
- Profesional tidak dapat memulai percakapan.
- Profesional hanya dapat membalas pesan atau pertanyaan dari pengguna Media.
- Tidak tersedia pencarian Profesional berdasarkan username melalui Messenger.

13.2 Jenis Pesan

Messenger mendukung:

- Pesan teks.
- Gambar.
- File.

13.3 Archive

Ketika Connection dihapus:

1. Percakapan otomatis dipindahkan ke Archive.
2. Pengguna tetap dapat membuka dan membaca riwayat percakapan.
3. Pengguna tidak dapat mengirim pesan baru selama belum terhubung kembali dengan Profesional tersebut.
4. Jika pengguna menghubungkan kembali Profesional tersebut, percakapan dapat digunakan kembali.
5. Pengguna dapat menghapus percakapan secara permanen dari Archive.

14. Notifications

Notifications menjadi pusat pemberitahuan bagi pengguna Media.

14.1 Jenis Notifikasi

Pengguna menerima notifikasi ketika Profesional yang sudah terhubung menerbitkan konten baru.

Notifikasi tidak dikirim untuk:

- Balasan pesan di Messenger.
- Perubahan profil Profesional.
- Perubahan informasi Unit Profesional.
- Konten dari Profesional yang belum terhubung dengan pengguna.

14.2 Navigasi Notifikasi

Notifikasi konten baru dapat diklik dan langsung mengarahkan pengguna ke halaman detail konten terkait.

14.3 Status Notifikasi

- Notifikasi baru memiliki status Unread.
- Setelah dibuka, status berubah menjadi Read.
- Notifikasi yang belum dibuka tetap berstatus Unread.

14.4 Penghapusan Notifikasi

Pengguna dapat:

- Menghapus satu notifikasi.
- Menghapus seluruh notifikasi sekaligus.

15. Media Settings

Media Settings digunakan untuk mengelola informasi profil dan kebutuhan pengguna di Media.

Bagian yang tersedia:

1. Nama + Username.
2. Deskripsi.
3. Foto profil.
4. Tautan, seperti website, media sosial, atau email.
5. Lokasi.
6. Laporan.

15.1 Laporan kepada Posnod

Bagian Laporan merupakan tempat pengguna menulis dan mengirimkan laporan kepada Posnod.

16. Posnod Account Center

Pengaturan akun secara menyeluruh dikelola melalui Posnod Account Center, bukan Media Settings.

Contohnya:

- Email akun.
- Keamanan.
- Informasi akun lainnya.

17. Report Professional

Selain melaporkan konten, pengguna Media juga dapat melaporkan akun Profesional.

Terdapat dua jenis pelaporan:

1. Report Content: melaporkan konten tertentu.
2. Report Professional: melaporkan akun Profesional secara keseluruhan.

Kedua jenis laporan dikirim kepada Posnod untuk ditinjau.

18. Privasi Pengguna Media

Aturan yang sudah ditetapkan:

- Pengguna Media tidak memiliki profil publik.
- Pengguna Media tidak dapat dilihat oleh pengguna Media lainnya.
- Profesional tidak dapat melihat akun atau profil pengguna Media.
- Pengguna Media hanya dapat melihat akun dan profil Profesional.

---

19. Hal yang Belum Diputuskan

Bagian ini sengaja dipisahkan agar tidak dianggap sebagai keputusan produk.

No.| Pembahasan| Status
1| Algoritma dan urutan konten di Homepage| Belum diputuskan
2| Urutan konten di halaman Topik, Unit, dan Focus| Belum diputuskan
3| Penghitungan jumlah Votes yang ditampilkan| Perlu dipastikan
4| Apakah History dan Saved sepenuhnya pribadi dari Profesional| Belum diputuskan
5| Detail notifikasi lainnya| Belum dibahas
6| Detail teknis Auth dan Account Center| Belum dibahas
7| Detail teknis pelaporan dan peninjauan laporan| Belum dibahas
8| Detail perilaku dan pengelolaan Connections Feed| Belum lengkap

---

20. Catatan Pengembangan

Dokumen ini menjadi dasar pemahaman produk Posnod Media bagi tim.

Prinsip pengerjaan:

- Product Specification menjelaskan perilaku dan kebutuhan produk.
- ERD menjelaskan struktur data dan hubungan antardata.
- API Contract menjelaskan komunikasi antara frontend dan backend.
- Keputusan teknis implementasi dibahas bersama tim engineering berdasarkan kebutuhan produk.

Dokumen ini masih berupa Draft dan dapat diperbarui ketika ada keputusan atau kebutuhan baru.

Ruang lingkup dokumen ini adalah Posnod Media. Pembahasan Pro+ dan Ink tidak termasuk dalam dokumen ini.