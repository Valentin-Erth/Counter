import {AddCounterAC, ReducerCount, ResetCounterAC, SetCounterAC} from "./ReducerCount";
import {StateType} from "../App";

test('correct count should be increment to correct', () => {
    let initialState: StateType = {
        startValue: "1",
        maxValue: "5",
        count: 0,
        error: 'Enter value'
    }
    const action = AddCounterAC()

    const endState = ReducerCount(initialState, action)

    expect(endState.count).toBe(2)
    expect(endState.startValue).toBe("1")

})
test('correct count should be reset to correct', () => {
    let initialState: StateType = {
        startValue: "0",
        maxValue: "5",
        count: 0,
        error: 'Enter value'
    }
    const action = ResetCounterAC()

    const endState = ReducerCount(initialState, action)

    expect(endState.count).toBe(0)
    expect(endState.startValue).toBe("0")
})

    test('correct count should be setting', () => {
    let initialState: StateType = {
        startValue: "0",
        maxValue: "5",
        count: 0,
        error: 'Enter value'
    }
    const action =SetCounterAC("3","9")
    const endState = ReducerCount(initialState, action)
    const keys = Object.keys(endState)

    expect(keys.length).toBe(4)
    expect(endState.maxValue).toBe('9')
    expect(endState.startValue).toBe('3')
    expect(endState.error).toBe('')
    })