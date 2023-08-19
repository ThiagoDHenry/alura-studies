import { iTarefa } from "./iTarefa";

export interface PropsBotao {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  children?: React.ReactNode;
}

export interface PropsFormulario {
  setTarefas: React.Dispatch<React.SetStateAction<iTarefa[]>>;
}

export interface PropsLista {
  tarefas: iTarefa[];
  selecionaTarefa: (tarefaSelecionadas: iTarefa) => void;
}

export interface PropsItem extends iTarefa {
  selecionaTarefa: (tarefaSelecionadas: iTarefa) => void;
}

export interface PropsCronometro {
  selecionado: iTarefa | undefined;
  finalizarTarefa: () => void;
}

export interface PropsRelogio {
  tempo: number | undefined;
}
