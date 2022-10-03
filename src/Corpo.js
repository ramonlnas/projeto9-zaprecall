import { useState } from "react";
import styled from "styled-components";
import logo from "../src/assets/img/logo.png";
import play from "../src/assets/img/seta_play.png";
import Footer from "../src/Footer";
import Perguntas from "../src/Perguntas"


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


export default function Corpo() {
  const [contador, setContador] = useState(0)
  return (
    <>
      <Conteiner>
        <LogoConteiner>
          <img src={logo} alt="logo" />
          <h1>ZapRecall</h1>
        </LogoConteiner>
        {perguntas.map((p, index) => (
          <Perguntas contador={contador} setContador = {setContador} numero={p.numero} imagem={play} key={index} />
        ))}
      </Conteiner>
      <Footer contador = {contador} setContador={setContador} />
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

  
`;
const LogoConteiner = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;

  img {
    width: 52px;
  }
  
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

