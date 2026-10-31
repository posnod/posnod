import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-tertiary text-primary border-t border-medium py-6 relative z-10">
      <div className="container-wide mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
        
        {/* Kiri: Copyright */}
        <p className="text-xs sm:text-sm order-2 sm:order-1">
          © {new Date().getFullYear()} Posnod. Semua hak dilindungi.
        </p>

        {/* Kanan: Link Navigasi */}
        <div className="flex items-center gap-6 order-1 sm:order-2">
          <Link 
            href="/PublicWeb/policy" 
            className="text-primary hover-text-primary transition-colors text-xs sm:text-sm"
          >
            Kebijakan Privasi
          </Link>
          <Link 
            href="/PublicWeb/provision" 
            className="text-primary hover-text-primary transition-colors text-xs sm:text-sm"
          >
            Syarat & Ketentuan
          </Link>
          <Link 
            href="/login" 
            className="text-primary hover-text-primary transition-colors font-medium text-xs sm:text-sm"
          >
            Masuk
          </Link>
        </div>
        
      </div>
    </footer>
  );
}