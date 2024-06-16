import React from 'react';
import './loja.css';
import { TbSearch } from "react-icons/tb";
import { NavLink } from 'react-router-dom';
import ComponentMenu from "../../components/componentMenu/componentMenu.tsx";
import BuscaProduto from '../../components/BuscaProduto/BuscaProduto.js';

function Loja() {
  return (
    <ComponentMenu>
      <div className="menu-container">
        <div className="loja-box">
          <div className="textoLoja">
            <h1>LOJA</h1>
          </div>
          <div className="loja-bar">
            <BuscaProduto />
          </div>
          <table className="tableLoja">
            <thead>
              <tr>
                <th scope="col">Código</th>
                <th scope="col">Produto</th>
                <th scope="col">Quantidade em Estoque</th>
                <th scope="col">Quantidade Mínima</th>
                <th scope="col">Valor Total</th>
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

export default Loja;