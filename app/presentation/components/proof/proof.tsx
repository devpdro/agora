"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

import { IMAGE } from "@/app/presentation/assets/images";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { Highlighter } from "@/components/ui/highlighter";

import { BlurFade } from "@/registry/magicui/blur-fade";

import S from "./proof.module.scss";

type SocialImage = {
  src: StaticImageData;
  alt: string;
  size?: "small" | "medium" | "large" | "tall" | "wide";
};

const IMAGES: SocialImage[] = [
  { src: IMAGE.PROVA_SOCIAL_1, alt: "Prova social 1", size: "large" },
  { src: IMAGE.PROVA_SOCIAL_9, alt: "Prova social 9", size: "large" },
  { src: IMAGE.PROVA_SOCIAL_4, alt: "Prova social 4", size: "large" },
  { src: IMAGE.PROVA_SOCIAL_2, alt: "Prova social 2", size: "large" },
  { src: IMAGE.PROVA_SOCIAL, alt: "Prova social", size: "large" },
  { src: IMAGE.PROVA_SOCIAL_7, alt: "Prova social 7", size: "large" },
  { src: IMAGE.PROVA_SOCIAL_5, alt: "Prova social 5", size: "large" },
  { src: IMAGE.PROVA_SOCIAL_8, alt: "Prova social 8", size: "large" },
  { src: IMAGE.PROVA_SOCIAL_6, alt: "Prova social 6", size: "large" },
];

const Proof = () => {
  return (
    <section className={S.section}>
      <motion.div
        className={S.badge}
        aria-hidden
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        TRANSFORMAÇÕES REAIS
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className={S.title}>
          <TextShimmer duration={3.5} spread={3}>Veja quem já está</TextShimmer>{" "}
          <Highlighter action="underline" color="#F6F6F6" animationDuration={800}>
            <TextShimmer duration={3.5} spread={3}>reescrevendo</TextShimmer>
          </Highlighter>{" "}
          <TextShimmer duration={3.5} spread={3}>sua realidade</TextShimmer>
        </h1>
      </motion.div>
      <div className={S.grid}>
        {IMAGES.map((img, i) => (
          <BlurFade
            key={i}
            delay={0.25 + i * 0.05}
            inView
            className={`${S.item} ${img.size ? S[img.size] : ""}`}
          >
            <Image 
              className={S.media} 
              src={img.src} 
              alt={img.alt}
              loading="lazy"
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
};

export default Proof;