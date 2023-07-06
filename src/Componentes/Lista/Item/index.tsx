import style from './Item.module.scss'
import { Produto } from '../../../Interfaces/produto'


export default function Item({produto,quantidade}:Produto) {
    return (
      <li className={style.produto}>
        <h3>{produto}</h3>
        <p>{quantidade}</p>
      </li>
    )
  }