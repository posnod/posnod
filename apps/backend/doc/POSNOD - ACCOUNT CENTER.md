POSNOD ACCOUNT CENTER

Product Specification

Dokumen: Product Specification
Produk: Posnod Account Center
Perusahaan: Posnod Labs
Versi: 0.1
Status: Draft

---

1. Gambaran Umum

Posnod Account Center merupakan pusat pengelolaan identitas, akses, dan keamanan akun pengguna di seluruh ekosistem Posnod.

Account Center memungkinkan pengguna mengelola satu akun yang digunakan untuk mengakses berbagai produk Posnod.

Account Center berdiri sebagai bagian tersendiri dan tidak menjadi bagian dari Media maupun Pro+.

2. Account Information

Bagian ini menampilkan informasi utama akun Posnod.

2.1 Informasi Akun

Informasi yang ditampilkan:

- Account ID: identitas unik akun Posnod.
- Email utama.
- Status verifikasi email.
- Tanggal pembuatan akun.
- Status akun.

2.2 Penggantian Email

Pengguna dapat mengganti email utama melalui Account Center.

Alur:

1. Pengguna memasukkan email baru.
2. Sistem mengirimkan email verifikasi ke alamat baru.
3. Pengguna melakukan verifikasi.
4. Setelah berhasil diverifikasi, email baru menjadi email utama.

Sebelum verifikasi selesai, email lama tetap menjadi email utama.

3. Security

Bagian ini menyediakan pengaturan keamanan dan perlindungan akun.

3.1 Password

Pengguna dapat mengelola password melalui Account Center.

Mengubah Password:

- Memasukkan password saat ini.
- Memasukkan password baru.
- Mengonfirmasi password baru.

Reset Password:

- Pengguna dapat meminta reset password jika lupa.
- Sistem mengirimkan tautan reset melalui email terdaftar.

3.2 Two-Factor Authentication (2FA)

2FA merupakan lapisan keamanan tambahan yang bersifat opsional.

Aturan:

- Pengguna dapat mengaktifkan 2FA.
- Pengguna dapat menonaktifkan 2FA.
- Jika aktif, login memerlukan verifikasi tambahan setelah password.
- Untuk MVP, verifikasi tambahan menggunakan kode OTP melalui email.

3.3 Perangkat dan Sesi Login

Pengguna dapat melihat dan mengelola sesi login akun.

Informasi yang ditampilkan:

- Perangkat.
- Browser.
- Sistem operasi.
- Lokasi perkiraan berdasarkan IP.
- Waktu aktivitas terakhir.
- Status sesi.

Tindakan yang tersedia:

- Keluar dari perangkat tertentu.
- Keluar dari semua perangkat.
- Melihat sesi yang masih aktif.

Alamat IP lengkap tidak ditampilkan kepada pengguna.

Lokasi yang ditampilkan merupakan perkiraan dan tidak selalu menunjukkan lokasi sebenarnya.

3.4 Riwayat Login

Untuk MVP, informasi sesi dan perangkat menjadi prioritas. Riwayat login historis yang lebih terperinci dapat dikembangkan kemudian.

4. Login Methods

Bagian ini mengelola metode autentikasi yang terhubung dengan akun Posnod.

Metode login yang didukung:

- Email.
- Google.
- Apple.
- X.

4.1 Pengelolaan Metode Login

Pengguna dapat:

- Melihat metode login yang terhubung.
- Menghubungkan metode login tambahan.
- Melepaskan metode login yang tidak lagi digunakan.

4.2 Aturan Keamanan

- Pengguna harus membuktikan kepemilikan akun eksternal sebelum menghubungkannya.
- Sistem tidak mengizinkan pengguna melepaskan seluruh metode login yang masih diperlukan untuk mengakses akun.
- Email tetap menjadi identitas utama akun Posnod.

5. Connected Products

Bagian ini menampilkan produk Posnod yang terhubung dengan akun pengguna.

Produk yang termasuk dalam cakupan saat ini:

- Posnod Media.
- Posnod Pro+.

Pengguna dapat melihat status akses setiap produk.

5.1 Pengelolaan Akses Pro+

Pengguna dapat menonaktifkan akses Pro+ tanpa menghapus akun Posnod secara keseluruhan.

Ketika Pro+ dinonaktifkan:

- Pengguna tidak dapat mengakses fitur Pro+.
- Profil Profesional disembunyikan dari Media.
- Seluruh konten Profesional disembunyikan dari Media.
- Unit dan video tidak lagi ditampilkan.
- Data Pro+ tetap disimpan.
- Media tetap dapat digunakan.
- Pengguna dapat mengaktifkan kembali Pro+ kapan saja.

Penonaktifan Pro+ tidak sama dengan penghapusan akun Posnod.

6. Account Management

Bagian ini mengatur status dan keberlangsungan akun Posnod.

6.1 Status Akun

Status akun yang ditampilkan:

- Active.
- Temporarily Disabled.
- Pending Deletion.

6.2 Penghapusan Akun

Pengguna dapat mengajukan penghapusan akun Posnod secara permanen melalui Account Center.

Alur:

1. Pengguna mengajukan penghapusan akun.
2. Sistem meminta konfirmasi identitas.
3. Sistem menampilkan konsekuensi penghapusan.
4. Pengguna mengonfirmasi permintaan.
5. Sistem memulai masa tenggang 30 hari.
6. Selama masa tenggang, pengguna dapat membatalkan permintaan penghapusan.
7. Setelah masa tenggang berakhir, penghapusan permanen dilanjutkan.

6.3 Dampak Penghapusan

Penghapusan akun Posnod berdampak pada seluruh ekosistem:

- Akun Media dihapus.
- Akses Pro+ dihapus.
- Profil Profesional tidak lagi tersedia.
- Unit dan konten yang dibuat melalui Pro+ dihapus.
- Pengguna kehilangan akses ke seluruh layanan Posnod.

Pelaksanaan penghapusan tetap harus memperhatikan kewajiban penyimpanan data dan ketentuan hukum yang berlaku.

7. Pengembangan Berikutnya

Fitur berikut belum menjadi prioritas MVP:

7.1 Download Your Data

Pengguna dapat meminta salinan data akun Posnod untuk diunduh.

Data yang dapat dicakup antara lain:

- Informasi akun.
- Informasi profil.
- Riwayat aktivitas.
- Data dan konten yang dimiliki pengguna.

Detail format dan cakupan ekspor data akan ditentukan pada tahap pengembangan berikutnya.

7.2 Riwayat Login Terperinci

Pengembangan riwayat aktivitas login yang lebih lengkap di luar informasi sesi dan perangkat yang tersedia pada MVP.

---

8. Ringkasan Cakupan MVP

Bagian| Fitur
Account Information| Account ID, email, verifikasi, tanggal pembuatan, status akun
Email Management| Penggantian email dengan verifikasi
Security| Ubah password dan reset password
2FA| OTP melalui email
Sessions| Informasi perangkat, sesi, dan pengelolaan sesi
Login Methods| Email, Google, Apple, X
Connected Products| Media dan Pro+
Pro+ Access| Penonaktifan dan pengaktifan kembali
Account Management| Pengajuan penghapusan dengan masa tenggang 30 hari

9. Catatan untuk Pembahasan Teknis

Hal-hal berikut perlu dirinci sebelum implementasi:

- Mekanisme verifikasi identitas untuk tindakan sensitif.
- Masa berlaku dan batas percobaan OTP.
- Aturan sesi dan token autentikasi.
- Mekanisme penghubungan akun OAuth.
- Perilaku akun selama masa tenggang penghapusan.
- Mekanisme penghapusan dan retensi data.
- Penanganan kegagalan aktivasi atau penonaktifan Pro+.

Akhir Dokumen