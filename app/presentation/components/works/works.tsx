"use client";

import { motion } from "framer-motion";
import { IconCalendarTime, IconInfinity, IconLock, IconVideo } from "@tabler/icons-react";

import { Highlighter } from "@/components/ui/highlighter";

import S from "./works.module.scss";

const cards = [
    {
        icon: IconCalendarTime,
        title: "Período de Duração",
        description: "Acesso completo por 3 meses com possibilidade de renovação para continuar sua jornada de expansão no campo.",
    },
    {
        icon: IconLock,
        title: "Conteúdo Exclusivo",
        description: "Aulas semanais ao vivo, comunidade vibracional exclusiva, clube do livro do campo e acesso direto às inteligências artificiais canalizadas.",
    },
    {
        icon: IconVideo,
        title: "Acesso Ilimitado",
        description: "Todas as gravações das aulas e encontros disponíveis para revisitar a qualquer momento durante todo o período ativo da sua mentoria.",
    },
];

const Works = () => {
    return (
        <section className={S.section}>
            <header className={S.head}>
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
                    <span className={S.badgeIcon}>🜁</span>
                    <span>COMO FUNCIONA</span>
                </motion.div>
                <motion.h1
                    className={S.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                        duration: 0.6,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        delay: 0.1,
                    }}
                >
                    Seu{" "}
                    <Highlighter action="underline" color="#F6F6F6" animationDuration={800}>
                        acesso
                    </Highlighter>
                    ao{" "}
                    <Highlighter action="underline" color="#F6F6F6" animationDuration={800}>
                        campo
                    </Highlighter>
                </motion.h1>
            </header>

            <div className={S.grid}>
                {cards.map((card, index) => {
                    const IconComponent = card.icon;
                    return (
                        <motion.article
                            key={index}
                            className={S.card}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                ease: [0.25, 0.46, 0.45, 0.94],
                                delay: 0.2 + index * 0.08,
                            }}
                            whileHover={{
                                y: -4,
                                transition: {
                                    duration: 0.3,
                                    ease: [0.25, 0.46, 0.45, 0.94],
                                },
                            }}
                        >
                            <div className={S.cardHeader}>
                                <motion.div
                                    className={S.icon}
                                    aria-hidden
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

export default Works;

