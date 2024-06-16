import React, { useState } from 'react';
import './movimentacao.css';
import { BsFillFileTextFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { TbSearch } from "react-icons/tb";
import { BsCashCoin } from "react-icons/bs";
import ComponentMenu from "../../components/componentMenu/componentMenu.tsx";

function Movimentacao() {

  return (
    <ComponentMenu>
      <div className="menu-container">
        <div className="movimentacao-box">
          <div className="movimentacaoEstoque">
            <h1>MOVIMENTAÇÃO</h1>
          </div>
          <div className="movimentacao-bar">
            <input className="inputBusca" type="text" placeholder="Digite o nome do produto:" />
            <NavLink to="/buscarMovimentacao" className="botaoCadastroProduto">
              <TbSearch size={35} />
            </NavLink>
          </div>
          <table className="tableMovimentacao">
            <thead>
              <tr>
                <th>Código</th>
                <th>Produto</th>
                <th>Quant. Estoque</th>
                <th>Quant. Minima</th>
                <th>Preço Médio</th>
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
          <div className="iconesCrud">
            <div>
              <div className="boxBotaoMovimentacao">

              </div>
            </div>
            <div className="boxBotaoMovimentacao">
              <NavLink to="/movimentacaoFinanceira" activeClassName="active" className="botaoCadastroMovimentacao">
                <BsCashCoin size={45} />
              </NavLink>
              <NavLink to="/extrato" activeClassName="active" className="botaoCadastroMovimentacao">
                <BsFillFileTextFill size={45} />
              </NavLink>
            </div>

          </div>
        </div>
      </div>
    </ComponentMenu>
  );
}

export default Movimentacao;