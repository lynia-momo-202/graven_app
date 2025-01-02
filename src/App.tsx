import './App.css';
import { Home } from './screens/Home';
import { Ressources } from './screens/Ressources';
import { Routes, Route, NavLink } from 'react-router-dom';
import { Contact } from './screens/Contact';
import { TutoVi } from './screens/TutoVi'

function App() {
  return (
    <div className='container mt-10' >
      <header className='mb-5 flex justify-between mb-5 items-center'>
        <img className='w-10' src="images/logo.png" alt="logo" />
        <nav className='flex justify-end'>
          <NavLink className='mr-3' style={({isActive})=>({fontWeight: isActive ? 'bold' : 'normal'})} to='/'>Accueil</NavLink><br></br>
          <NavLink className='mr-3' style={({isActive})=>({fontWeight: isActive ? 'bold' : 'normal'})} to='/Ressources'>Ressources</NavLink><br></br>
          <NavLink className='mr-3' style={({isActive})=>({fontWeight: isActive ? 'bold' : 'normal'})} to='/tutoVi'>Tuto vi</NavLink><br></br>
          <NavLink className='mr-3' style={({isActive})=>({fontWeight: isActive ? 'bold' : 'normal'})} to='/Contact'>Contact</NavLink>
        </nav>
      </header>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Ressources' element={<Ressources />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/tutoVi' element={<TutoVi/>} />
      </Routes>

      <footer>

      </footer>
    </div>
  );
}

export default App;
