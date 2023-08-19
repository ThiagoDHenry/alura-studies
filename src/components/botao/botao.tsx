import Style from "./botao.module.scss";
import { PropsBotao } from "../interfaces/Props";

function Botao({ onClick, type, children }: PropsBotao) {
  return (
    <button onClick={onClick} type={type} className={Style.botao}>
      {children}
    </button>
  );
}

export default Botao;
