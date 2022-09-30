import styled from "styled-components";

function Botao(props) {
    return (
      <>
        <button nome ={props.nome} style= {{ backgroundColor: `${props.cor}`}}>{props.nome}</button>
      </>
    );
  }

export default function Footer() {
  

  return (
<>  
    <FooterC>
    <p>0/8 CONCLUÍDOS</p>
    </FooterC>

    
</>

  )
}

const FooterC = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
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
