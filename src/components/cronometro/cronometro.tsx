import Botao from "../botao/botao";
import Relogio from "./relogio/relogio";
import Style from "./cronometro.module.scss";
import { tempoParaSegundos } from "../../common/utils/time";
import { PropsCronometro } from "../interfaces/Props";
import { useEffect, useState } from "react";

export default function Cronometro({
  selecionado,
  finalizarTarefa,
}: PropsCronometro) {
  const [tempo, setTempo] = useState<number>();
  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo));
    }
  }, [selecionado]);

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
      finalizarTarefa();
    }, 1000);
  }

  return (
    <div className={Style.cronometro}>
      <p className={Style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={Style.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>
      <Botao onClick={() => regressiva(tempo)}>Começar!</Botao>
    </div>
  );
}
