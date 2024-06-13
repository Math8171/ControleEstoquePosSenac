import React, { useState } from 'react';
import './menu.css';
import { FaBox, FaWarehouse, FaTruck, FaExchangeAlt, FaHistory, FaSearch, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function Menu() {

    const MenuComSubmenus = () => {
        const [showSubmenus, setShowSubmenus] = useState(false);

        const toggleSubmenus = () => {
            setShowSubmenus(!showSubmenus);
        };
    }

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
                    <NavLink to="/depositos" activeClassName="active" className="botaoMenu">
                        <FaWarehouse size={20} style={{ marginRight: '10px' }} />
                        ESTOQUE
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
                <h1>BEM VINDO</h1>

            </div>
        </div>
    );
}

export default Menu;