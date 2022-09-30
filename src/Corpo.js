import { useState } from "react";
import styled from "styled-components";
import logo from "../src/assets/img/logo.png";
import seta from "../src/assets/img/seta_virar.png";
import play from "../src/assets/img/seta_play.png";
import Footer from "../src/Footer";
import { questoes } from "./questoes";

const perguntas = [
  { numero: " 1" },
  { numero: " 2" },
  { numero: " 3" },
  { numero: " 4" },
  { numero: " 5" },
  { numero: " 6" },
  { numero: " 7" },
  { numero: " 8" },
];

function Perguntas(props) {
  const { numero, imagem } = props;
  const [pergunta, setPergunta] = useState(true);
  const [resposta, setResposta] = useState(true);
  console.log(numero);
  function viraPergunta() {
    setPergunta(false);
  }

  function virarResposta() {
    setResposta(false);
  }

  return pergunta === true ? (
    <PerguntaFechada onClick={() => viraPergunta({ numero })}>
      <h1>Pergunta{numero}</h1> <img src={imagem} alt="play" />
    </PerguntaFechada>
  ) : resposta === true ? (
    <PerguntaAberta onClick={() => virarResposta({ numero })}>
      <p>{questoes[numero - 1].Q}</p> <img src={seta} alt="seta" />
    </PerguntaAberta>
  ) : (
    <PerguntaAberta>
      <p>{questoes[numero - 1].R}</p>
      <ContainerBotoes>
        <button style={{ backgroundColor: "#FF3030" }}>Não lembrei</button>
        <button style={{ backgroundColor: "#FF922E" }}>
          Quase não lembrei
        </button>
        <button style={{ backgroundColor: "#2FBE34" }}>Zap!</button>
      </ContainerBotoes>
    </PerguntaAberta>
  );
}

export default function Corpo() {
  return (
    <>
      <Conteiner>
        <LogoConteiner>
          <img src={logo} alt="logo" />
          <h1>ZapRecall</h1>
        </LogoConteiner>
        {perguntas.map((p, index) => (
          <Perguntas numero={p.numero} imagem={play} key={index} />
        ))}
      </Conteiner>
      <Footer />
    </>
  );
}
const Conteiner = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;

  img {
    width: 52px;
  }
`;
const LogoConteiner = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;

  h1 {
    font-family: "Righteous";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;
    margin-left: 20px;
  }
`;

const PerguntaFechada = styled.button`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
  img {
    width: 20px;
    height: 23px;
  }
`;
const PerguntaAberta = styled.button`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    position: absolute;
    width: 30px;
    height: 20px;
    bottom: 10px;
    right: 10px;
  }
`;
const ContainerBotoes = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 20px;

  button {
    width: 90px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffffff;
    background: ${(props) => props.cor};
    border-radius: 5px;
    border: 1px solid;
    padding: 5px;
  }
`;
