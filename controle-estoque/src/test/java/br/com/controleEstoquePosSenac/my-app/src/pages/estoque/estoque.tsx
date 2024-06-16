import React, { useState } from 'react';
import './estoque.css';
import { FaBox, FaWarehouse, FaTruck, FaExchangeAlt, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { TbSearch } from "react-icons/tb";
import ComponentMenu from "../../components/componentMenu/componentMenu.tsx";


function Estoque() {

  return (
    <ComponentMenu>
      <div className="menu-container">
        <div className="estoque-box">
          <div className="textoEstoque">
            <h1>ESTOQUE</h1>
          </div>
          <div className="estoque-bar">
            <input className="inputBusca" type="text" placeholder="Digite o nome do produto:" />
            <NavLink to="/buscarEstoque" className="botaoCadastroProduto">
              <TbSearch size={35} />
            </NavLink>
          </div>
          <table className="tableEstoque">
            <thead>
              <tr>
                <th>Código</th>
                <th>Produto</th>
                <th>Quant. Estoque</th>
                <th>Quant. Minima</th>
                <th>Preço Médio</th>
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