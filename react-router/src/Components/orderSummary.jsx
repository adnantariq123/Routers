import {useNavigate} from "react-router-dom"

export const OrderSummary=()=>{
    const goBack = useNavigate()
    return(
        <div> Order Confirmed! <button onClick={()=>goBack(-1)}> go back</button></div>
    )
}