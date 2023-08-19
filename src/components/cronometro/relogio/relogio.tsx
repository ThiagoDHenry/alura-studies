import { PropsRelogio } from "../../interfaces/Props";
import Style from "./relogio.module.scss";

export default function relogio({ tempo = 0 }: PropsRelogio) {
  const minutos = Math.floor(tempo / 60);
  const segundos = tempo % 60;
  const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, "0");
  const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, "0");

  return (
    <>
      <span className={Style.relogioNumero}>{minutoDezena}</span>
      <span className={Style.relogioNumero}>{minutoUnidade}</span>
      <span className={Style.relogioDivisao}>:</span>
      <span className={Style.relogioNumero}>{segundoDezena}</span>
      <span className={Style.relogioNumero}>{segundoUnidade}</span>
    </>
  );
}
