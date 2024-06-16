import React, { useState } from 'react';
import './produtos.css';
import { TbShoppingBagPlus, TbShoppingBagEdit, TbShoppingBagMinus, TbShoppingBagExclamation, TbSearch } from "react-icons/tb";
import { NavLink } from 'react-router-dom';
import ComponentMenu from "../../components/componentMenu/componentMenu.tsx";
import BuscaProduto from '../../components/BuscaProduto/BuscaProduto.js';
import BuscaFornecedor from '../../components/BuscaFornecedor/BuscaFornecedor.js';

function Produto() {

  return (
    <ComponentMenu>
      <div className="menu-container">
        <div className="produtos-box">
          <div className="textoProduto">
            <h1>PRODUTOS</h1>
          </div>
          <div className="produto-bar">
            <BuscaFornecedor />
          </div>
          <div className="produtoFornecedor-bar">
            <BuscaProduto />
          </div>
          <table className="tableProdutos">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Descrição</th>
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
              <NavLink to="/reposicaoProdutos" activeClassName="active" className="botaoCadastroProduto" aria-label="Reposição de produtos">
                <TbShoppingBagExclamation size={45} />
              </NavLink>
            </div>
            <div className="boxBotaoCadastro">
            <NavLink to="/cadastroProdutos" activeClassName="active" className="botaoCadastroProduto" aria-label="Cadastrar fornecedor">
                <TbShoppingBagPlus size={45} aria-hidden="true" />
              </NavLink>
              <NavLink to="/editarProdutos" activeClassName="active" className="botaoCadastroProduto" aria-label="Editar fornecedor">
                <TbShoppingBagEdit size={45} aria-hidden="true" />
              </NavLink>
              <NavLink to="/excluirProduto" activeClassName="active" className="botaoCadastroProduto" aria-label="Excluir fornecedor">
                <TbShoppingBagMinus size={45} aria-hidden="true" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </ComponentMenu>
  );
}

export default Produto;