import React, { useState } from 'react';
import './editarProdutos.css';
import ComponentMenu from "../../components/componentMenu/componentMenu.tsx";

function EditarProdutos() {

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
    alert('Edição de produto realizada com sucesso!');
  };

  return (
    <ComponentMenu>
      <div className="menu-container">
        <div className="EditarProdutosFormContainer">
          <h1>Editar Produto</h1>
          <form onSubmit={handleCadastroProdutoSubmit}>
            <div className="boxFormularioEditarProduto">
              <div className="EditarProdutosFormGroup">
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
              <button type="submit" className="EditarProdutoSubmitButton">Editar Produto</button>
            </div>
          </form>
        </div>
      </div>
    </ComponentMenu>
  );
}

export default EditarProdutos;