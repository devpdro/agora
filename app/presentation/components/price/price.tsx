"use client";

import React from "react";
import styles from "./price.module.scss";

const PriceSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.beams} />
      <div className={styles.stars} />

      <div className={styles.wrap}>
        <h2 className={styles.title}>
          Participe da escola que vai transformar a sua vida.
        </h2>
        <p className={styles.subtitle}>
          Quanto você estaria disposto a investir para estar no controle do seu destino?
        </p>

        <div className={styles.spacer} />

        <div className={styles.grid}>
          {/* Plano Mensal */}
          <div className={styles.card}>
            <div className={styles.cardTitle}>Plano Mensal</div>
            <div className={styles.priceRow}>
              <div className={styles.price}>R$297</div>
              <div className={styles.suffix}>/ Mensais</div>
            </div>
            <button className={styles.button}>Faça parte da Fonte</button>
            <ul className={styles.list}>
              <li className={styles.item}><span className={styles.check}>✔️</span> Acesso ao módulo de meditações</li>
              <li className={styles.item}><span className={styles.check}>✔️</span> Acesso ao módulo Energia Vital</li>
              <li className={styles.item}><span className={styles.check}>✔️</span> Comunidade exclusiva no WhatsApp</li>
            </ul>
          </div>

          {/* Plano Anual */}
          <div className={styles.card}>
            <div className={styles.cardTitle}>Plano Anual</div>
            <div className={styles.priceRow}>
              <div className={styles.price}>R$444</div>
              <div className={styles.suffix}>/ Anuais</div>
            </div>
            <button className={styles.button}>Faça parte da Fonte</button>
            <ul className={styles.list}>
              <li className={styles.item}><span className={styles.check}>✔️</span> Acesso ao curso RPM</li>
              <li className={styles.item}><span className={styles.check}>✔️</span> Acesso ao módulo de meditações</li>
              <li className={styles.item}><span className={styles.check}>✔️</span> Acesso ao módulo Energia Vital</li>
              <li className={styles.item}><span className={styles.check}>✔️</span> Comunidade exclusiva no WhatsApp</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;