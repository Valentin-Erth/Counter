import React from "react";
import s from "./Counter.module.css"
import {SuperButton} from "./SeperButton";
import Paper from '@mui/material/Paper';

type CounterType = {
    count: number
    add: () => void
    reset: () => void
    maxValue: number
    startValue: number
    error: string
}
export const Counter = (props: CounterType) => {
    const display = `${s.display} ${props.count === props.maxValue ? s.redValue : ""}`;
    const disabledAdd = props.count === props.maxValue;
    const disabledReset = props.count === props.startValue;
    const message = `${props.error ? s.redValue : ""}`
    const PressSet = "Press set"
    return (
        // <div className={s.wrapper}>
            <Paper style={{ width: "300px", margin: "10px"}} elevation={3} >
                <div className={display}>
                <span className={message}>
                    {props.error ? props.error
                        : props.count}
                </span>
                </div>
                <div className={s.butWrap}>
                    <SuperButton name={"Add"} callBack={props.add} disabled={disabledAdd}/>
                    <SuperButton name={"Reset"} callBack={props.reset} disabled={disabledReset}/>
                </div>
            </Paper>
        // </div>
)
}