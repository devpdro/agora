"use client";


import { Header, Purpose, Works, Proof, Lumen, FAQ, Footer, Particles, Price, Meta } from '@/app/presentation/components'

import S from './home.module.scss'

const Home = () => {


  return (
    <div className={S.container}>
      <Meta />
      <Header />
      <Purpose />
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
