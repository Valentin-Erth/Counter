import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Components/Counter";
import {Setting} from "./Components/Setting";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./State/Store";
import {
    AddCounterAC,
    OnChangeMaxInputAC,
    OnChangeStartInputAC,
    ResetCounterAC,
    SetCounterAC
} from "./State/ReducerCount";

 export type StateType={
     startValue: string,
     maxValue: string,
     count: number,
     error: string
 }
function AppRedux() {
     const stateCounter=useSelector<AppRootStateType,StateType>(state=>state.counter)
    const dispatch=useDispatch()
    // const [state, setState] = useState<StateType>({
    //     startValue: "0",
    //     maxValue: "5",
    //     count: 0,
    //     error: 'Enter value'
    // })
   // useEffect(() => {
   //      let valueAsStringStart = localStorage.getItem("counterStart" || "0")
   //      let valueAsStringMax = localStorage.getItem("counterMax" || "2")
   //      if (valueAsStringStart && valueAsStringMax) {
   //          let newValueStart = JSON.parse(valueAsStringStart)
   //          setState({...state,startValue: newValueStart})
   //          let newValueMax = JSON.parse(valueAsStringMax)
   //          setState({...state,maxValue: newValueMax})
   //      }
   //  }, [])
   //  useEffect(() => {
   //      localStorage.setItem("counterStart", JSON.stringify(state.startValue))
   //      localStorage.setItem("counterMax", JSON.stringify(state.maxValue))
   //  }, [state.startValue, state.maxValue])


    const add = () => {
      dispatch(AddCounterAC())
    }
    const reset = () => {
        dispatch(ResetCounterAC())
    }
    const set = (s: string, m: string) => {
      dispatch(SetCounterAC(s,m))
    }
    const onChangeMaxInput=(e:string)=>{
        dispatch(OnChangeMaxInputAC(e))
        // setState({...state, maxValue: e, error:"" })
    }
    const onChangeStartInput=(e:string)=>{
        // setState({...state, startValue:e, error:"" })
        dispatch(OnChangeStartInputAC(e))
    }
    return (
        <div className={"App"}>
            <Setting set={set} onChangeMaxInput={onChangeMaxInput}
                     onChangeStartInput={onChangeStartInput}
                     max={stateCounter.maxValue}                      start={stateCounter.startValue} error={stateCounter.error}
                     />
            <Counter count={stateCounter.count} add={add} reset={reset}
                     maxValue={Number(stateCounter.maxValue)} startValue={Number(stateCounter.startValue)}
                     error={stateCounter.error}/>

        </div>
    );
}

export default AppRedux;
