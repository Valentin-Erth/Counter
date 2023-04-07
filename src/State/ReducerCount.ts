import {StateType} from "../App";
import {ChangeEvent} from "react";

export type AddCounterAT = {
    type: "ADD-COUNTER"
}
export type ResetCounterAT = {
    type: "RESET-COUNTER"
}
export type SetCounterAT = {
    type: "SET-COUNTER"
    s: string
    m: string
}
export type OnChangeMaxInputAT = {
    type: "CHANGE-MAX"
    e: ChangeEvent<HTMLInputElement>
}
export type OnChangeStartInputAT = {
    type: "CHANGE-START"
    e: ChangeEvent<HTMLInputElement>
}
const initialState: StateType = {
    startValue: "0",
    maxValue: "5",
    count: 0,
    error: 'Enter value'
}
export type ActionType = AddCounterAT | ResetCounterAT | SetCounterAT | OnChangeMaxInputAT | OnChangeStartInputAT
export const ReducerCount = (state: StateType = initialState, action: ActionType) => {
    // @ts-ignore
    if (action.type === "ADD-COUNTER") {
        {
            if (state.count < Number(state.maxValue)) {
                return {...state, count: state.count + 1}
            }
        }
        return {...state, count: Number(state.startValue)}
    } else if (action.type === "RESET-COUNTER") {
        return {...state, count: Number(state.startValue)}
    } else if (action.type === "SET-COUNTER") {
        if (Number(action.s) === Number(action.m) || Number(action.m) < Number(action.s) || Number(action.m) < 0 || Number(action.s) < 0) {
            return {...state, error: "Incorrect value"}
        } else {
            return {...state, startValue: action.s, maxValue: action.m, error: ""}
        }
    } else if (action.type === "CHANGE-MAX") {
        return {...state, maxValue: action.e, error: ""}
    } else if (action.type === "CHANGE-START") {
        return {...state, startValue: action.e, error: ""}
    } else {
        return state;
    }
}
export const AddCounterAC = () => ({type: "ADD-COUNTER"}) as const
export const ResetCounterAC = () => ({type: "RESET-COUNTER"}) as const
export const SetCounterAC = (s: string, m: string) => ({type: "SET-COUNTER", s, m}) as const
export const OnChangeMaxInputAC = (e: string) => ({type: "CHANGE-MAX", e}) as const
export const OnChangeStartInputAC = (e: string) => ({type: "CHANGE-START", e}) as const