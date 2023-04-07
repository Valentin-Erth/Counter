import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Components/Counter";
import {Setting} from "./Components/Setting";

 export type StateType={
     startValue: string,
     maxValue: string,
     count: number,
     error: string
 }
function AppRedux() {
    let maxValue = 1;
    let startValue = 0;
    const [state, setState] = useState<StateType>({
        startValue: "0",
        maxValue: "5",
        count: 0,
        error: 'Enter value'
    })
    // const [error, setError] = useState<string>('Enter value')
    // const [max, setMax] = useState<string>('0')
    // const [start, setStart] = useState<string>('0')

    useEffect(() => {
        let valueAsStringStart = localStorage.getItem("counterStart" || "0")
        let valueAsStringMax = localStorage.getItem("counterMax" || "2")
        if (valueAsStringStart && valueAsStringMax) {
            let newValueStart = JSON.parse(valueAsStringStart)
            setState({...state,startValue: newValueStart})
            let newValueMax = JSON.parse(valueAsStringMax)
            setState({...state,maxValue: newValueMax})
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("counterStart", JSON.stringify(state.startValue))
        localStorage.setItem("counterMax", JSON.stringify(state.maxValue))
    }, [state.startValue, state.maxValue])


    const add = () => {
        if (state.count < Number(state.maxValue)) {
            setState({...state, count: state.count + 1})
        }
    }
    const reset = () => {
        setState({...state, count: Number(state.startValue)})
    }
    const set = (s: string, m: string) => {
         if (Number(s) === Number(m) || Number(m) < Number(s)||Number(m)<0|| Number(s)<0 ) {
            setState({...state, error: "Incorrect value"})
        } else {
            setState({...state, startValue: s,maxValue: m, error: ""})
            }
    }
    return (
        <div className={"App"}>
            <Setting set={set}
                     max={state.maxValue} setState={setState} state={state}
                     start={state.startValue} error={state.error}
                     />
            <Counter count={state.count} add={add} reset={reset}
                     maxValue={Number(state.maxValue)} startValue={Number(state.startValue)}
                     error={state.error}/>

        </div>
    );
}

export default AppRedux;
