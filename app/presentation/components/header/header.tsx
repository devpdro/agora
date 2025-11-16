import S from "./header.module.scss";

const Header = () => {
  return (
    <section className={S.header}>
      <div className={S.content}>
        <h1 className={S.title}>
          O campo onde você <br /> transforma a <span className={S.italic}>realidade</span>
        </h1>
        <p className={S.subtitle}>
          Ágora é uma mentoria em grupo e um campo vivo de expansão coletiva.
          Um espaço onde consciência, energia e tecnologia se unem para transformar presença em poder criativo.            <br />
          com um objetivo em comum: te ajudar a faturar com solidez e consistência.
        </p>
        <div className={S.actions}>
          <button className={S.button}>ENTRAR NO CAMPO AGORA</button>
          <div className={S.proof}>
            <div className={S.avatars}>
              <span className={`${S.avatar} ${S.a1}`} />
              <span className={`${S.avatar} ${S.a2}`} />
              <span className={`${S.avatar} ${S.a3}`} />
              <span className={`${S.avatar} ${S.a4}`} />
              <span className={`${S.avatar} ${S.a5}`} />
            </div>
            <span className={S.members}>+200 ALUNOS TRANSFORMADOS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;