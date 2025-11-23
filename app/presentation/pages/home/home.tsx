"use client";

import dynamic from 'next/dynamic';
import { Header, Purpose, Video, Works, Proof, FAQ, Footer, Price, Meta, Unique } from '@/app/presentation/components'

import S from './home.module.scss'

// Dynamic imports para componentes pesados (carregam apenas quando necessário)
const Lumen = dynamic(() => import('@/app/presentation/components/lumen/lumen').then(mod => ({ default: mod.default })), {
  ssr: false,
  loading: () => null,
});

const Particles = dynamic(() => import('@/app/presentation/components/particles/particles').then(mod => ({ default: mod.default })), {
  ssr: false,
  loading: () => null,
});

const Home = () => {
  return (
    <div className={S.container}>
      <Meta />
      <Header />
      <Purpose />
      <Video />
      <Unique />
      <Works />
      <Proof />
      <Price />
      <Lumen />
      <FAQ />
      <Footer />

      <Particles />
    </div>
  );
}

export default Home
