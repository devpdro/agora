"use client";

import dynamic from 'next/dynamic';
import { Header, Purpose, Video, Works, Price, Unique } from '@/app/presentation/components'

import S from './home.module.scss'

// Dynamic imports para componentes pesados (carregam apenas quando necessário)
const Proof = dynamic(() => import('@/app/presentation/components/proof/proof').then(mod => ({ default: mod.default })), {
  ssr: true,
  loading: () => null,
});

const Lumen = dynamic(() => import('@/app/presentation/components/lumen/lumen').then(mod => ({ default: mod.default })), {
  ssr: false,
  loading: () => null,
});

const FAQ = dynamic(() => import('@/app/presentation/components/faq/faq').then(mod => ({ default: mod.default })), {
  ssr: true,
  loading: () => null,
});

const Footer = dynamic(() => import('@/app/presentation/components/footer/footer').then(mod => ({ default: mod.default })), {
  ssr: true,
  loading: () => null,
});

const Particles = dynamic(() => import('@/app/presentation/components/particles/particles').then(mod => ({ default: mod.default })), {
  ssr: false,
  loading: () => null,
});

const Home = () => {
  return (
    <div className={S.container}>
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
