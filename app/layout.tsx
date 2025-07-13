import "./css/style.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "OpenBioCure - Advancing Healthcare Through Innovation",
  description: "OpenBioCure is a cutting-edge biotechnology platform that combines SDK, DataLake, and Multi-Agent systems to revolutionize healthcare research and innovation.",
  keywords: "biotechnology, healthcare, research, AI agents, data lake, open source, medical innovation",
  authors: [{ name: "OpenBioCure Team" }],
  openGraph: {
    title: "OpenBioCure - Advancing Healthcare Through Innovation",
    description: "Revolutionary biotechnology platform combining SDK, DataLake, and Multi-Agent systems for healthcare innovation.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenBioCure - Advancing Healthcare Through Innovation",
    description: "Revolutionary biotechnology platform for healthcare innovation.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
