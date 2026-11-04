# Posnod Monorepo

Repositori ini menggunakan arsitektur **PNPM Monorepo** yang memisahkan aplikasi ke dalam direktori `apps/` dan paket bersama ke dalam `packages/`.

---

## 🏗️ Struktur Monorepo

```text
posnod/
├── apps/
│   ├── frontend/        # Next.js (App Router), Tailwind CSS, TypeScript
│   └── backend/         # Express.js, TypeScript, TSX
├── packages/            # Shared libraries / utilities (opsional di masa depan)
├── docs/                # Dokumentasi panduan tim & standar koding
├── pnpm-workspace.yaml  # Konfigurasi workspace PNPM
├── package.json         # Konfigurasi root & script monorepo
└── pnpm-lock.yaml       # Lockfile dependensi bersama
```

---

## ⚡ Teknologi Utama

- **Monorepo Manager:** [pnpm](https://pnpm.io/) Workspaces
- **Frontend (`apps/frontend`):**
  - Framework: [Next.js](https://nextjs.org/) (App Router)
  - Styling: [Tailwind CSS](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/)
  - Typography: Font bawaan **Heme Pro**
  - Bahasa: JavaScript & TypeScript
- **Backend (`apps/backend`):**
  - Framework: [Express.js](https://expressjs.com/)
  - Runtime / Transpiler: [Node.js](https://nodejs.org/) + [tsx](https://github.com/privatenumber/tsx) + TypeScript
  - Konfigurasi: Dotenv (`.env`)

---

## 🚀 Memulai (Quick Start)

### 1. Prasyarat

Pastikan Anda telah menginstal:
- **Node.js** (v18 atau lebih baru)
- **pnpm** (v9 atau v10):
  ```bash
  npm install -g pnpm
  ```

### 2. Instalasi Dependensi

Jalankan perintah ini di **root** direktori untuk menginstal seluruh dependensi workspace secara bersamaan:

```bash
pnpm install
```

### 3. Menjalankan Mode Development

Jalankan kedua aplikasi (frontend dan backend) sekaligus secara paralel:

```bash
pnpm dev
```

Atau jalankan aplikasi secara terpisah:

- **Frontend saja:**
  ```bash
  pnpm frontend
  # atau
  pnpm --filter frontend dev
  ```
  Aplikasi dapat diakses di: `http://localhost:3000`

- **Backend saja:**
  ```bash
  pnpm backend
  # atau
  pnpm --filter backend dev
  ```
  API Server berjalan di: `http://localhost:3000` (atau port sesuai konfigurasi `.env`)

---

## 📦 Detail Aplikasi

### `apps/frontend`

- `src/app/` → Halaman & layout (termasuk halaman `feed` dan `topik-feed`)
- `src/components/` → Komponen UI, layouts, header, footer, dan ikon
- `src/components/itemsPublicFeed/` → Komponen khusus Public Feed
- `src/styles/` → Global CSS, styling token, dan tipografi
- `src/utils/` → Data topik dan fungsi helper
- `public/fonts/` → Font **Heme Pro** sudah dikonfigurasi otomatis ke seluruh tampilan aplikasi

### `apps/backend`

- `src/app.ts` → Inisialisasi Express app dan middleware
- `src/index.ts` → Entrypoint server listener
- `src/config/` → Konfigurasi environment variabel
- `src/auth/` → Service, controller, dan repository autentikasi
- `doc/` → Spesifikasi API & dokumentasi arsitektur

---

## 📖 Panduan Tim

Untuk alur kerja Git, konvensi penamaan branch/commit, standar testing, dan linting, silakan baca:
👉 [`docs/team-guidelines.md`](docs/team-guidelines.md)
