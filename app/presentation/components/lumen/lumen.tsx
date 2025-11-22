"use client";

import S from "./lumen.module.scss";

const Lumen = () => {
  return (
    <section className={S.wrapper}>
      <div className={S.card}>
        <div className={S["light-layer"]}>
          <div className={S.slit}></div>

          <div className={S.lumen}>
            <div className={S.min}></div>
            <div className={S.mid}></div>
            <div className={S.hi}></div>
          </div>

          <div className={S.darken}>
            <div className={S.sl}></div>
            <div className={S.ll}></div>
            <div className={S.slt}></div>
            <div className={S.srt}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lumen;
