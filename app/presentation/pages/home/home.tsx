import { Particles, Header, Unique, Price, FAQ, Footer } from '@/app/presentation/components'

import S from './home.module.scss'
import Video from '../../components/video/video'
import ProofSection from '../../components/proof/proof'

const Home = () => (
  <div className={S.container}>
    <Particles />

    <Header />
    <Video />

    <Unique />
    <ProofSection />
    <Price />
    <FAQ />
    <Footer />

  </div>
)

export default Home
