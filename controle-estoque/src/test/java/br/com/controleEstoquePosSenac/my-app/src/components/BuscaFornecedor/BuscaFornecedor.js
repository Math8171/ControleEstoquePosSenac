import React from 'react';
import { NavLink } from 'react-router-dom';
import { TbSearch } from "react-icons/tb";
import './BuscaFornecedor.css';

const BuscaFornecedor = () => {
  return (
    <div className = "buscaForncedor-bar">
      <label htmlFor="inputBuscaFornecedor" className="visually-hidden">Digite o nome do fornecedor:</label>
      <label className="componentFornecedorInputWrapper">
        <input id="inputBuscaFornecedor" className="inputBusca" type="text" placeholder="Digite o nome do fornecedor:" />
        <NavLink to="/buscarFornecedor" className="componentBotaoCadastroFornecedor" aria-label="Buscar fornecedor">
          <TbSearch size={25} />
        </NavLink>
      </label>
    </div>
  );
}

export default BuscaFornecedor;