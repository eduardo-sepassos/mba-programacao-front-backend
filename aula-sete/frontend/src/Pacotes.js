import styled from "styled-components";
import Tabela from "./Tabela.js";

const Message = styled.p`
  padding-left: 20px;
`;

function Pacotes(props) {
  const { dados } = props;

  if (dados.length === 0) {
    return <></>;
  } else {
    return (
      <>
        <Message>{dados.length} pacotes carregados</Message>

        <Tabela itens={dados}></Tabela>
      </>
    );
  }
}

export default Pacotes;
