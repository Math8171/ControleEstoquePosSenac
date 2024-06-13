import React, { useState } from 'react';
import './consulta.css';
import { FaBox, FaWarehouse, FaTruck, FaExchangeAlt, FaHistory, FaSearch, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function Consulta() {

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
      <div className="segunda-box">
        <h1>CONSULTA</h1>
      </div>
    </div>
  );
}

export default Consulta;