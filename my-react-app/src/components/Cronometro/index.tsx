import Button from "../Button";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss";
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefas } from "../../types/tarefa";
import { useEffect, useState } from "react";

interface Props {
    selecionado: ITarefas | undefined,
    finalizarTarefa: () => void
}

export default function Cronometro({ selecionado,
finalizarTarefa }: Props) {
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado?.tempo));
        }
    },[selecionado]);

    function regressiva(contador: number = 0) {
        setTimeout(() => {
            if (contador > 0) {
                setTempo(contador - 1);
                return regressiva(contador - 1);
            }
            finalizarTarefa();
        }, 1000);2
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            Tempo: {tempo}
            <div className={style.relogioWrapper}>
            <Relogio tempo={tempo}/>
            </div>
            <Button onClick={() => regressiva(tempo)}>
                Começar!
            </Button>
        </div>
    )
}