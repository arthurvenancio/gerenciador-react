import { Produto } from "../../Interfaces/produto";
import Botao from "../Botao";
import React, { useState } from 'react';
import style from "./Formulario.module.scss"

interface Props {
    listaProdutos:Produto[],
    setListaProdutos: React.Dispatch<React.SetStateAction<Produto[]>>
  }

function Formulario({listaProdutos,setListaProdutos}:Props){
    const [produto,setProduto]=useState("")
    const [quantidade,setQuantidade]=useState(0)

    function adicionarProduto(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        let estoque=listaProdutos
        const atualizacao=estoque.findIndex(check=>check.produto===produto)
        atualizacao<0?(estoque=[...estoque]):(estoque.splice(atualizacao,1))
        setListaProdutos([...estoque,{produto,quantidade}])
        setProduto("")
        setQuantidade(0)

    }
    
    return(
        <form onSubmit={adicionarProduto} className={style.form}>
            <input 
            className={style.produto}
            type="text" 
            placeholder="Produto" 
            value={produto}
            onChange={evento => setProduto(evento.target.value)}
            />
            <input 
            type="number" 
            className={style.quantidade}
            value={quantidade}
            onChange={evento => setQuantidade(Number(evento.target.value))}
            />
            <Botao nome="Adicionar"/>
        </form>
    )
}

export default Formulario