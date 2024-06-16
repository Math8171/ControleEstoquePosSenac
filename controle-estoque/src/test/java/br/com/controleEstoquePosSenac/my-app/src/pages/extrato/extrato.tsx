import React from 'react';
import './extrato.css';
import { NavLink } from 'react-router-dom';
import { TbSearch } from "react-icons/tb";
import ComponentMenu from "../../components/componentMenu/componentMenu.tsx";

function Extrato() {
  return (
    <ComponentMenu>
      <div className="menu-container">
        <div className="extrato-box">
          <div className="textoExtrato">
            <h1>EXTRATO</h1>
          </div>
          <div className="extrato-bar">
            <input className="inputBusca" type="text" placeholder="Digite o nome do produto:" aria-label="Pesquisar produto" />
            <NavLink to="/buscarExtrato" className="botaoCadastroProduto" aria-label="Buscar produto">
              <TbSearch size={35} aria-hidden="true" />
            </NavLink>
          </div>
          <table className="tableExtrato">
            <thead>
              <tr>
                <th scope="col">Código</th>
                <th scope="col">Produto</th>
                <th scope="col">Quant. Estoque</th>
                <th scope="col">Quant. Mínima</th>
                <th scope="col">Preço Médio</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 10 }, (_, rowIndex) => (
                <tr key={rowIndex}>
                  {Array.from({ length: 5 }, (_, colIndex) => (
                    <td key={colIndex}>
                      Celula {rowIndex + 1}-{colIndex + 1}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </ComponentMenu>
  );
}

export default Extrato;