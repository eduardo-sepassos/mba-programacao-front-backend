import { useState } from "react";
import styled from "styled-components";
import Button from "./Button.js";
import Pacotes from "./Pacotes.js";

const Container = styled.div`
  font-family: system-ui, sans-serif;
  background: #f5f0e8;
  color: #0d2340;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;

export const Header = styled.header`
  background: #0d2340;
  padding: 5px;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
`;

export const NavLink = styled.a`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  padding: 20px;
  border-radius: 4px;

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
  }
`;
const Controls = styled.div`
  margin-bottom: 30px;
`;
const Title = styled.div`
  text-align: start;
  padding-left: 20px;
`;

function App() {
  const [dados, setData] = useState([]);

  return (
    <Container>
      <Header>
        <nav>
          <NavList>
            <li>
              <NavLink href="#">Home</NavLink>
            </li>
            <li>
              <NavLink href="#">Pacotes</NavLink>
            </li>
          </NavList>
        </nav>
      </Header>
      <Title>
        <h1>Pacotes</h1>
      </Title>

      <Pacotes dados={dados} />
      <Controls>
        <Button setData={setData} />
      </Controls>
    </Container>
  );
}

export default App;
