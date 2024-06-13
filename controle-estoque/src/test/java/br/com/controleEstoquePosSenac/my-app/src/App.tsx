import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';
import Login from "./pages/login/login.tsx";
import Menu from "./pages/menu/menu.tsx";
import Produtos from "./pages/produtos/produtos.tsx";
import CadastroProdutos from "./pages/cadastroProdutos/cadastroProdutos.tsx";
import EditarProdutos from "./pages/editarProdutos/editarProdutos.tsx";
import ReposicaoProdutos from "./pages/reposicaoProdutos/reposicaoProdutos.tsx";
import Estoque from "./pages/estoque/estoque.tsx";
import Loja from "./pages/loja/loja.tsx";
import Fornecedores from "./pages/fornecedores/fornecedores.tsx";
import CadastroFornecedores from "./pages/cadastroFornecedores/cadastroFornecedores.tsx";
import EditarFornecedores from "./pages/editarFornecedores/editarFornecedores.tsx";
import Movimentacao from "./pages/movimentacao/movimentacao.tsx";
import MovimentacaoFinanceira from "./pages/movimentacaoFinanceira/movimentacaoFinanceira.tsx";
//import Extrato from "./pages/extrato/extrato.tsx";
//import Consulta from "./pages/consulta/consulta.tsx";



//import Teste from "./pages/teste/teste.tsx";


function App() {
  return (

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/cadastroProdutos" element={<CadastroProdutos />} />
      <Route path="/editarProdutos" element={<EditarProdutos />} />
      <Route path="/reposicaoProdutos" element={<ReposicaoProdutos />} />
      <Route path="/estoque" element={<Estoque />} />
      <Route path="/fornecedores" element={<Fornecedores />} />
      <Route path="/cadastroFornecedores" element={<CadastroFornecedores />} />
      <Route path="/editarFornecedores" element={<EditarFornecedores />} />
      <Route path="/movimentacao" element={<Movimentacao />} />
      <Route path="/movimentacaoFinanceira" element={<MovimentacaoFinanceira />} />
      <Route path="/loja" element={<Loja />} />
      {/*
    <Route path="/teste" element={<Teste />} />
    <Route path="/extrato" element={<Extrato />} />
    <Route path="/consultas" element={<Consulta />} />


  
      */}
    </Routes>



  );
}

export default App;