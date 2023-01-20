import { useNavigate } from "react-router-dom";

export const Home=()=>{
    const Navigate = useNavigate()
    return(
    <div>Home
        {/* what does  {replace:true})} do???
        If you need to replace the current location instead of push a new one onto the history stack, use navigate(to, { replace: true }). If you need state, use navigate(to, { state }).
        */}
        <button onClick={()=>Navigate("order-summary", {replace:true})}>Place Order</button>
    </div>)
}