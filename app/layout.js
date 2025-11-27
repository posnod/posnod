import "./global.css";

export const metadata = {
  metadataBase: new URL("https://posnod.com"),

  title: {
    default: "Posnod - Social Learning Platform",
    template: "%s | Posnod",
  },

  description:
    "Platform pembelajaran sosial yang menyediakan pondasi modern untuk belajar, berbagi pengetahuan, dan berkolaborasi dalam skala luas.",

  applicationName: "Posnod",

  keywords: [
    "Posnod",
    "Learning",
    "Pembelajaran",
    "Platform Edukasi",
    "Belajar Online",
  ],

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png"},
      { url: "/favicon-16x16.png", sizes:"16x16", type: "image/png"}
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxVideoPreview: -1,
      maxImagePreview: "large",
      maxSnippet: -1,
    },
  },

  manifest: "/manifest.json",

  alternates: {
    canonical: "https://posnod.com",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico"/>
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      </head>
      <body className="bg-[#FBFBFB]">
        <main>{children}</main>
      </body>
    </html>
  );
}
