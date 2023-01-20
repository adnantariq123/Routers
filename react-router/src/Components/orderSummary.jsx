import {useNavigate} from "react-router-dom"

export const OrderSummary=()=>{
    const goBack = useNavigate()
    return(
        // the (-1) would basically taek you to whatever pervious page you came from
        // HOWEVER the pervious page has  {replace:true})}which is why u dont not see it
        <div> Order Confirmed! <button onClick={()=>goBack(-1)}> go back</button></div>
    )
}