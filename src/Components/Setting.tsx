import React, {ChangeEvent, useEffect, useState} from 'react';
import s from "./Setting.module.css"
import {SuperButton} from "./SeperButton";
import Paper from '@mui/material/Paper';



type SettingType = {
    set: (s: string, m: string) => void
    onChangeMaxInput:(e:string)=>void
    onChangeStartInput:(e:string)=>void
    max: string
    start: string
    error: string

}
export const Setting = (props: SettingType) => {
    const [disable, setDisable] = useState(false)
    useEffect(() => {
        setDisable(!!props.error.length)
    }, [props.error])

    const onChangeMaxInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeMaxInput(e.currentTarget.value)
    }
    const onChangeStartInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeStartInput(e.currentTarget.value)
        console.log(typeof e.currentTarget.value)
      }
    const finalInputClassName = `${s.input} ${(Number(props.start) === Number(props.max) || Number(props.start) < 0) || Number(props.max) < Number(props.start) ? s.errorInput : ""}`
    //Number(props.start) === Number(props.max) || Number(props.start) < 0
    return (
        // <div className={s.wrapper}>
        <Paper elevation={3}>
            <div className={s.display}>
                <div className={s.value}><span>max value:  </span>
                    <input type={"number"}
                           className={finalInputClassName}
                           value={props.max}
                           onChange={onChangeMaxInputHandler}/>
                </div>
                <div className={s.value}><span>start value:  </span>
                    <input type={"number"}
                           className={finalInputClassName}
                           value={props.start}
                           onChange={onChangeStartInputHandler}/>
                </div>
            </div>
            <div className={s.butWrap}>
                <SuperButton name={"Set"} callBack={() => {
                    props.set(props.start, props.max)
                }} disabled={disable}/>
            </div>
        </Paper>
        // </div>
    );
};

