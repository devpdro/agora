
import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "next-themes";

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
    <html lang="pt-br">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
