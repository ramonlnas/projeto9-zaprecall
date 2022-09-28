import styled from "styled-components";
import logo from "../src/assets/img/logo.png";
import play from "../src/assets/img/seta_play.png"
import Footer from "../src/Footer"



export default function Corpo() {
  return (
    <>
      <Conteiner>
        <LogoConteiner>
          <img src={logo} alt="logo" />
          <h1>ZapRecall</h1>
        </LogoConteiner>
        <PerguntaFechada>
            <p>Pergunta 1</p>
            <img src={play} alt = "play" />
        </PerguntaFechada>
        <PerguntaFechada>
            <p>Pergunta 2</p>
            <img src={play} alt = "play" />
        </PerguntaFechada>
        <PerguntaFechada>
            <p>Pergunta 3</p>
            <img src={play} alt = "play" />
        </PerguntaFechada>
        <PerguntaFechada>
            <p>Pergunta 4</p>
            <img src={play} alt = "play" />
        </PerguntaFechada>

        
      </Conteiner>
      <Footer/>
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

const PerguntaFechada = styled.div`
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
    font-family: 'Recursive';
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
