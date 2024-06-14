import React, { useState } from 'react';
import './movimentacaoFinanceira.css';
import { FaBox, FaWarehouse, FaTruck, FaExchangeAlt, FaHistory, FaSearch, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function CadastroProduto() {

    const [MovimentacaoFinanceiraFormData, setMovimentacaoFinanceiraFormData] = useState({
        MovimentacaoFinanceiraProduto: '',
        MovimentacaoFinanceiraTipoMovimentacao: '',
        MovimentacaoFinanceiraLoja: '',
        MovimentacaoFinanceiraQuantidadeMovimentacao: '',
        MovimentacaoFinanceiraValorTotal: '',
        MovimentacaoFinanceiraDataMovimentacao: ''
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
                    <NavLink to="/movimentacao" activeClassName="active" className="botaoMenuMovimentacaoFinanceira">
                        <FaExchangeAlt size={20} style={{ marginRight: '10px' }} />
                        MOVIMENTAÇÃO
                    </NavLink>
                </div>
            </div>
            <div className="MovimentacaoFinanceiraFormContainer">
                <h1>Movimentação Estoque</h1>
                <form onSubmit={handleCadastroProdutoSubmit}>
                    <div className="boxFormularioMovimentacaoFinanceira">
                        <div className="MovimentacaoFinanceiraFormGroup">
                            <label htmlFor="MovimentacaoFinanceiraProduto">Nome do Produto:</label>
                            <input
                                type="text"
                                id="MovimentacaoFinanceiraProduto"
                                name="MovimentacaoFinanceiraProduto"
                                value={MovimentacaoFinanceiraFormData.MovimentacaoFinanceiraProduto}
                                onChange={handleMovimentacaoFinanceiraChange}
                                required
                            />
                        </div>
                        <div className="MovimentacaoFinanceiraFormGroup">
                            <label htmlFor="MovimentacaoFinanceiraTipoMovimentacao">Tipo de Movimentação:</label>
                            <input
                                type="number"
                                id="MovimentacaoFinanceiraTipoMovimentacao"
                                name="MovimentacaoFinanceiraTipoMovimentacao"
                                value={MovimentacaoFinanceiraFormData.MovimentacaoFinanceiraTipoMovimentacao}
                                onChange={handleMovimentacaoFinanceiraChange}
                                required
                            />
                        </div>
                        <div className="MovimentacaoFinanceiraFormGroup">
                            <label htmlFor="MovimentacaoFinanceiraLoja">Loja:</label>
                            <input
                                type="number"
                                id="MovimentacaoFinanceiraLoja"
                                name="MovimentacaoFinanceiraLoja"
                                value={MovimentacaoFinanceiraFormData.MovimentacaoFinanceiraLoja}
                                onChange={handleMovimentacaoFinanceiraChange}
                                required
                            />
                        </div>

                        <div className="MovimentacaoFinanceiraFormGroup">
                            <label htmlFor="MovimentacaoFinanceiraQuantidadeMovimentacao">Quantidade Movimentação:</label>
                            <input
                                type="number"
                                id="MovimentacaoFinanceiraQuantidadeMovimentacao"
                                name="MovimentacaoFinanceiraQuantidadeMovimentacao"
                                value={MovimentacaoFinanceiraFormData.MovimentacaoFinanceiraQuantidadeMovimentacao}
                                onChange={handleMovimentacaoFinanceiraChange}
                                required
                            />
                        </div>
                        <div className="MovimentacaoFinanceiraFormGroup">
                            <label htmlFor="MovimentacaoFinanceiraValorTotal">Valor Total:</label>
                            <input
                                type="number"
                                id="MovimentacaoFinanceiraValorTotal"
                                name="MovimentacaoFinanceiraValorTotal"
                                value={MovimentacaoFinanceiraFormData.MovimentacaoFinanceiraValorTotal}
                                onChange={handleMovimentacaoFinanceiraChange}
                                required
                            />
                        </div>
                        <div className="MovimentacaoFinanceiraFormGroup">
                            <label htmlFor="MovimentacaoFinanceiraDataMovimentacao">Data da Movimentação:</label>
                            <input
                                type="text"
                                id="MovimentacaoFinanceiraDataMovimentacao"
                                name="MovimentacaoFinanceiraDataMovimentacao"
                                value={MovimentacaoFinanceiraFormData.MovimentacaoFinanceiraDataMovimentacao}
                                onChange={handleMovimentacaoFinanceiraChange}
                                required
                            />
                        </div>
                        <button type="submit" className="MovimentacaoFinanceiraSubmitButton">Registrar Movimentação</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CadastroProduto;