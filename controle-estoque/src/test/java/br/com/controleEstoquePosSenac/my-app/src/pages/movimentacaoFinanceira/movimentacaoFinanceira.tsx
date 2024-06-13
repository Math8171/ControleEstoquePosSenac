import React, { useState } from 'react';
import './movimentacaoFinanceira.css';
import { FaBox, FaWarehouse, FaTruck, FaExchangeAlt, FaHistory, FaSearch, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function CadastroProduto() {

  const [MovimentacaoFinanceiraFormData, setMovimentacaoFinanceiraFormData] = useState({
    MovimentacaoFinanceiraNome: '',
    MovimentacaoFinanceiraDescricao: '',
    MovimentacaoFinanceiraPreco: '',
    MovimentacaoFinanceiraQuantidade: ''
  });

  const handleMovimentacaoFinanceiraChange = (e) => {
    const { name, value } = e.target;
    setMovimentacaoFinanceiraFormData({
      ...MovimentacaoFinanceiraFormData,
      [name]: value
    });
  };

  const handleCadastroProdutoSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados para o servidor
    console.log('Dados do formulário:', CadastroProdutoFormData);
    alert('Cadastro de produto realizado com sucesso!');
  };
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
          <NavLink to="/produtos" activeClassName="active" className="botaoMenuProduto">
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
      <div className="MovimentacaoFinanceiraFormContainer">
        <h1>Movimentação Financeira</h1>
        <form onSubmit={handleCadastroProdutoSubmit}>
          <div className="boxFormularioMovimentacaoFinanceira">
          <div className="MovimentacaoFinanceiraFormGroup">
            <label htmlFor="MovimentacaoFinanceiraNome">Nome do Produto:</label>
            <input
              type="text"
              id="MovimentacaoFinanceiraNome"
              name="MovimentacaoFinanceiraNome"
              value={MovimentacaoFinanceiraFormData.MovimentacaoFinanceiraNome}
              onChange={handleMovimentacaoFinanceiraChange}
              required
            />
          </div>
          <div className="MovimentacaoFinanceiraFormGroup">
            <label htmlFor="MovimentacaoFinanceiraDescricao">Descrição:</label>
            <textarea
              id="MovimentacaoFinanceiraDescricao"
              name="MovimentacaoFinanceiraDescricao"
              value={MovimentacaoFinanceiraFormData.MovimentacaoFinanceiraDescricao}
              onChange={handleMovimentacaoFinanceiraChange}
              required
            ></textarea>
          </div>
          <div className="MovimentacaoFinanceiraFormGroup">
            <label htmlFor="MovimentacaoFinanceiraPreco">Preço:</label>
            <input
              type="number"
              id="MovimentacaoFinanceiraPreco"
              name="MovimentacaoFinanceiraPreco"
              value={MovimentacaoFinanceiraFormData.MovimentacaoFinanceiraPreco}
              onChange={handleMovimentacaoFinanceiraChange}
              required
            />
          </div>
          <div className="MovimentacaoFinanceiraFormGroup">
            <label htmlFor="MovimentacaoFinanceiraQuantidade">Quantidade:</label>
            <input
              type="number"
              id="MovimentacaoFinanceiraQuantidade"
              name="MovimentacaoFinanceiraQuantidade"
              value={MovimentacaoFinanceiraFormData.MovimentacaoFinanceiraQuantidade}
              onChange={handleMovimentacaoFinanceiraChange}
              required
            />
          </div>
          <button type="submit" className="MovimentacaoFinanceiraSubmitButton">Cadastrar Produto</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CadastroProduto;