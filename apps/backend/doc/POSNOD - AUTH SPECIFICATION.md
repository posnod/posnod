AUTH SPECIFICATION — POSNOD

Berikut spesifikasi awal fitur Auth Posnod sebagai acuan pengembangan frontend dan backend.

1. Landing Page

- Pengunjung pertama kali diarahkan ke Landing Page.
- Terdapat tombol Bergabung yang mengarahkan pengguna ke halaman Auth.

2. Halaman Auth

Menggunakan satu halaman autentikasi untuk login dan registrasi.

Metode autentikasi:

- Email
- Google
- Apple
- X

Pengguna juga dapat memilih tujuan masuk:

- Media (default)
- Pro+

Pilihan tujuan hanya menentukan halaman setelah autentikasi, bukan membuat jenis akun yang berbeda.

3. Login dan Registrasi Email

- Pengguna memasukkan email.
- Jika email sudah terdaftar, pengguna melanjutkan proses login menggunakan password.
- Jika email belum terdaftar, sistem menampilkan popup pemberitahuan bahwa email belum terdaftar.
- Popup menyediakan tombol Lanjutkan untuk memulai registrasi.
- Pengguna kemudian membuat password.

4. Verifikasi Email

- Setelah registrasi, Posnod mengirimkan email verifikasi.

- Pengguna diarahkan ke halaman yang menampilkan pesan:
  
  "Silakan verifikasi email yang sudah dikirim ke: (email pengguna)"

- Pengguna menunggu di halaman tersebut sampai email berhasil diverifikasi.

- Sistem mendeteksi status verifikasi secara otomatis.

- Setelah berhasil diverifikasi, pengguna otomatis diarahkan ke halaman tujuan.

Pengguna tidak dapat masuk ke Posnod sebelum email terverifikasi.

5. Media dan Pro+

- Posnod menggunakan satu akun untuk seluruh ekosistem Media dan Pro+.
- Pengguna yang sudah memiliki akun Media dapat memilih masuk ke Media atau Pro+.
- Pengguna baru yang memilih Pro+ saat registrasi tetap diarahkan ke Media setelah verifikasi email.
- Pengguna harus memiliki akun Media terlebih dahulu sebelum dapat menggunakan Pro+.
- Pengguna lama yang sudah memiliki akses Pro+ dan memilih Pro+ saat login akan diarahkan langsung ke Pro+.
- Jika pengguna tidak memilih tujuan masuk, sistem otomatis mengarahkannya ke Media.

6. Aturan Utama

- Satu akun untuk Media dan Pro+.
- Email wajib diverifikasi.
- Media menjadi tujuan default.
- Registrasi pengguna baru selalu dimulai melalui Media, meskipun sebelumnya memilih Pro+.

Catatan: Dokumen ini merupakan spesifikasi perilaku produk. Detail teknis seperti pengelolaan sesi, masa berlaku token verifikasi, mekanisme OAuth, dan keamanan password dapat ditentukan bersama saat penyusunan API Contract dan database design.