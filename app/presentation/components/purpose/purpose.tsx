"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll";

import S from "./purpose.module.scss";

const Purpose = () => {
    const shouldReduceMotion = useReducedMotion();
    const text = `Formar seres conscientes e psíquicamente despertos. O Àgora não ensina apenas a pensar, ensina a vibrar, criar e sustentar novas realidades. Aqui você aprende a dominar seu campo, não apenas a reagir a ele.`;

    return (
        <section className={S.container} aria-labelledby="proposito-heading">
            <div className={S.wrapper}>
                <div className={S.content}>
                    <div className={S.textWrapper}>
                        <motion.div
                            className={S.badge}
                            aria-label="O Propósito"
                            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                duration: shouldReduceMotion ? 0 : 0.5,
                                ease: "easeOut",
                            }}
                        >
                            <span className={S.badgeIcon} aria-hidden="true">🜄</span>
                            <span id="proposito-heading">O PROPÓSITO</span>
                        </motion.div>
                        <TextGradientScroll
                            text={text}
                            type="letter"
                            textOpacity="soft"
                            className={S.text}
                        />
                    </div>
                </div>
            </div>
            <div className={S.spacer} aria-hidden="true" />
        </section>
    );
};

export default Purpose;

