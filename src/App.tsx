import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Components/Counter";
import {Setting} from "./Components/Setting";

function App() {
    let maxValue = 1;
    let startValue = 0;
    const [Scount, setSCount] = useState<number>(startValue)
    const [Mcount, setMCount] = useState<number>(maxValue)
    const [error, setError] = useState<string>('')
    const [max, setMax] = useState<string>( JSON.parse(localStorage.getItem("counterMax") || '5'))
    const [start, setStart] = useState<string>( JSON.parse(localStorage.getItem("counterStart") || '0'))
    // useEffect(() => {
    //     let valueAsStringStart = localStorage.getItem("counterStart")
    //     let valueAsStringMax = localStorage.getItem("counterMax")
    //     if (valueAsStringStart) {
    //         let newValueStart = JSON.parse(valueAsStringStart)
    //         setStart(String(newValueStart))
    //     }
    //     if (valueAsStringMax) {
    //         let newValueMax = JSON.parse(valueAsStringMax)
    //         setMax(String(newValueMax))
    //     }
    // }, [])
    useEffect(() => {
        localStorage.setItem("counterStart", JSON.stringify(start))
        localStorage.setItem("counterMax", JSON.stringify(max))
    }, [start, max])


    const add = () => {
        if (Scount < Mcount) {
            setSCount(Scount + 1)
        }
    }
    const reset = () => {
        setSCount(Number(start))
    }
    const set = (s: string, m: string) => {
        startValue = Number(s);
        maxValue = Number(m);
        if (Number(start) === Number(max)) {
            setError("Incorrect value")
        } else {
            setSCount(startValue)
            setMCount(maxValue)
            setError("")
        }
    }
    return (
        <div className={"App"}>
            <Setting set={set} max={max} setMax={setMax} start={start} setStart={setStart} error={error}
                     setError={setError}/>
            <Counter count={Scount} add={add} reset={reset} maxValue={Number(max)} startValue={Number(start)}
                     error={error}/>

        </div>
    );
}

export default App;
