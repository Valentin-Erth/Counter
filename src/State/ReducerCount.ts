import {StateType} from "../App";

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
const initialState: StateType = {
    startValue: "0",
    maxValue: "5",
    count: 0,
    error: 'Enter value'
}
export type ActionType = AddCounterAT | ResetCounterAT | SetCounterAT
export const ReducerCount = (state: StateType = initialState, action: ActionType) => {
    switch (action.type) {
        case "ADD-COUNTER":
            return {...state, count: state.count + 1}
        case "RESET-COUNTER":
            return {...state, count: Number(state.startValue)}
        case "SET-COUNTER":
            if (Number(action.s) === Number(action.m) || Number(action.m) < Number(action.s) || Number(action.m) < 0 || Number(action.s) < 0) {
                return {...state, error: "Incorrect value"}
            } else {
                return {...state, startValue: action.s, maxValue: action.m, error: ""}
            }
        default:
            return state;
    }
}
export const AddCounterAC = () => ({type: "ADD-COUNTER"}) as const
export const ResetCounterAC = () => ({type: "RESET-COUNTER"}) as const
export const SetCounterAC = (s: string, m: string) => ({type: "SET-COUNTER", s, m}) as const
