import React from 'react';
import './estoque.css';
import { TbSearch } from "react-icons/tb";
import { NavLink } from 'react-router-dom';
import ComponentMenu from "../../components/componentMenu/componentMenu.tsx";
import BuscaProduto from '../../components/BuscaProduto/BuscaProduto.js';

function Estoque() {
  return (
    <ComponentMenu>
      <div className="menu-container">
        <div className="estoque-box">
          <div className="textoEstoque">
            <h1>ESTOQUE</h1>
          </div>
          <div className="estoque-bar">
            <BuscaProduto />
          </div>
          <table className="tableEstoque">
            <thead>
              <tr>
                <th scope="col">Código</th>
                <th scope="col">Produto</th>
                <th scope="col">Quant. Estoque</th>
                <th scope="col">Quant. Mínima</th>
                <th scope="col">Preço Médio</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 10 }, (_, rowIndex) => (
                <tr key={rowIndex}>
                  {Array.from({ length: 5 }, (_, colIndex) => (
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

export default Estoque;