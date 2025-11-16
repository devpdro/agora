import React from "react";
import S from "./proof.module.scss";

type Message = {
  text: string;
  size?: "s" | "m" | "l" | "tall" | "wide";
};

const MESSAGES: Message[] = [
  { text: "Felipe, meu amigo, ainda estou no segundo vídeo da comunidade e já explodiu minha mente! 👏👏 Gratidão!", size: "m" },
  { text: "Nossa, está brabo mesmo... as aulas são incríveis, tem um por a mão na massa, é um trabalho de todos os dias. 💫🙏", size: "s" },
  { text: "A vida me deu um chamado e a oportunidade de me conectar com a verdadeira fonte da vida. Hoje sinto outra pessoa. ✨", size: "tall" },
  { text: "Eu tô amando cada aula! Já assisti duas vezes e estou fazendo as meditações 🧘‍♀️", size: "s" },
  { text: "Depois que entrei na Fonte estou muito mais centrado e presente ❤️", size: "m" },
  { text: "A comunidade é incrível! Tem mudado minha vida dia após dia 🙏", size: "wide" },
  { text: "Primeiramente, gratidão pela entrega. Simplicidade e profundidade juntas. Esse campo é vivo. 🌟", size: "m" },
  { text: "Sinto clareza mental e emocional como nunca. A cada encontro, tudo se organiza. 🔥", size: "l" },
  { text: "Estou me sentindo em paz com as minhas questões. Seu trabalho é divino 🙌", size: "s" },
];

const ProofSection: React.FC = () => {
  return (
    <section className={S.section}>
      <div className={S.container}>
        <h2 className={S.title}>Veja o que os alunos da Fonte estão dizendo…</h2>

        <div className={S.grid}>
          {MESSAGES.map((m, i) => (
            <div key={i} className={`${S.card} ${m.size ? S[m.size] : ""}`}>
              <p className={S.text}>{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofSection;