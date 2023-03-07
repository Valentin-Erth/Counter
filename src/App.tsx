import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Components/Counter";
import {Setting} from "./Components/Setting";

function App() {
    let maxValue = 1;
    let startValue = 0;
    const [Scount, setSCount] = useState<number>(startValue)
    const [Mcount, setMCount] = useState<number>(maxValue)
    const [error, setError] = useState<string>('')
    const [max, setMax] = useState("")
    const [start, setStart] = useState("")

    const add = () => {
        if (Scount < Mcount) {
            setSCount(Scount+1)
        }
    }
    const reset = () => {
        setSCount(Number(start))
    }
    const set = (s: string, m: string) => {
        startValue = Number(s);
        maxValue = Number(m);
        if(Number(start)===Number(max)){
            setError("Incorrect value")
        }else  {
            setSCount(startValue)
            setMCount(maxValue)
            setError("")
        }
    }
    return (
        <div className={"App"}>
            <Setting set={set} max={max} setMax={setMax} start={start} setStart={setStart} error={error} setError={setError}/>
            <Counter count={Scount} add={add} reset={reset} maxValue={Number(max)} startValue={Number(start)} error={error}/>

        </div>
    );
}

export default App;
