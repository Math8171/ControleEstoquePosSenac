import React, { useState } from 'react';
import './fornecedores.css';
import { FaBox, FaWarehouse, FaTruck, FaExchangeAlt, FaHistory, FaSearch, FaUser } from 'react-icons/fa';
import { TbShoppingBagPlus, TbShoppingBagEdit, TbShoppingBagMinus, TbShoppingBagExclamation, TbSearch } from "react-icons/tb";
import { NavLink } from 'react-router-dom';

function Fornecedores() {

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
          <NavLink to="/fornecedores" activeClassName="active" className="botaoMenuFornecedores">
            <FaTruck size={20} style={{ marginRight: '10px' }} />
            FORNECEDORES
          </NavLink>
          <NavLink to="/movimentacao" activeClassName="active" className="botaoMenu">
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
      <div className="forncedor-box">
        <div className="textoFornecedor">
          <h1>FORNECEDORES</h1>
        </div>
        <div className="forncedor-bar">
          <input className="inputBuscaFornecedor" type="text" placeholder="Digite o nome do fornecedor:" />
          <NavLink to="/buscarProduto" className="botaoCadastroProduto">
            <TbSearch size={35} />
          </NavLink>
        </div>
        <table className="tableFornecedores">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Telefone</th>
              <th>E-mail</th>
              <th>CNPJ</th>
              <th>Endereco</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }, (_, rowIndex) => (
              <tr key={rowIndex}>
                {Array.from({ length: 6 }, (_, colIndex) => (
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

          </div>
          <div className="boxBotaoFornecedores">
            <NavLink to="/cadastroFornecedores" activeClassName="active" className="botaoFornecedores">
              <TbShoppingBagPlus size={45} />
            </NavLink>
            <NavLink to="/editarFornecedores" activeClassName="active" className="botaoFornecedores">
              <TbShoppingBagEdit size={45} />
            </NavLink>
            <NavLink to="/excluirProduto" activeClassName="active" className="botaoFornecedores">
              <TbShoppingBagMinus size={45} />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fornecedores;