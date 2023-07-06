import Item from "./Item"
import style from "./Lista.module.scss"
import { Produto } from "../../Interfaces/produto"

interface Props{
  listaProdutos:Produto[]
}

function Lista({listaProdutos}:Props){
    return(
        <aside>
      <h2 className={style.titulo_lista}> Estoque de Produtos </h2>
      <ul className={style.lista}>
        {listaProdutos.map((item:Produto,index:number)=>(
          <Item {...item} key={index}/>
        ))}
      </ul>
    </aside>
    )
}

export default Lista