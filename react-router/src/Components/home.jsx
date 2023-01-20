import { useNavigate } from "react-router-dom";

export const Home=()=>{
    const Navigate = useNavigate()
    return(
    <div>Home
        <button onClick={()=>Navigate("order-summary")}>Place Order</button>
    </div>)
}