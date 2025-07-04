import {createContext,useState}from "react";
export const BusquedaContext=createContext();

export function BusquedaProvider({children}){
    const [terminoBusqueda,setTerminoBusqueda]=useState("");

    return(

        <BusquedaContext.Provider value={{terminoBusqueda,setTerminoBusqueda}}>{children}</BusquedaContext.Provider>
    )
}
