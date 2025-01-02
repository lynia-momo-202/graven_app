import { FaTwitter,FaDiscord, FaYoutube } from 'react-icons/fa';

export const SocialLinks = () =>{
    return(
        <section className="mt-5 mb-5">
            <h3 className="text-2xl font-extrabold">
                Mes reseaux sociaux
            </h3>

            <ul className="mt-5">
                <li className='hover:text-[blue] flex items-center'><FaYoutube/><a className="ml-2" target="_blanck" href="https://youtube.com/user/Gravenilvectuto">YouTube</a></li>
                <li className='hover:text-[blue] flex items-center'><FaTwitter/><a className="ml-2" target="_blanck" href="https://twitter.com/Gravenilvec">Twitter</a></li>
                <li className='hover:text-[blue] flex items-center'><FaDiscord/><a className="ml-2" target="_blanck" href="https://discord.gg/Graven">Discord</a></li>
            </ul>
        </section>
    );
}