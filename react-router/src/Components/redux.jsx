import { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import {GetPokemon} from "../STATE/SubStates/Pokemon"

export const ReduxT=()=>{
    const dispatch=useDispatch()
    const PokemonDATA= useSelector((state)=>state.Pokemon)

    useEffect (()=> {
        if (PokemonDATA.loading===true) {
            dispatch (GetPokemon())
        }
        
    },[])
    

    return(
        <>
        <select>
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