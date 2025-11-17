import Image, { StaticImageData } from "next/image";

import { IMAGE } from "../../assets/images";

import S from "./proof.module.scss";

type SocialImage = {
  src: StaticImageData;
  alt: string;
  size?: "small" | "medium" | "large" | "tall" | "wide";
};

const IMAGES: SocialImage[] = [
  { src: IMAGE.PROVA_SOCIAL_1, alt: "Prova social 1", size: "medium" },
  { src: IMAGE.PROVA_SOCIAL_2, alt: "Prova social 2", size: "small" },
  { src: IMAGE.PROVA_SOCIAL_3, alt: "Prova social 3", size: "tall" },
  { src: IMAGE.PROVA_SOCIAL_4, alt: "Prova social 4", size: "small" },
  { src: IMAGE.PROVA_SOCIAL_5, alt: "Prova social 5", size: "medium" },
  { src: IMAGE.PROVA_SOCIAL_6, alt: "Prova social 6", size: "wide" },
  { src: IMAGE.PROVA_SOCIAL_7, alt: "Prova social 7", size: "medium" },
  { src: IMAGE.PROVA_SOCIAL_8, alt: "Prova social 8", size: "large" },
  { src: IMAGE.PROVA_SOCIAL_9, alt: "Prova social 9", size: "small" },
  { src: IMAGE.PROVA_SOCIAL_10, alt: "Prova social 10", size: "medium" },
  { src: IMAGE.PROVA_SOCIAL_11, alt: "Prova social 11", size: "wide" },
];

const ProofSection: React.FC = () => {
  return (
    <section className={S.section}>
      <h2 className={S.title}>Veja o que os alunos estão dizendo…</h2>
      <div className={S.grid}>
        {IMAGES.map((img, i) => (
          <div key={i} className={`${S.item} ${img.size ? S[img.size] : ""}`}>
            <Image className={S.media} src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProofSection;