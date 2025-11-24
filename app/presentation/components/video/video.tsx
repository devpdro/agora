"use client";

import { motion } from "framer-motion";
import Script from "next/script";

import { Button } from "@/app/presentation/components";

import S from "./video.module.scss";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            "wistia-player": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                "media-id"?: string;
                aspect?: string;
            };
        }
    }
}

const Video = () => {
    return (
        <>
            <Script
                src="https://fast.wistia.com/player.js"
                strategy="afterInteractive"
                onLoad={() => {
                    // Script carregado
                }}
            />
            <Script
                src="https://fast.wistia.com/embed/cnlxpa4fd2.js"
                strategy="lazyOnload"
                type="module"
            />
            <section className={S.container} aria-labelledby="video-heading">
                <div className={S.wrapper}>
                    <motion.h2
                        id="video-heading"
                        className={S.srOnly}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        Vídeo de Apresentação do Ágora
                    </motion.h2>
                    <motion.div
                        className={S.videoContainer}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                            duration: 0.6,
                            ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                    >
                        {/* @ts-ignore */}
                        <wistia-player
                            media-id="cnlxpa4fd2"
                            aspect="0.5625"
                            className={S.wistiaPlayer}
                            aria-label="Vídeo de apresentação da mentoria Ágora - Expansão Coletiva"
                        />
                    </motion.div>
                    <motion.div
                        className={S.ctaWrapper}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                            duration: 0.6,
                            ease: [0.25, 0.1, 0.25, 1],
                            delay: 0.2,
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
            </section>
        </>
    );
};

export default Video;
