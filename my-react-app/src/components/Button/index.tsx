import React from "react";
import style from "./Button.module.scss";

interface Props {
    children?: React.ReactNode,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
}

function Button({ onClick, type, children }: Props) {
    return (
        <button 
        onClick={onClick} 
        type = {type} 
        className={style.botao}>
            {children}
            {/* A propriedade do JavaScript children 
            retorna um array que contém todos os 
            elementos filho (child) do elemento HTML 
            no qual foi chamado. */}
            {/* Já props.children retorna o tipo dados 
            correspondente ao elemento filho do 
            componente que ela contém, podendo ser 
            uma string, um array, uma função ou um 
            objeto. Por isso, props.children possui 
            uma estrutura de dados denominada genérica 
            ou opaca. */}
        </button>
    )
}

export default Button;