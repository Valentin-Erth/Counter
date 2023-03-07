import React from "react";
import s from "./Counter.module.css"
import {SuperButton} from "./SeperButton";

type CounterType = {
    count: number
    add: () => void
    reset: () => void
    maxValue:number
    startValue:number
    error:string
}
export const Counter = (props: CounterType) => {
const display=`${s.display} ${props.count === props.maxValue ? s.redValue : ""}`;
const disabledAdd=props.count===props.maxValue;
const disabledReset =props.count===props.startValue;
  const message=`${props.error? s.redValue : ""}`
    return (
        <div className={s.wrapper}>
            <div className={display}>
                <span className={message}>{props.error? props.error: props.count}</span>
            </div>
            <div className={s.butWrap}>
                <SuperButton name={"Add"} callBack={props.add} disabled={disabledAdd} />
                <SuperButton name={"Reset"} callBack={props.reset} disabled={disabledReset} />

            </div>
        </div>
    )
}