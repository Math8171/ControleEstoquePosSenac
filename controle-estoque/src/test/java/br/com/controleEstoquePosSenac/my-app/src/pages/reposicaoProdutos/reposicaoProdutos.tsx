import React, { useState } from 'react';
import './reposicaoProdutos.css';
import ComponentMenu from "../../components/componentMenu/componentMenu.tsx";
import BuscaProduto from '../../components/BuscaProduto/BuscaProduto.js';

function ReposicaoProduto() {

  return (
    <ComponentMenu>
      <div className="menu-container">
        <div className="produtos-box">
          <div className="textoProduto">
            <h1>PRODUTOS EM REPOSIÇÃO</h1>
          </div>
          <div className="search-bar">
            <BuscaProduto />
          </div>
          <table className="tableProdutos">
            <thead>
              <tr>
                <th>ID</th>
                <th>Produto</th>
                <th>Quantidade</th>
                <th>Fornecedor</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 10 }, (_, rowIndex) => (
                <tr key={rowIndex}>
                  {Array.from({ length: 4 }, (_, colIndex) => (
                    <td key={colIndex}>
                      Celula {rowIndex + 1}-{colIndex + 1}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </ComponentMenu>
  );
}

export default ReposicaoProduto;