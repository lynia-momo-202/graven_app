import { BsLink } from 'react-icons/bs'

export const Ressources =() => {
    return(
        <main>
            <h3 className="font-extrabold text-3xl mb-4">Ressources de la chaine</h3>

            <ul>
                <li className='flex items-center'><BsLink/><a className="hover:underline ml-2"  target="_blanck" href="https://python.org">Telecharger python</a></li>
                <li className='flex items-center'><BsLink/><a className="hover:underline ml-2" target="_blanck" href="https://github.com/">Telecharger pack ressources pygame</a></li>
                <li className='flex items-center'><BsLink/><a className="hover:underline ml-2" target="_blanck" href="https://youtube.com/">voir ma nouvelle video</a></li>
            </ul>
        </main>
    );
}