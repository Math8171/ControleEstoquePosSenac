import React from 'react';
import { NavLink } from 'react-router-dom';
import { TbSearch } from "react-icons/tb";
import './BuscaProduto.css';

const BuscaProduto = () => {
  return (
    <div>
      <label htmlFor="inputBuscaProduto" className="visually-hidden">Digite o nome do produto:</label>
      <label className="componentInputWrapper">
        <input id="inputBuscaProduto" className="inputBusca" type="text" placeholder="Digite o nome do produto:" />
        <NavLink to="/buscarProduto" className="componentBotaoBuscaProduto" aria-label="Buscar produto">
          <TbSearch size={25} />
        </NavLink>
      </label>
    </div>
  );
}

export default BuscaProduto;