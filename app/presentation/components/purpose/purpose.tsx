"use client";

import React from "react";
import styles from "./purpose.module.scss";

const PurposeSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.stars} />
      <div className={styles.wrap}>
        <div className={styles.card}>
          <div className={styles.orb}>✶</div>
          <h2 className={styles.title}>O <em>Manifesto</em> da Fonte</h2>

          <div className={styles.image} aria-label="Imagem cósmica placeholder" />

          <div className={styles.text}>
            <p>Nós somos aqueles que ousam beber da origem.</p>
            <p>A Fonte não é um curso, nem uma mentoria, nem um simples lugar de passagem. É um portal para o real, uma fenda no tecido da ilusão. Ela nasce do inconformismo com a superfície, da fome por essência, do cansaço de repetir histórias herdadas. É um chamado àqueles que não suportam mais ser personagens mal escritos dentro de narrativas frágeis.</p>
            <p>Aqui, não buscamos agradar, buscamos despertar. Não aplaudimos máscaras — arrancamos. Não curamos sintomas — dissolvemos raízes. Não vendemos promessas — provocamos lembranças do que você já é.</p>
            <p>A Fonte é o espelho sem piedade. É onde você verá o que o amor foi, além da persona que te restringe. É onde o silêncio canta e o mistério respira. É onde cada gesto se torna sagrado.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;