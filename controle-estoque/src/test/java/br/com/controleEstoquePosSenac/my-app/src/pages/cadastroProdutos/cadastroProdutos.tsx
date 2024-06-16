import React, { useState } from 'react';
import './cadastroProdutos.css';
import ComponentMenu from "../../components/componentMenu/componentMenu.tsx";

function CadastroProduto() {

  const [CadastroProdutoFormData, setCadastroProdutoFormData] = useState({
    CadastroProdutoNome: '',
    CadastroProdutoDescricao: '',
    CadastroProdutoPreco: '',
    CadastroProdutoQuantidade: ''
  });

  const handleCadastroProdutoChange = (e) => {
    const { name, value } = e.target;
    setCadastroProdutoFormData({
      ...CadastroProdutoFormData,
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
    <ComponentMenu>
      <div className="CadastroProdutoFormContainer">
        <h1>Cadastro de Produto</h1>
        <form onSubmit={handleCadastroProdutoSubmit}>
          <div className="boxFormularioCadastroProdutos">
            <div className="CadastroProdutoFormGroup">
              <label htmlFor="CadastroProdutoNome">Nome do Produto:</label>
              <input
                type="text"
                id="CadastroProdutoNome"
                name="CadastroProdutoNome"
                value={CadastroProdutoFormData.CadastroProdutoNome}
                onChange={handleCadastroProdutoChange}
                required
              />
            </div>
            <div className="CadastroProdutoFormGroup">
              <label htmlFor="CadastroProdutoDescricao">Descrição:</label>
              <textarea
                id="CadastroProdutoDescricao"
                name="CadastroProdutoDescricao"
                value={CadastroProdutoFormData.CadastroProdutoDescricao}
                onChange={handleCadastroProdutoChange}
                required
              ></textarea>
            </div>
            <div className="CadastroProdutoFormGroup">
              <label htmlFor="CadastroProdutoPreco">Preço:</label>
              <input
                type="number"
                id="CadastroProdutoPreco"
                name="CadastroProdutoPreco"
                value={CadastroProdutoFormData.CadastroProdutoPreco}
                onChange={handleCadastroProdutoChange}
                required
              />
            </div>
            <div className="CadastroProdutoFormGroup">
              <label htmlFor="CadastroProdutoQuantidade">Quantidade:</label>
              <input
                type="number"
                id="CadastroProdutoQuantidade"
                name="CadastroProdutoQuantidade"
                value={CadastroProdutoFormData.CadastroProdutoQuantidade}
                onChange={handleCadastroProdutoChange}
                required
              />
            </div>
            <button type="submit" className="CadastroProdutoSubmitButton">
              Cadastrar Produto
            </button>
          </div>
        </form>
      </div>
    </ComponentMenu>
  );
}

export default CadastroProduto;