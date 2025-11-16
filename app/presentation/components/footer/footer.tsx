import React from "react";
import S from "./footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={S.footer}>
      <div className={S.inner}>
        <span className={S.text}>
          Feito com <span className={S.heart}>❤️</span> por Vitor Lousa
        </span>
      </div>
    </footer>
  );
};

export default Footer;