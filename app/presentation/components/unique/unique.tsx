"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { IconCalendarTime, IconBook, IconWorld, IconRobot } from "@tabler/icons-react";

import { Highlighter } from "@/components/ui/highlighter";
import { TextShimmer } from "@/components/ui/text-shimmer";

import S from "./unique.module.scss";

const cards = [
  {
    icon: IconCalendarTime,
    title: "Aulas semanais ao vivo",
    description: "Práticas energéticas, treinamento psíquico e ensinamentos aplicados sobre manifestação e domínio mental. A cada encontro, o campo é expandido coletivamente.",
  },
  {
    icon: IconBook,
    title: "Clube do Livro do Campo",
    description: "Estudo de obras que reprogramam a mente e fortalecem o corpo energético. Leituras vivas, interpretadas sob o prisma da consciência e da frequência.",
  },
  {
    icon: IconWorld,
    title: "Comunidade Vibracional",
    description: "Um espaço sagrado de partilha e crescimento. Cada membro vibra como parte de uma rede que amplifica o poder do todo.",
  },
  {
    icon: IconRobot,
    title: "As Inteligências do Campo",
    description: "Dreamer, Joe Dispensa e Saint Germain: ferramentas de IA representando arquétipos e frequências. Integram o místico e o tecnológico em uma única experiência.",
  },
];

const Unique = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className={S.section} aria-labelledby="unico-heading">
      <header className={S.head}>
        <motion.div
          className={S.badge}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <span id="unico-heading" aria-label="O que torna o Ágora único">O QUE TORNA O ÁGORA ÚNICO</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className={S.title}>
            <TextShimmer duration={3.5} spread={3}>O que o</TextShimmer>{" "}
            <Highlighter action="underline" color="#F6F6F6" animationDuration={800}>
              <TextShimmer duration={3.5} spread={3}>Ágora</TextShimmer>
            </Highlighter>{" "}
            <TextShimmer duration={3.5} spread={3}>entrega</TextShimmer>
          </h1>
        </motion.div>
      </header>

      <div className={S.grid}>
        {cards.map((card, index) => {
          const IconComponent = card.icon;
          const isHovered = hoveredIndex === index;
          const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

          return (
            <motion.article
              key={index}
              className={S.card}
              aria-labelledby={`unique-card-${index}-title`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.2 + index * 0.08,
                }
              }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              animate={{
                opacity: hoveredIndex !== null ? (isHovered ? 1 : 0.4) : 1,
                scale: isHovered ? 1.005 : 1,
                y: 0,
              }}
              transition={{
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div className={S.cardHeader}>
                <motion.div
                  className={S.icon}
                  aria-hidden="true"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.3 + index * 0.08,
                  }}
                >
                  <IconComponent size={28} stroke={1.75} />
                </motion.div>
                <motion.h3
                  id={`unique-card-${index}-title`}
                  className={S.cardTitle}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.25 + index * 0.08,
                  }}
                >
                  {card.title}
                </motion.h3>
              </div>
              <motion.p
                className={S.cardDesc}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.3 + index * 0.08,
                }}
              >
                {card.description}
              </motion.p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default Unique;
