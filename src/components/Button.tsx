import { useState } from "react";



export function Button (){
    const [contar,setContar] = useState(0);

    function incrementar (){
        setContar  (contar + 1) ;
        console.log(contar);
    }
    return(
        <button onClick={incrementar}>{contar}</button>
    )
}