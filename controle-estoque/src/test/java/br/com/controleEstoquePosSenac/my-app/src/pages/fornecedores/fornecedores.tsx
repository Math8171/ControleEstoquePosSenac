import React, { useState } from 'react';
import './fornecedores.css';
import { FaBox, FaWarehouse, FaTruck, FaExchangeAlt, FaHistory, FaSearch, FaUser } from 'react-icons/fa';
import { TbShoppingBagPlus, TbShoppingBagEdit, TbShoppingBagMinus, TbShoppingBagExclamation, TbSearch } from "react-icons/tb";
import { NavLink } from 'react-router-dom';
import ComponentMenu from "../../components/componentMenu/componentMenu.tsx";

function Fornecedores() {

  return (
    <ComponentMenu>
      <div className="menu-container">
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
    </ComponentMenu>
  );
}

export default Fornecedores;