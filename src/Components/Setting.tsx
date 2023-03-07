import React, {ChangeEvent, useEffect, useState} from 'react';
import s from "./Setting.module.css"
import {SuperButton} from "./SeperButton";

type SettingType = {
    set: (s: string, m: string) => void
    setMax: (max: string) => void
    max: string
    start: string
    setStart: (start: string) => void
    error:string
    setError:(error:string)=>void
}
export const Setting = (props: SettingType) => {
    const [disable, setDisable] = useState(false)
    useEffect(() => {
        setDisable(!!props.error.length)
    }, [props.error])

    const onChangeMaxInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if(Number(e.currentTarget.value)<0){
            props.setError("Incorrect value")
        }else{
            props.setMax(e.currentTarget.value)
            props.setError("")
        }
    }
    const onChangeStartInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if(Number(e.currentTarget.value)<0){
            props.setError("Incorrect value")
        }else{
            props.setStart(e.currentTarget.value)
            props.setError("")
        }
    }
    const finalInputClassName = `${s.input} ${(Number(props.start) === Number(props.max) || Number(props.start) < 0) ? s.errorInput : ""}`
        //Number(props.start) === Number(props.max) || Number(props.start) < 0
    return (
        <div className={s.wrapper}>
            <div className={s.display}>
                <div className={s.value}><span>max value:  </span><input type={"number"} className={finalInputClassName}
                                                                         value={props.max}
                                                                         onChange={onChangeMaxInputHandler}/>
                </div>
                <div className={s.value}><span>start value:  </span><input type={"number"}
                                                                           className={finalInputClassName}
                                                                           value={props.start}
                                                                           onChange={onChangeStartInputHandler}/></div>
            </div>
            <div className={s.butWrap}>
                <SuperButton name={"Set"} callBack={() => {
                    props.set(props.start, props.max)
                }} disabled={disable}/>
            </div>

        </div>
    );
};

