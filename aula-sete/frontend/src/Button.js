import styled from "styled-components";
import { loadPacotes } from "./stub.js";

const InnerButton = styled.button`
  background: #2ab6c8;
  color: #fff;
  font-family: inherit;
  font-size: 15px;
  font-weight: 600;
  padding: 10px 15px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 20px;
  margin-left: 40px;
`;

function Button(props) {
  const { setData } = props;
  const onClick = async () => {
    const data = await loadPacotes();
    setData(data);
  };

  return <InnerButton onClick={onClick}>Carregar</InnerButton>;
}

export default Button;
