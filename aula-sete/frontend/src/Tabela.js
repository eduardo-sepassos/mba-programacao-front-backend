import React from "react";
import styled from "styled-components";

const TableContainer = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  margin: 20px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    background: #0d2340;
    color: white;
  }

  th {
    padding: 16px;
    text-align: left;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.5px;
  }

  tbody tr {
    border-bottom: 1px solid #e0e0e0;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #f5f5f5;
    }

    &:last-child {
      border-bottom: none;
    }
  }

  td {
    padding: 14px 16px;
    color: #2c3e50;
    font-size: 14px;
  }
`;

const Tabela = ({ itens }) => {
  return (
    <TableContainer>
      <StyledTable>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Cidade</th>
            <th>Preço do Pacote</th>
            <th>Nome do hotel</th>
          </tr>
        </thead>
        <tbody>
          {itens.map((item) => (
            <tr key={item.id}>
              <td>{item.descricao}</td>
              <td>{item.localidade.descricao}</td>
              <td>R$ {String(item.valor.toFixed(2)).replace(".", ",")}</td>
              <td>
                {item.items
                  .filter((item) => item.nomeHotel)
                  .map((item) => item.nomeHotel)}
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};

export default Tabela;
