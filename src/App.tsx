import Formulario from './Componentes/Formulario';
import Lista from './Componentes/Lista';
import React, { useState } from 'react';
import { Produto } from './Interfaces/produto';

function App() {
  const [listaProdutos,setListaProdutos]=useState<Produto[]>([])
  return (
    <div className="App">
      <Formulario setListaProdutos={setListaProdutos} listaProdutos={listaProdutos}/>
      <Lista listaProdutos={listaProdutos}/>
    </div>
  );
}

export default App;
