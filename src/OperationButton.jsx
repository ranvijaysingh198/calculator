import { ACTIONS } from "./App";

export function Operationbutton({dispatch,operation}){
    return<button onClick={()=>dispatch({type:ACTIONS.CHOOSE_OPERATION,payload:{operation}})}>{operation}</button>
}