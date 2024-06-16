import React, { useState, ReactNode } from 'react';
import { FaBox, FaWarehouse, FaTruck, FaExchangeAlt, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './componentMenu.css';

interface MenuProps {
  children: ReactNode;
}

const ComponentMenu: React.FC<MenuProps> = ({ children }) => {
  const [showSubmenus, setShowSubmenus] = useState(false);

  const toggleSubmenus = () => {
    setShowSubmenus(!showSubmenus);
  };

  return (
    <div className="menu-wrapper">
      <div className="menu-sidebar">
        <div className="profile-section">
          <div className="avatar-placeholder">
            <FaUser size={60} color="black" />
          </div>
          <h1>Administrador</h1>
        </div>
        <div className="menu-buttons">
          <NavLink to="/produtos" activeClassName="active" className="main-button">
            <FaBox size={20} style={{ marginRight: '10px' }} />
            PRODUTOS
          </NavLink>
          <button className="main-button" onClick={toggleSubmenus}>
            <FaWarehouse size={20} style={{ marginRight: '10px' }} />
            DEPOSITOS
          </button>
          {showSubmenus && (
            <div className="submenu-container">
              <NavLink to="/loja" activeClassName="active" className="submenu-button">
                <FaWarehouse size={20} style={{ marginRight: '10px' }} />
                LOJA
              </NavLink>
              <NavLink to="/estoque" activeClassName="active" className="submenu-button">
                <FaWarehouse size={20} style={{ marginRight: '10px' }} />
                ESTOQUE
              </NavLink>
            </div>
          )}
          <NavLink to="/fornecedores" activeClassName="active" className="main-button">
            <FaTruck size={20} style={{ marginRight: '10px' }} />
            FORNECEDORES
          </NavLink>
          <NavLink to="/movimentacao" activeClassName="active" className="main-button">
            <FaExchangeAlt size={20} style={{ marginRight: '10px' }} />
            MOVIMENTAÇÃO
          </NavLink>
        </div>
      </div>
      <div className="content-section">
        {children}
      </div>
    </div>
  );
};

export default ComponentMenu;