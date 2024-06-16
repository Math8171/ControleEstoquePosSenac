import React, { useState } from 'react';
import './cadastroFornecedores.css';
import ComponentMenu from "../../components/componentMenu/componentMenu.tsx";

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
        <ComponentMenu>
        <div className="menu-container">
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
     </ComponentMenu>
    );
}

export default CadastroFornecedores;