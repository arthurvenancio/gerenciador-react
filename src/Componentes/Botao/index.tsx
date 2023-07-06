interface BotaoProps {
    nome: string;
  }
  
  export default function Botao(props: BotaoProps) {
    return (
      <button id="cadastro">{props.nome}</button>
    );
  }