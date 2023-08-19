import { PropsItem } from "../../interfaces/Props";
import Style from "./item.module.scss";

export default function Item({
  tarefa,
  tempo,
  selecionado,
  completado,
  id,
  selecionaTarefa,
}: PropsItem) {
  return (
    <li
      className={`${Style.item} ${selecionado ? Style.itemSelecionado : ""} 
      ${completado ? Style.itemCompletado : ""}`}
      onClick={() =>
        !completado &&
        selecionaTarefa({
          tarefa,
          tempo,
          selecionado,
          completado,
          id,
        })
      }
    >
      <h3> {tarefa} </h3>
      <span> {tempo} </span>
      {completado && (
        <span className={Style.concluido} aria-label="Tarefa Completada"></span>
      )}
    </li>
  );
}
