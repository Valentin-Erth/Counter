import React from "react";
import s from "./Counter.module.css";
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IconButton from '@mui/material/IconButton';
type SeperButton = {
    name: string
    callBack: () => void
    disabled?: boolean

}
export const SuperButton = (props: SeperButton) => {
    return (
        <Button variant={"contained"} size="small"
                className={s.button}
                onClick={props.callBack}
                disabled={props.disabled}
                color={"info"}
        >{props.name}</Button>
        // <button className={s.button}
        //         onClick={props.callBack}
        //         disabled={props.disabled}
        // >{props.name} </button>
    )
}