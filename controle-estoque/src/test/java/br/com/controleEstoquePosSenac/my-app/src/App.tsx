import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./pages/login/login.tsx";
//import Menu from "./pages/menu/menu.tsx";
//import Produtos from "./pages/produtos/produtos.tsx";
//import Depositos from "./pages/depositos/depositos.tsx";
//import Fornecedores from "./pages/fornecedores/fornecedores.tsx";
//import Movimentacao from "./pages/movimentacao/movimentacao.tsx";
//import Extrato from "./pages/extrato/extrato.tsx";
//import Consulta from "./pages/consulta/consulta.tsx";
//import CadastroProdutos from "./pages/cadastroProdutos/cadastroProdutos.tsx";
//import EditarProdutos from "./pages/editarProdutos/editarProdutos.tsx";
//import CadastroFornecedores from "./pages/cadastroFornecedores/cadastroFornecedores.tsx";
//import EditarFornecedores from "./pages/editarFornecedores/editarFornecedores.tsx";
//import Teste from "./pages/teste/teste.tsx";


function App() {
  return (
      <Routes>
           
        <Route path="/" element={<Login />} />
        {/*
        <Route path="/menu" element={<Menu />} />
        <Route path="/teste" element={<Teste />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/depositos" element={<Depositos />} />
        <Route path="/fornecedores" element={<Fornecedores />} />
        <Route path="/movimentacao" element={<Movimentacao />} />
        <Route path="/extrato" element={<Extrato />} />
        <Route path="/consultas" element={<Consulta />} />
        <Route path="/cadastroProdutos" element={<CadastroProdutos />} />
        <Route path="/editarProdutos" element={<EditarProdutos />} />
        <Route path="/cadastroFornecedores" element={<CadastroFornecedores />} />
        <Route path="/editarFornecedores" element={<EditarFornecedores />} />
          */}
      </Routes>


  );
}

export default App;