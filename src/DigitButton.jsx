import { ACTIONS } from "./App";

export function Digitbutton({dispatch,digit}){
    return<button onClick={()=>dispatch({type:ACTIONS.ADD_DIGIT,payload:{digit}})}>{digit}</button>
}