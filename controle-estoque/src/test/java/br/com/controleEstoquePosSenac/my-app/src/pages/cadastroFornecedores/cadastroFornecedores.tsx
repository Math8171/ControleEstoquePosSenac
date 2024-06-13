import React, { useState } from 'react';
import './cadastroFornecedores.css';
import { FaBox, FaWarehouse, FaTruck, FaExchangeAlt, FaHistory, FaSearch, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function CadastroFornecedores() {

    const [CadastroFornecedorFormData, setCadastroFornecedorFormData] = useState({
        CadastroFornecedorNome: '',
        CadastroFornecedorTelefone: '',
        CadastroFornecedorEmail: '',
        CadastroFornecedorCnpj: '',
        CadastroFornecedorEndereco: ''
    });

    const handleCadastroProdutoChange = (e) => {
        const { name, value } = e.target;
        setCadastroFornecedorFormData({
            ...CadastroFornecedorFormData,
            [name]: value
        });
    };

    const handleCadastroProdutoSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para enviar os dados para o servidor
        console.log('Dados do formulário:', CadastroFornecedorFormData);
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
                    <NavLink to="/fornecedores" activeClassName="active" className="botaoMenuFornecedores">
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
            <div className="CadastroFornecedoresFormContainer">
                <h1>Cadastro de Fornecedor</h1>
                <form onSubmit={handleCadastroProdutoSubmit}>
                    <div className="boxFormularioCadastroFornecedores">
                        <div className="CadastroFornecedorFormGroup">
                            <label htmlFor="CadastroFornecedoresNome">Nome do Fornecedor:</label>
                            <input
                                type="text"
                                id="CadastroFornecedorNome"
                                name="CadastroFornecedorNome"
                                value={CadastroFornecedorFormData.CadastroFornecedorNome}
                                onChange={handleCadastroProdutoChange}
                                required
                            />
                        </div>
                        <div className="CadastroFornecedorFormGroup">
                            <label htmlFor="CadastroFornecedorTelefone">Telefone:</label>
                            <input
                                type="tel"
                                id="CadastroFornecedorTelefone"
                                name="CadastroFornecedorTelefone"
                                value={CadastroFornecedorFormData.CadastroFornecedorTelefone}
                                onChange={handleCadastroProdutoChange}
                                required
                            />
                        </div>
                        <div className="CadastroFornecedorFormGroup">
                            <label htmlFor="CadastroFornecedorEmail">E-mail:</label>
                            <input
                                type="email"
                                id="CadastroFornecedorEmail"
                                name="CadastroFornecedorEmail"
                                value={CadastroFornecedorFormData.CadastroFornecedorEmail}
                                onChange={handleCadastroProdutoChange}
                                required
                            />
                        </div>
                        <div className="CadastroFornecedorFormGroup">
                            <label htmlFor="CadastroFornecedorCnpj">CNPJ:</label>
                            <input
                                type="number"
                                id="CadastroFornecedorCnpj"
                                name="CadastroFornecedorCnpj"
                                value={CadastroFornecedorFormData.CadastroFornecedorCnpj}
                                onChange={handleCadastroProdutoChange}
                                required
                            />
                        </div>
                        <div className="CadastroFornecedorFormGroup">
                            <label htmlFor="CadastroFornecedorEndereco">Endereco:</label>
                            <input
                                type="text"
                                id="CadastroFornecedorEndereco"
                                name="CadastroFornecedorEndereco"
                                value={CadastroFornecedorFormData.CadastroFornecedorEndereco}
                                onChange={handleCadastroProdutoChange}
                                required
                            />
                        </div>
                        <button type="submit" className="CadastroFornecedorSubmitButton">Cadastrar Fornecedor</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CadastroFornecedores;