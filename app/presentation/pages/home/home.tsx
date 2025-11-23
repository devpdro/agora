"use client";


import { Header, Purpose, Video, Works, Proof, Lumen, FAQ, Footer, Particles, Price, Meta, Unique } from '@/app/presentation/components'

import S from './home.module.scss'

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
