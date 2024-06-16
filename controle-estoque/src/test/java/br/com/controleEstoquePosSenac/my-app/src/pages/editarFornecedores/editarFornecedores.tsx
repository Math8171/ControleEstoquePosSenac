import React, { useState } from 'react';
import './editarFornecedores.css';
import ComponentMenu from "../../components/componentMenu/componentMenu.tsx";

function EditarFornecedores() {

    const [CadastroFornecedorFormData, setCadastroFornecedorFormData] = useState({
        CadastroFornecedorNome: '',
        CadastroFornecedorTelefone: '',
        CadastroFornecedorEmail: '',
        CadastroFornecedorCNPJ: '',
        CadastroFornecedorEndereco: ''
    });

    const handleCadastroFornecedorChange = (e) => {
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
        alert('Cadastro de fornecedor realizado com sucesso!');
    };

    return (
        <ComponentMenu>
            <div className="menu-container">
                <div className="EditarFornecedorFormContainer">
                    <h1>Editar Fornecedor</h1>
                    <form onSubmit={handleCadastroProdutoSubmit}>
                        <div className="boxFormularioEditarFornecedor">
                            <div className="EditarFornecedorFormGroup">
                                <label htmlFor="CadastroFornecedorNome">Nome do Fornecedor:</label>
                                <input
                                    type="text"
                                    id="CadastroFornecedorNome"
                                    name="CadastroFornecedorNome"
                                    value={CadastroFornecedorFormData.CadastroFornecedorNome}
                                    onChange={handleCadastroFornecedorChange}
                                    required
                                />
                            </div>
                            <div className="EditarFornecedorFormGroup">
                                <label htmlFor="CadastroFornecedorTelefone">Telefone:</label>
                                <input
                                    type="text"
                                    id="CadastroFornecedorTelefone"
                                    name="CadastroFornecedorTelefone"
                                    value={CadastroFornecedorFormData.CadastroFornecedorTelefone}
                                    onChange={handleCadastroFornecedorChange}
                                    required
                                />
                            </div>
                            <div className="EditarFornecedorFormGroup">
                                <label htmlFor="CadastroFornecedorEmail">E-mail:</label>
                                <input
                                    type="text"
                                    id="CadastroFornecedorEmail"
                                    name="CadastroFornecedorEmail"
                                    value={CadastroFornecedorFormData.CadastroFornecedorEmail}
                                    onChange={handleCadastroFornecedorChange}
                                    required
                                />
                            </div>
                            <div className="EditarFornecedorFormGroup">
                                <label htmlFor="CadastroFornecedorCNPJ">CNPJ:</label>
                                <input
                                    type="text"
                                    id="CadastroFornecedorCNPJ"
                                    name="CadastroFornecedorCNPJ"
                                    value={CadastroFornecedorFormData.CadastroFornecedorCNPJ}
                                    onChange={handleCadastroFornecedorChange}
                                    required
                                />
                            </div>
                            <div className="EditarFornecedorFormGroup">
                                <label htmlFor="CadastroFornecedorEndereco">Endereço:</label>
                                <input
                                    type="text"
                                    id="CadastroFornecedorEndereco"
                                    name="CadastroFornecedorEndereco"
                                    value={CadastroFornecedorFormData.CadastroFornecedorEndereco}
                                    onChange={handleCadastroFornecedorChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="EditarFornecedorSubmitButton">Editar Fornecedor</button>
                        </div>
                    </form>
                </div>
            </div>
        </ComponentMenu>
    );
}

export default EditarFornecedores;