import React from "react";
import S from "./video.module.scss";

const VideoSection: React.FC = () => {
  return (
    <section className={S.container}>
      <div className={S.section}>
        <div className={S.content}>
          <div className={S.text}>
            <h2 className={S.title}>Assista nosso vídeo demonstrativo</h2>
            <p className={S.subtitle}>Veja detalhadamente como o Kowalski funciona.</p>
          </div>
          <div className={S.anchor} aria-hidden />
        </div>

        <div className={S.card}>
          <div className={S.phone}>
            <div className={S.bar}>
              <span className={S.dot} />
              <span className={S.dot} />
              <span className={S.dot} />
            </div>
            <div className={S.frame}>
              <button className={S.play} aria-label="Reproduzir vídeo">
                <span className={S.icon} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

