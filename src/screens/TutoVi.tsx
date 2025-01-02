// import { Route, Routes, NavLink } from 'react-router-dom'
import { Compteur } from './Compteur';
import { Contact } from './Contact';
import { Fruit } from "./Fruit";

export function TutoVi() {
    return (
        <div className='flex'>
            {/* <nav>
                <NavLink to='/tutoVi/'> Compteur </NavLink>
                <NavLink to='/tutoVi/Fruit'> Liste de Fruit </NavLink>
                <NavLink to='/tutoVi/autre'> autre </NavLink>
            </nav>
            <section>
                <Routes>
                    <Route path='/tutoVi/' element={<Compteur/>}  />
                    <Route path='/tutoVi/Fruit' element={< Fruit />} />
                    <Route path='/tutoVi/autre' element={< Compteur />} />
                </Routes>
            </section> */}
            <nav className='mr-10 bg-[#500202] text-[white] p-5 '>
                <ul>
                    <li className='hover:text-[red] mt-2 mb-4 text-xl'> <a href="#compteur">Compteur </a></li>
                    <li className='block hover:text-[red] mt-2 mb-4 text-xl' > <a href="#fruit">Liste de Fruit </a> </li>
                    <li className='hover:text-[red] mt-2 mb-4 text-xl' > <a href="#Contact">Contact </a> </li>
                </ul>
            </nav>
            
            <section className='w-100 '>
                <div id='compteur' className='mb-10'>
                    <Compteur />
                </div>

                <hr/>

                <div id='fruit' className=' mb-10 mt-10'>
                    < Fruit />
                </div>
                
                <hr/>

                <div id='Contact' className='mb-10 mt-10'>
                    <Contact />
                </div>
            </section>
        </div>
    );
}