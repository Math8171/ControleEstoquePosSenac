import React, { useState} from 'react';
import './produtos.css';
import { FaBox, FaWarehouse, FaTruck, FaExchangeAlt, FaHistory, FaSearch, FaUser } from 'react-icons/fa';
import { TbShoppingBagPlus, TbShoppingBagEdit, TbShoppingBagMinus, TbShoppingBagExclamation, TbSearch } from "react-icons/tb";
import { NavLink} from 'react-router-dom';

function Produto() {

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
          <NavLink to="/produtos" activeClassName="active" className="botaoMenuProduto">
            <FaBox size={20} style={{ marginRight: '10px' }} />
            PRODUTOS
          </NavLink>
          <NavLink to="/depositos" activeClassName="active" className="botaoMenu">
            <FaWarehouse size={20} style={{ marginRight: '10px' }} />
            ESTOQUE
          </NavLink>
          <NavLink to="/fornecedores" activeClassName="active" className="botaoMenu">
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
      <div className="produtos-box">
        <div className="textoProduto">
          <h1>PRODUTOS</h1>
        </div>
        <div className="search-bar">
          <input className="inputBusca" type="text" placeholder="Digite o nome do produto:" />
          <NavLink to="/buscarProduto" className="botaoCadastroProduto">
            <TbSearch size={35} />
          </NavLink>
        </div>
        <table className="tableProdutos">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Descricao</th>
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
        <div className="iconesCrud">
          <div>
            <NavLink to="/pontoReposicao" activeClassName="active" className="botaoCadastroProduto">
              <TbShoppingBagExclamation size={45} />
            </NavLink>
          </div>
          <div className="boxBotaoCadastro">
            <NavLink to="/cadastroProdutos" activeClassName="active" className="botaoCadastroProduto">
              <TbShoppingBagPlus size={45} />
            </NavLink>
            <NavLink to="/editarProdutos" activeClassName="active" className="botaoCadastroProduto">
              <TbShoppingBagEdit size={45} />
            </NavLink>
            <NavLink to="/excluirProduto" activeClassName="active" className="botaoCadastroProduto">
              <TbShoppingBagMinus size={45} />
            </NavLink>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Produto;