import { useReducer } from "react"

export const Reduction=()=>{
//test
    const initialState = {count:0, showText:true}
    
    const reducer = (state,action)=>{
        switch(action.type) {
            case "INCREMENT":
                return {...state, count: state.count + 1}
            case "DECREMENT":
                return {...state, count: state.count - 1}
            case "BYTEN":
                return {...state, count: state.count +10}
            case "TOOGLESHOWTEXT":
                return {...state, showText: !state.showText}
            default :
            return state               
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
        <h3>Use Reducer</h3>

        <button onClick={()=>dispatch({type: "INCREMENT"})}>INCREMENT</button>
        <button onClick={()=>dispatch({type: "DECREMENT"})}>DECREMENT</button>
        <button onClick={()=>dispatch({type:"BYTEN"})}>By Ten</button>
        <button onClick={()=>dispatch({type: "TOOGLESHOWTEXT"})}>TOOGLE TEXT</button>

        {state.showText?
        <p> state value using useReducer : {state.count}</p>
        :
        <></>}
        

        </>
    )
}