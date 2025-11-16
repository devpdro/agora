"use client";

import React, { useState } from "react";
import S from "./faq.module.scss";

type FaqItem = {
  question: string;
  answer: string;
};

const ITEMS: FaqItem[] = [
  {
    question:
      "Meu acesso à área de membros não chegou por e-mail, o que devo fazer?",
    answer:
      "Nesse caso, você deverá entrar em contato com nosso suporte via WhatsApp ou e-mail, informando, na solicitação, seu e-mail utilizado para fazer a compra.",
  },
  {
    question: "Como faço para acessar o grupo no WhatsApp e o Discord?",
    answer:
      "Após a confirmação do pagamento, você receberá instruções com os links oficiais. Caso não localize o e-mail, acione o suporte para reenvio.",
  },
  {
    question: "Como faço para acessar a área de membros?",
    answer:
      "Você pode acessar utilizando o e-mail cadastrado no momento da compra. Em caso de dificuldades, solicite redefinição de senha ou suporte.",
  },
  {
    question: "Como faço para utilizar o Kowalski?",
    answer:
      "O Kowalski estará disponível dentro da área de membros. Siga o passo a passo do onboarding e, se precisar, consulte os tutoriais exclusivos.",
  },
];

const Chevron = ({ open }: { open: boolean }) => (
  <svg
    className={`${S.chevron} ${open ? S.chevronOpen : ""}`}
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M6 9l6 6 6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Item: React.FC<FaqItem> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <article className={`${S.card} ${open ? S.open : ""}`}>
      <button
        className={S.header}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={question}
      >
        <Chevron open={open} />
        <span className={S.question}>{question}</span>
      </button>
      <div
        id={question}
        role="region"
        aria-hidden={!open}
        className={S.panel}
      >
        <p className={S.answer}>{answer}</p>
      </div>
    </article>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className={S.wrapper}>
      {ITEMS.map((it, idx) => (
        <Item key={idx} question={it.question} answer={it.answer} />
      ))}
    </section>
  );
};

export default FAQ;