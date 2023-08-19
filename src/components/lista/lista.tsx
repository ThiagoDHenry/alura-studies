import { PropsLista } from "../interfaces/Props";
import Item from "./item/item";
import Style from "./lista.module.scss";

function Lista({ tarefas, selecionaTarefa }: PropsLista ) {
  return (
    <aside className={Style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item selecionaTarefa={selecionaTarefa} key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
