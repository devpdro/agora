"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/app/presentation/components";
import { Highlighter } from "@/components/ui/highlighter";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { IMAGE } from "@/app/presentation/assets/images";

import S from "./price.module.scss";

const Price = () => {
  return (
    <section className={S.section} aria-label="Preços e planos do Ágora">
      <div className={S.content}>
        <motion.div
          className={S.badge}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.15,
          }}
        >
          <span className={S.badgeIcon}>✦</span>
          <span>INVESTIMENTO</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className={S.title}>
            <TextShimmer duration={3.5} spread={3}>Sua</TextShimmer>{" "}
            <Highlighter action="underline" color="#F6F6F6" animationDuration={800}>
              <TextShimmer duration={3.5} spread={3}>jornada</TextShimmer>
            </Highlighter>{" "}
            <TextShimmer duration={3.5} spread={3}>começa aqui</TextShimmer>
          </h1>
        </motion.div>
        <motion.p
          className={S.subtitle}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.1,
          }}
        >
          Um portal para entrar em um campo onde ciência, espiritualidade e tecnologia se fundem em prol da sua expansão.
        </motion.p>
        <div className={S.grid}>

          <motion.article
            className={S.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.2,
            }}
            whileHover={{
              y: -4,
              transition: {
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              },
            }}
          >
            <div className={S.topIcon}>
              <span className={S.iconSymbol}>
                <span>✦</span>
                <span>Black November</span>
              </span>
            </div>
            <div className={S.cardInner}>
              <motion.div
                className={S.heading}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.3,
                }}
              >
                Plano Trimestral
              </motion.div>

              <motion.div
                className={S.row}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.35,
                }}
              >
                <div className={S.priceValue}>R$369</div>
                <div className={S.suffix}>/ 3 meses</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 0.4,
                }}
              >
                <a href="https://pay.hotmart.com/S102777434V" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block', width: '100%' }}>
                  <Button
                    label="ENTRAR NO CAMPO AGORA"
                    size="lg"
                    width="100%"
                  />
                </a>
              </motion.div>

              <motion.ul
                className={S.list}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.45,
                }}
              >
                {[
                  "Aulas semanais ao vivo",
                  "Clube do Livro do Campo",
                  "Comunidade exclusiva",
                  "Acesso às IAs do campo (Dreamer, Joe Dispensa, Saint Germain)",
                  "Gravações de todas as aulas",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className={S.item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      delay: 0.5 + index * 0.05,
                    }}
                  >
                    <span className={S.check} aria-hidden="true">✓</span> {item}
                  </motion.li>
                ))}
                <motion.li
                  className={S.item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.5 + 5 * 0.05,
                  }}
                >
                  <span className={S.check} aria-hidden="true">✓</span>{" "}
                  <span>Acesso à escola </span>
                  <Image
                    src={IMAGE.LOGO}
                    alt="A Fonte"
                    className={S.logoInline}
                    width={120}
                    height={36}
                  />
                </motion.li>
              </motion.ul>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default Price;
