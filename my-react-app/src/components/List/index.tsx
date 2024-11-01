import style from "./List.module.scss";
import Item from "./Item";
import { ITarefas } from "../../types/tarefa";

interface Props {
    tarefas: ITarefas[],
    selecionaTarefa: (tarefaSelecionada: ITarefas) => void
}

function List({ tarefas, selecionaTarefa }: Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item) => (
                    <Item
                    selecionaTarefa={selecionaTarefa}
                    key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;