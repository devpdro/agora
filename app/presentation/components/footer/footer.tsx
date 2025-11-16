import S from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={S.footer}>
      <div className={S.inner}>
        <h6 className={S.text}>
          Feito com <span className={S.heart}>❤️</span> por <a href="https://wa.me/?text=Ol%C3%A1%21%20Vim%20pelo%20site%20%C3%81gora%20e%20gostaria%20de%20mais%20informa%C3%A7oes%20sobre%20seus%20servi%C3%A7os" target="_blank" rel="noopener noreferrer">Victor Hugo</a>
        </h6>
      </div>
    </footer>
  );
};

export default Footer;