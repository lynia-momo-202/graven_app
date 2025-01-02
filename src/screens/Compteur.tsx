import {useState } from "react"
export function Compteur(){
    //state (donnees,etats)

    ///Le hook 'useState'
    const [Compteur, setCompteur ] = useState(1);

    //comportements
    const handleCompteur =()=>{
        // console.log("handleCompteur");
        // alert("handleCompteur");
        // Compteur = Compteur+1; 
        //toujours passer par le setter pour la modification d'un etat
        setCompteur(Compteur+1);
        //  alert(Compteur)
    }

    //affichage(render)
    return(
        <div>
           <h1 className="font-extrabold text-3xl mb-4">Compteur</h1> 
           <h1 className="font-extrabold text-xl mb-4">{Compteur}</h1>
           <button className='bg-[blue] text-[white] p-2 hover:bg-[#010199]' onClick={handleCompteur}>Incremente</button>
        </div>
    )
}

