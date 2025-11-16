import React from "react";

import S from "./header.module.scss";

const Header: React.FC = () => {
  return (
    <section className={S.container}>
      <div className={S.hero}>
        <div className={S.bg} aria-hidden />
        <div className={S.content}>
          <h1 className={S.title}>
            <span>Clube privado para players</span>
            <span>do mercado digital</span>
          </h1>
          <p className={S.subtitle}>
            A OFFLINE CLUB reúne players de múltiplos 7 dígitos de marketing do Brasil inteiro
            <br />
            com um objetivo em comum: te ajudar a faturar com solidez e consistência.
          </p>
          <div className={S.actionRow}>
            <button className={S.ctaButton}>COMEÇAR AGORA</button>
            <div className={S.socialProof}>
              <div className={S.avatars}>
                <span className={`${S.avatar} ${S.a1}`} />
                <span className={`${S.avatar} ${S.a2}`} />
                <span className={`${S.avatar} ${S.a3}`} />
                <span className={`${S.avatar} ${S.a4}`} />
                <span className={`${S.avatar} ${S.a5}`} />
              </div>
              <span className={S.members}>+200 MEMBROS ATIVOS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;