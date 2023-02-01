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
            case "TOOGLESHOWTEXT":
                return {...state, showText: !state.showText}
            default :
            return state               
        }
    }

    const [state, dispatchGodZilla] = useReducer(reducer, initialState)

    return (
        <>
        <h3>Use Reducer</h3>

        <button onClick={()=>dispatchGodZilla({type: "INCREMENT"})}>INCREMENT</button>
        <button onClick={()=>dispatchGodZilla({type: "DECREMENT"})}>DECREMENT</button>
        <button onClick={()=>dispatchGodZilla({type: "TOOGLESHOWTEXT"})}>TOOGLE TEXT</button>

        {state.showText?
        <p> state value using useReducer : {state.count}</p>
        :
        <></>}
        

        </>
    )
}