import EmailBox from '@/components/EmailBox';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-center pt-20 overflow-hidden">
      <div className="mt-24">
        <h1 className="text-5xl font-semibold">The Living System</h1>

        <p className="mt-6 text-gray-600">
          Rasakan cara baru untuk belajar, berkolaborasi, dan berkembang di satu tempat.
          <br />
          Daftar untuk menjadi yang pertama mencoba Posnod.
        </p>
        <a
          href="#"
          className="text-purple-700 text-sm font-semibold no-underline active:underline block mt-6"
        >
          Dapatkan Early Access
        </a>
        <EmailBox />
      </div>
    </main>
  );
}
