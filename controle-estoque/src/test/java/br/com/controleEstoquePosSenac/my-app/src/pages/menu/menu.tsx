import React, { useState } from 'react';
import './menu.css';
import { FaBox, FaWarehouse, FaTruck, FaExchangeAlt, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import ComponentMenu from "../../components/componentMenu/componentMenu.tsx";

function Menu() {

    const MenuComSubmenus = () => {
        const [showSubmenus, setShowSubmenus] = useState(false);

        const toggleSubmenus = () => {
            setShowSubmenus(!showSubmenus);
        };
    }

    return (
        <ComponentMenu>
            <div className="menu-container">
                <div className="segunda-box" aria-label="Bem vindo">
                    <h1>BEM VINDO</h1>

                </div>
            </div>
        </ComponentMenu>
    );
}

export default Menu;