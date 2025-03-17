import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google';

// Configuração da fonte Poppins
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Sistema Digestório Interativo",
  description: "Aprenda sobre o sistema digestório humano de forma interativa e detalhada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
