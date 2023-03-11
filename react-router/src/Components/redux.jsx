import { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import {GetPokemon} from "../STATE/SubStates/Pokemon"

export const ReduxT=()=>{
    const dispatch=useDispatch()
    const PokemonDATA= useSelector((state)=>state.Pokemon)

    useEffect (()=> {
        dispatch (GetPokemon())
    },[])
    

    return(
        <>
        <select name="cars" id="cars">
         {
            PokemonDATA.PokiData.map((data)=>{
                return (
                    <option key={data.id} value={data.id}>{data.name}</option>
                )
            })
         }
         </select>
        </>
    )

}