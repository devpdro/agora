import S from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={S.footer}>
      <div className={S.inner}>
        <h6 className={S.text}>
          Feito com <span className={S.heart}>❤️</span> por Victor Hugo
        </h6>
      </div>
    </footer>
  );
};

export default Footer;