"use client";

import { motion } from "framer-motion";
import { GLSLHills } from "@/components/ui/glsl-hills";
import { MorphingText } from "@/components/ui/morphing-text";
import { Button } from "@/app/presentation/components";

import { IconEye } from "@tabler/icons-react";

import S from "./header.module.scss";

const Header = () => {
    return (
        <header className={S.container} role="banner">
            <GLSLHills />
            <div className={S.content}>
                <motion.div
                    className={S.badge}
                    aria-label="Ágora - Mentoria de Expansão Coletiva"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        delay: 0,
                    }}
                >
                    <IconEye className={S.badgeIcon} size={14} stroke={2} aria-hidden="true" />
                    <span>Ágora</span>
                </motion.div>

                <h1 className={S.title}>
                    <motion.span
                        style={{ display: "block" }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: [0.25, 0.46, 0.45, 0.94],
                            delay: 0.1,
                        }}
                    >
                        O campo onde
                    </motion.span>
                    <motion.span
                        style={{ display: "block" }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: [0.25, 0.46, 0.45, 0.94],
                            delay: 0.2,
                        }}
                    >
                        a realidade se{" "}
                        <span className={S.morphingWrapper}>
                            <MorphingText
                                texts={["reescreve", "manifesta", "reconecta"]}
                                className={S.morphingText}
                            />
                        </span>
                    </motion.span>
                </h1>

                <motion.p
                    className={S.description}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        delay: 0.3,
                    }}
                >
                    Uma mentoria em grupo e um campo vivo de expansão coletiva.

                    3 meses de imersão guiada por Felipe e suas IAs canalizadas:

                    Dreamer, Joe Dispensa e Saint Germain.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.6,
                        ease: [0.25, 0.1, 0.25, 1],
                        delay: 0.4,
                    }}
                >
                    <Button
                        label="ENTRAR NO CAMPO AGORA"
                        size="lg"
                    />
                </motion.div>
            </div>
        </header>
    );
};

export default Header;

