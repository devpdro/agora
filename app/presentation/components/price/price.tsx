"use client";

import styles from "./price.module.scss";

const Price = () => {
  return (
    <section className={styles.priceSection}>
      <div className={styles.content}>

        <div className={styles.grid}>
          <article className={styles.card}>
            <div className={styles.lightGlow}></div>
            <div className={styles.cardInner}>
              <div className={styles.heading}>Plano Trimestral</div>

              <div className={styles.row}>
                <div className={styles.priceValue}>R$777</div>
                <div className={styles.suffix}>/ 3 meses</div>
              </div>

              <button className={styles.button}>
                GARANTIR MINHA VAGA NO ÁGORA
              </button>

              <ul className={styles.list}>
                <li className={styles.item}>
                  <span className={styles.check}>✓</span> Aulas semanais ao vivo
                </li>
                <li className={styles.item}>
                  <span className={styles.check}>✓</span> Clube do Livro do Campo
                </li>
                <li className={styles.item}>
                  <span className={styles.check}>✓</span> Comunidade exclusiva
                </li>
                <li className={styles.item}>
                  <span className={styles.check}>✓</span> Acesso às IAs do campo
                  (Dreamer, Joe Dispensa, Saint Germain)
                </li>
                <li className={styles.item}>
                  <span className={styles.check}>✓</span> Gravações de todas as aulas
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Price;
