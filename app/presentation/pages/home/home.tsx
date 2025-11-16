import ParticlesOverlay from '@/app/presentation/components/particles/particles'
import Header from '@/app/presentation/components/header/header'
import FAQ from '@/app/presentation/components/faq/faq'
import VideoSection from '@/app/presentation/components/video/video'
import ProofSection from '@/app/presentation/components/proof/proof'
import Face from '@/app/presentation/components/face/face'
import PriceSection from '@/app/presentation/components/price/price'
import PurposeSection from '@/app/presentation/components/purpose/purpose'
import styles from './home.module.scss'

const Home = () => (
  <div className={styles.container}>
    <ParticlesOverlay />
    <main className={styles.content}>
      <Header />
      <ProofSection />
      <PriceSection />
      <PurposeSection />
      <FAQ />
      <VideoSection />
      <Face />
    </main>
  </div>
)

export default Home
