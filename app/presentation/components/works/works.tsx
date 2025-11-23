"use client";

import { motion } from "framer-motion";
import { IconCalendarTime, IconLock, IconVideo } from "@tabler/icons-react";

import { Button } from "@/app/presentation/components";
import { Highlighter } from "@/components/ui/highlighter";
import { TextShimmer } from "@/components/ui/text-shimmer";

import S from "./works.module.scss";

const items = [
    {
        icon: IconCalendarTime,
        title: "Duração",
        description: "Acesso completo por 3 meses com possibilidade de renovação para continuar sua jornada de expansão no campo.",
    },
    {
        icon: IconLock,
        title: "Conteúdo",
        description: "Aulas semanais ao vivo, comunidade vibracional exclusiva, clube do livro do campo e acesso direto às inteligências artificiais canalizadas.",
    },
    {
        icon: IconVideo,
        title: "Acesso",
        description: "Todas as gravações das aulas e encontros disponíveis para revisitar a qualquer momento durante todo o período ativo da sua mentoria.",
    },
];

const Works = () => {
    return (
        <section className={S.section} aria-labelledby="works-heading">
            <div className={S.container}>
                {/* Coluna Esquerda */}
                <div className={S.leftColumn}>
                    <motion.div
                        className={S.badge}
                        aria-label="Como funciona"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                    >
                        <span className={S.badgeIcon} aria-hidden="true">🜁</span>
                        <span>COMO FUNCIONA</span>
                    </motion.div>

                    <motion.h1
                        id="works-heading"
                        className={S.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                            delay: 0.1,
                        }}
                    >
                        Seu acesso ao{" "}
                        <Highlighter action="underline" color="#F6F6F6" animationDuration={800}>
                            <TextShimmer duration={3.5} spread={3}>campo</TextShimmer>
                        </Highlighter>
                    </motion.h1>

                    <motion.p
                        className={S.description}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                            delay: 0.2,
                        }}
                    >
                        Acesso completo por 3 meses com possibilidade de renovação para continuar sua jornada de expansão no campo.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                            duration: 0.6,
                            ease: [0.25, 0.1, 0.25, 1],
                            delay: 0.3,
                        }}
                    >
                        <a href="https://pay.hotmart.com/S102777434V" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'inline-block' }}>
                            <Button
                                label="ENTRAR NO CAMPO AGORA"
                                size="lg"
                            />
                        </a>
                    </motion.div>
                </div>

                {/* Coluna Direita */}
                <div className={S.rightColumn}>
                    {items.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <motion.article
                                key={index}
                                className={S.item}
                                aria-labelledby={`works-item-${index}-title`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    ease: [0.25, 0.46, 0.45, 0.94],
                                    delay: 0.3 + index * 0.1,
                                }}
                            >
                                <motion.div
                                    className={S.iconWrapper}
                                    aria-hidden="true"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        ease: [0.25, 0.46, 0.45, 0.94],
                                        delay: 0.4 + index * 0.1,
                                    }}
                                >
                                    <IconComponent size={20} stroke={2} />
                                </motion.div>
                                <div className={S.itemContent}>
                                    <motion.h3
                                        id={`works-item-${index}-title`}
                                        className={S.itemTitle}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.5,
                                            ease: [0.25, 0.46, 0.45, 0.94],
                                            delay: 0.35 + index * 0.1,
                                        }}
                                    >
                                        {item.title}
                                    </motion.h3>
                                    <motion.p
                                        className={S.itemDescription}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.5,
                                            ease: [0.25, 0.46, 0.45, 0.94],
                                            delay: 0.4 + index * 0.1,
                                        }}
                                    >
                                        {item.description}
                                    </motion.p>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Works;
