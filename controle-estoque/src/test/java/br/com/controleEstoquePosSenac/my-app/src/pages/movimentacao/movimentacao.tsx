import React from 'react';
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
            <input
              className="inputBusca"
              type="text"
              placeholder="Digite o nome do produto:"
              aria-label="Buscar produto"
            />
            <NavLink to="/buscarMovimentacao" className="botaoCadastroProduto" aria-label="Buscar movimentação">
              <TbSearch size={35} />
            </NavLink>
          </div>
          <table className="tableMovimentacao">
            <thead>
              <tr>
                <th scope="col">Código</th>
                <th scope="col">Produto</th>
                <th scope="col">Quantidade em Estoque</th>
                <th scope="col">Quantidade Mínima</th>
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
          <div className="iconesCrud">
            <div>
              <div className="boxBotaoMovimentacao">
                {/* Adicione rótulos ou textos descritivos aqui se necessário */}
              </div>
            </div>
            <div className="boxBotaoMovimentacao">
              <NavLink to="/movimentacaoFinanceira" activeClassName="active" className="botaoCadastroMovimentacao" aria-label="Ir para Movimentação Financeira">
                <BsCashCoin size={45} />
              </NavLink>
              <NavLink to="/extrato" activeClassName="active" className="botaoCadastroMovimentacao" aria-label="Ir para Extrato">
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