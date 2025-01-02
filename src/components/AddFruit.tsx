import { useState } from "react";

export default function AddFruit(props: {
    onReInitialForm : () => void ;
    onSubmitFruit : (fruit : { id: number, nom : string} ) => void ;
    // fruits: {
    //     id: number;
    //     nom: string;
    // }[]; 
    // setFruits :React.Dispatch<React.SetStateAction<{
    //     id: number;
    //     nom: string;
    // }[]>>
}) {
    //state 
    // const { fruits, setFruits } = props;
     const { onReInitialForm, onSubmitFruit } = props;
    const [nouveauFruit, setNouveauFruit] = useState("");
    //comportement

    const handleAddFruit = (event: any) => {
        //  alert("event  " + event);
        event.preventDefault();
        const id = new Date().getTime()
        const nom = nouveauFruit
        // alert("ref: " + inputRef.current.value);
        // const tab = [{ id: id, nom: inputRef.current.value} ]
         const tab = { id, nom } 
        // setFruits(fruits.concat (tab) );

        onSubmitFruit(tab);
        //manipulation du state fruit
        setNouveauFruit("")
        onReInitialForm();
    };

    const handleChange = (event: any) => {
        // alert("handleChange  " + event.target.value);
        setNouveauFruit(event.target.value);
    }
    //render
    return (
        <div>
            <form action="submit" onSubmit={handleAddFruit} >
                {/* <input ref={inputRef} type="text" placeholder="Ajouter un fruit ..." className="border mr-2" /> */}
                < input value={nouveauFruit} type="text" placeholder="Ajouter un fruit ..." className="border mr-2" onChange={handleChange} />
                <button type="submit" className='mb-3 mt-3 bg-[#019901] text-[white] p-2 hover:bg-[green]' > Ajouter </button>
            </form>
        </div>
    );
}

//un composant doit contenir toute la logique dont il est responsable
// on definit les comportements qui manipulent un state la ou ce state est defini