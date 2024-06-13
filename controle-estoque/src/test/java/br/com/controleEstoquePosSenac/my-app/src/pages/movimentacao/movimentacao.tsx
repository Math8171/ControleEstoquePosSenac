import React, { useState } from 'react';
import './movimentacao.css';
import { FaBox, FaWarehouse, FaTruck, FaExchangeAlt, FaHistory, FaSearch, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { TbShoppingBagPlus, TbShoppingBagEdit, TbShoppingBagMinus, TbShoppingBagExclamation, TbSearch } from "react-icons/tb";

function Movimentacao() {

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
          <NavLink to="/estoque" activeClassName="active" className="botaoMenu">
            <FaWarehouse size={20} style={{ marginRight: '10px' }} />
            ESTOQUE
          </NavLink>
          <NavLink to="/fornecedores" activeClassName="active" className="botaoMenu">
            <FaTruck size={20} style={{ marginRight: '10px' }} />
            FORNECEDORES
          </NavLink>
          <NavLink to="/movimentacao" activeClassName="active" className="botaoMenuMovimentacao">
            <FaExchangeAlt size={20} style={{ marginRight: '10px' }} />
            MOVIMENTAÇÃO
          </NavLink>
          <NavLink to="/extrato" activeClassName="active" className="botaoMenu">
            <FaHistory size={20} style={{ marginRight: '10px' }} />
            EXTRATO
          </NavLink>
          <NavLink to="/consultas" activeClassName="active" className="botaoMenu">
            <FaSearch size={20} style={{ marginRight: '10px' }} />
            CONSULTAS
          </NavLink>
        </div>
      </div>
      <div className="movimentacao-box">
        <div className="movimentacaoEstoque">
          <h1>MOVIMENTAÇÃO</h1>
        </div>
        <div className="movimentacao-bar">
          <input className="inputBusca" type="text" placeholder="Digite o nome do produto:" />
          <NavLink to="/buscarMovimentacao" className="botaoCadastroProduto">
            <TbSearch size={35} />
          </NavLink>
        </div>
        <table className="tableMovimentacao">
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
        <div className="iconesCrud">
          <div>
            <NavLink to="/pontoReposicao" activeClassName="active" className="botaoCadastroMovimentacao">
              <TbShoppingBagExclamation size={45} />
            </NavLink>
          </div>
          <div className="boxBotaoMovimentacao">
            <NavLink to="/cadastroMovimentacao" activeClassName="active" className="botaoCadastroMovimentacao">
              <TbShoppingBagPlus size={45} />
            </NavLink>
            <NavLink to="/editarMovimentacao" activeClassName="active" className="botaoCadastroMovimentacao">
              <TbShoppingBagEdit size={45} />
            </NavLink>
            <NavLink to="/excluirMovimentacao" activeClassName="active" className="botaoCadastroMovimentacao">
              <TbShoppingBagMinus size={45} />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movimentacao;