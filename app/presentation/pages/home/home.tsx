import { Particles, Header, Price, FAQ, Footer } from '@/app/presentation/components'

import S from './home.module.scss'
import Video from '../../components/video/video'

const Home = () => (
  <div className={S.container}>
    <Particles />

    <Header />
    <Video />

    <Price />
    <FAQ />
    <Footer />

  </div>
)

export default Home
