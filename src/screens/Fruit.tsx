import { useState } from "react"
import { useRef } from "react"
import FruitList from "../components/FruitList";
import AddFruit from "../components/AddFruit";

export function Fruit() {
    //etats
    const [fruits, setFruits] = useState([
        { id: 1, nom: "Abricot" },
        { id: 2, nom: "Banane" },
        { id: 3, nom: "Cerise" },
    ]);

    //assignation du jsx a une variable
    const car = <li key="-1">Tesla</li>;
    const cars = [
        <li key="-2" >Audit</li>,
        <li key="-3">BMW</li>,
        <li key="-5">Clio</li>,
    ];

    const [showForm, setShowForm] = useState(<div></div>);
    // const inputRef = useRef<any>();

    //comportements
    const handleDeleteFruit = (id: number) => {
        // alert("handleDeleteFruit : " + id);
        //1. faire une copie de mon state
        // const fruitsCopy = fruits.slice() ; //creer une copie du tableau
        //le spread operator 
        const fruitsCopy = [...fruits];

        //2. manipuler une copie du state
        //filter : creee un deuxieme tableau en filtrant le 1er selon une condition
        const fruitsCopyUpdated = fruitsCopy.filter(fruit => fruit.id !== id);

        //3. modifier mon state avec mon setter
        setFruits(fruitsCopyUpdated);
    };
    const afficherFruitPref = (fruitNom : string) =>{
        alert("jaime trop ce fruit " + fruitNom);
    }

    const handleAdd = (fruitAAjouter : { id: number, nom : string})=>{
        //1.copie du state
        const fruitCopie = [...fruits]

        //2.manipulation de la copie
        
        fruitCopie.push(fruitAAjouter)

        //3. modification du state avec setter
        setFruits(fruitCopie)
    }
    
    const handleReInitial=() =>{
        let formcopy = showForm
         formcopy = <div></div>
         setShowForm(
            formcopy
        );
    }
    const handleShowForm = () => {
        console.log("handleShowForm  " );
        let formCopy = showForm
        // console.log(formCopy );
        formCopy =<AddFruit onReInitialForm={handleReInitial} onSubmitFruit={handleAdd}/> //fruits={fruits} setFruits={setFruits} 
        
        // if (event.target.value == "") {
            setShowForm(
                formCopy
            );
        // }
        // else{
        //     setShowForm(
        //         <div onChange={handleShowForm}>
        //             <form action="submit" onSubmit={handleAddFruit} >
        //                 {/* <input ref={inputRef} type="text" placeholder="Ajouter un fruit ..." className="border mr-2" /> */}
        //                 <input value={nouveauFruit}  type="text" placeholder="Ajouter un fruit ..." className="border mr-2" onChange={handleChange}/>
        //                 <button type="submit" className='mb-3 mt-3 bg-[#019901] text-[white] p-2 hover:bg-[green]'>Ajouter</button>
        //             </form>
        //         </div>
        //     );
        // }
        return showForm;
    };

    //afficharge
    return (
        <div>
            <h1 className="font-extrabold text-3xl mb-4">liste de Fruit</h1>
            <ul>
                {car}
                {cars}
                {/*  la methode map() cree un 2eme tableau a partit d'un 1er tableau   */}

                <button className='mb-3 mt-3 bg-[blue] text-[white] px-3 py-1 hover:bg-[#010199]' onClick={handleShowForm}>+</button>
                {showForm}
                {fruits.map((fruit) => (
                    //1.passer les donnees du compo parent au compo enfant par les props
                    <FruitList key={fruit.id} 
                    fruitInfo={fruit} 
                    onClick={()=>afficherFruitPref(fruit.nom)}
                    // onClick={()=>handleDeleteFruit(fruit.id)}
                    // onFruitDelete={handleDeleteFruit}
                    />
                ))}
            </ul>
        </div>
    );
}

//gestion du formulaire
// 1. creation du formulaire
// 2. soumission du formulaire
// 3. collecte des donnees du formulaire
// 3.1. cas1: documentGedElementById in react "useRef & ref"
// 3.2. cas2: sync descendance / ascendance 
