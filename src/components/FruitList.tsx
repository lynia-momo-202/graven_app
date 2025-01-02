
//recuperer les props du composant parent
export default function FruitList(props: { fruitInfo: { id: number; nom: string }; onClick: () => void; }){
    
    //state
// const fruitInfo =  props.fruitInfo;
// const onFruitDelete = props.onFruitDelete;

 //destructuring d'objet
const {fruitInfo , onClick} = props

    //comportements

    //affichage(render)

    return  <li  className="mb-4">{ fruitInfo.id} - { fruitInfo.nom}
    {/* raise the event : faire remonter l'evenement dans les props du composant */}
                <button className='ml-2 bg-[red] text-[white] py-1 px-3 hover:bg-[#990201]' onClick={onClick}>X</button>
            </li>;
}
// key est precise a l'exterieur du composant