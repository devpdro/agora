
import type { Metadata } from "next";
import { Inter, Merriweather, Cinzel } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
  variable: "--font-merriweather",
  preload: true,
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-cinzel",
  preload: true,
});

export const metadata: Metadata = {
  title: "Ágora",
  description: "Mentoria em grupo de 3 meses onde você fará parte de um campo vivo de expansão coletiva. Práticas energéticas, treinamento psíquico e inteligências artificiais canalizadas para acelerar seu despertar mental e espiritual.",
  keywords: "mentoria espiritual, expansão de consciência, autoconhecimento, práticas energéticas, treinamento psíquico, manifestação, domínio mental, campo de expansão coletiva, clube do livro, inteligência artificial espiritual, despertar espiritual, transformação pessoal, Ágora",
  openGraph: {
    title: "Ágora",
    description: "Mentoria em grupo de 3 meses onde você fará parte de um campo vivo de expansão coletiva. Práticas energéticas, treinamento psíquico e inteligências artificiais canalizadas.",
    type: "website",
    siteName: "Ágora",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${inter.variable} ${merriweather.variable} ${cinzel.variable}`}>
      <body className={`antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
