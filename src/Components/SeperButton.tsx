import React from "react";
import s from "./Counter.module.css";

type SeperButton = {
    name: string
    callBack: () => void
    disabled?: boolean

}
export const SuperButton = (props: SeperButton) => {
    return (
        <button className={s.button}
                onClick={props.callBack}
                disabled={props.disabled}
        >{props.name} </button>
    )
}