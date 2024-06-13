import React, { useState } from 'react';
import './editarProdutos.css';
import { FaBox, FaWarehouse, FaTruck, FaExchangeAlt, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

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
        </div>
      </div>
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
  );
}

export default EditarProdutos;