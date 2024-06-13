import React, { useState } from 'react';
import './extrato.css';
import { FaBox, FaWarehouse, FaTruck, FaExchangeAlt, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { TbSearch } from "react-icons/tb";

function Extrato() {

  return (
    <div className="menu-container">
      <div className="menu-box">
        <div className="profile-container">
          <div className="image-placeholder">
            <FaUser size={60} color="black" /> 
          </div>
          <h1>Jori Almeida</h1>
        </div>
        <div className="button-container">
          <NavLink to="/produtos" activeClassName="active" className="botaoMenu">
            <FaBox size={20} style={{ marginRight: '10px' }} />
            PRODUTOS
          </NavLink>
          <NavLink activeClassName="active" className="botaoMenu">
            <FaWarehouse size={20} style={{ marginRight: '10px' }} />
            DEPOSITOS
          </NavLink>
          <NavLink to="/loja" activeClassName="active" className="botaoSubMenu">
            <FaWarehouse size={20} style={{ marginRight: '10px' }} />
            LOJA
          </NavLink>
          <NavLink to="/estoque" activeClassName="active" className="botaoSubMenu">
            <FaWarehouse size={20} style={{ marginRight: '10px' }} />
            ESTOQUE
          </NavLink>
          <NavLink to="/fornecedores" activeClassName="active" className="botaoMenu">
            <FaTruck size={20} style={{ marginRight: '10px' }} />
            FORNECEDORES
          </NavLink>
          <NavLink to="/movimentacao" activeClassName="active" className="botaoMenuExtrato">
            <FaExchangeAlt size={20} style={{ marginRight: '10px' }} />
            MOVIMENTAÇÃO
          </NavLink>
        </div>
      </div>
      <div className="extrato-box">
        <div className="textoExtrato">
          <h1>EXTRATO</h1>
        </div>
        <div className="extrato-bar">
          <input className="inputBusca" type="text" placeholder="Digite o nome do produto:" />
          <NavLink to="/buscarExtrato" className="botaoCadastroProduto">
            <TbSearch size={35} />
          </NavLink>
        </div>
        <table className="tableExtrato">
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
  );
}

export default Extrato;