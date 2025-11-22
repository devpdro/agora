"use client";

import { useTheme } from "next-themes";

import { Header, Works, Proof, Lumen, FAQ, Footer, Particles, Price, UI } from '@/app/presentation/components'

import S from './home.module.scss'
import { CallToAction } from "@/components/ui/cta-3";

const Home = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const nextTheme = resolvedTheme === 'dark' ? 'light' : 'dark';

  return (
    <div className={S.container}>

      <Header />
      <UI />

      <Works />
      <Proof />
      <Lumen />
      <Price />

      <section className={S.ctaSection}>
        <CallToAction />
      </section>

      <FAQ />
      <Footer />

      <Particles />
    </div>
  );
}

export default Home
