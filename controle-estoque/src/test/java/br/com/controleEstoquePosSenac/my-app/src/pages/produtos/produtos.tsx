import React, { useState } from 'react';
import './produtos.css';
import { TbShoppingBagPlus, TbShoppingBagEdit, TbShoppingBagMinus, TbShoppingBagExclamation, TbSearch } from "react-icons/tb";
import { NavLink } from 'react-router-dom';
import ComponentMenu from "../../components/componentMenu/componentMenu.tsx";

function Produto() {

  return (
    <ComponentMenu>
      <div className="menu-container">
        <div className="produtos-box">
          <div className="textoProduto">
            <h1>PRODUTOS</h1>
          </div>
          <div className="produto-bar">
            <input className="inputBusca" type="text" placeholder="Digite o nome do produto:" />
            <NavLink to="/buscarProduto" className="botaoCadastroProduto">
              <TbSearch size={35} />
            </NavLink>
          </div>
          <div className="produtoFornecedor-bar">
            <input className="inputBusca" type="text" placeholder="Digite o nome do fornecedor:" />
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
              <NavLink to="/reposicaoProdutos" activeClassName="active" className="botaoCadastroProduto">
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
    </ComponentMenu>
  );
}

export default Produto;