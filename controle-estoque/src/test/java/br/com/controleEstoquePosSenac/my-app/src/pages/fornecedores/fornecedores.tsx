import React from 'react';
import './fornecedores.css';
import { TbShoppingBagPlus, TbShoppingBagEdit, TbShoppingBagMinus, TbSearch } from "react-icons/tb";
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
            <input className="inputBuscaFornecedor" type="text" placeholder="Digite o nome do fornecedor:" aria-label="Pesquisar fornecedor" />
            <NavLink to="/buscarProduto" className="botaoCadastroProduto" aria-label="Buscar fornecedor">
              <TbSearch size={35} aria-hidden="true" />
            </NavLink>
          </div>
          <table className="tableFornecedores">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Telefone</th>
                <th scope="col">E-mail</th>
                <th scope="col">CNPJ</th>
                <th scope="col">Endereço</th>
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
              <NavLink to="/cadastroFornecedores" activeClassName="active" className="botaoFornecedores" aria-label="Cadastrar fornecedor">
                <TbShoppingBagPlus size={45} aria-hidden="true" />
              </NavLink>
              <NavLink to="/editarFornecedores" activeClassName="active" className="botaoFornecedores" aria-label="Editar fornecedor">
                <TbShoppingBagEdit size={45} aria-hidden="true" />
              </NavLink>
              <NavLink to="/excluirProduto" activeClassName="active" className="botaoFornecedores" aria-label="Excluir fornecedor">
                <TbShoppingBagMinus size={45} aria-hidden="true" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </ComponentMenu>
  );
}

export default Fornecedores;