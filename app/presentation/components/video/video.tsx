import React from "react";
import S from "./video.module.scss";

const VideoSection: React.FC = () => {
  return (
    <section className={S.section}>
      <div className={S.inner}>
        <div className={S.textCol}>
          <h2 className={S.title}>Assista nosso vídeo demonstrativo</h2>
          <p className={S.subtitle}>Veja detalhadamente como o Kowalski funciona.</p>
        </div>
        {/* âncora visual para posicionamento do card à direita */}
        <div className={S.rightAnchor} aria-hidden />
      </div>

      {/* Card vertical 9:16 flutuante que transborda a altura da section */}
      <div className={S.floatCard}>
        <div className={S.phoneBody}>
          <div className={S.phoneHeader}>
            <span className={S.dot} />
            <span className={S.dot} />
            <span className={S.dot} />
          </div>
          <div className={S.videoFrame}>
            <button className={S.play} aria-label="Reproduzir vídeo">
              <span className={S.playIcon} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

