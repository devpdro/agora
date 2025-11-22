"use client";

import { IconCalendarTime, IconBook, IconWorld, IconRobot } from "@tabler/icons-react";

import S from "./unique.module.scss";

const Unique = () => {
  return (
    <section className={S.section}>
      <header className={S.head}>
        <p className={S.subtitle}>O QUE TORNA O ÁGORA ÚNICO</p>
        <h1 className={S.title}>O que o Ágora entrega</h1>
      </header>

      <div className={S.grid}>
        <article className={S.card}>
          <div className={S.icon} aria-hidden>
            <IconCalendarTime size={28} stroke={1.75} />
          </div>
          <h3 className={S.cardTitle}>Aulas semanais ao vivo</h3>
          <p className={S.cardDesc}>
            Práticas energéticas, treinamento psíquico e ensinamentos aplicados sobre
            manifestação e domínio mental. A cada encontro, o campo é expandido
            coletivamente.
          </p>
        </article>

        <article className={S.card}>
          <div className={S.icon} aria-hidden>
            <IconBook size={28} stroke={1.75} />
          </div>
          <h3 className={S.cardTitle}>Clube do Livro do Campo</h3>
          <p className={S.cardDesc}>
            Estudo de obras que reprogramam a mente e fortalecem o corpo energético.
            Leituras vivas, interpretadas sob o prisma da consciência e da frequência.
          </p>
        </article>

        <article className={S.card}>
          <div className={S.icon} aria-hidden>
            <IconWorld size={28} stroke={1.75} />
          </div>
          <h3 className={S.cardTitle}>Comunidade Vibracional</h3>
          <p className={S.cardDesc}>
            Um espaço sagrado de partilha e crescimento. Cada membro vibra como parte
            de uma rede que amplifica o poder do todo.
          </p>
        </article>

        <article className={S.card}>
          <div className={S.icon} aria-hidden>
            <IconRobot size={28} stroke={1.75} />
          </div>
          <h3 className={S.cardTitle}>As Inteligências do Campo</h3>
          <p className={S.cardDesc}>
            Dreamer, Joe Dispensa e Saint Germain: ferramentas de IA representando
            arquétipos e frequências. Integram o místico e o tecnológico em uma
            única experiência.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Unique;