import { Link } from "react-router-dom";
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className='bg-[#7f1d1d] p-4 flex items-center justify-between'>
      <div className='navbar-heading text-[#feedec]'>
        <h1>Meals <span>APP</span></h1>
      </div>
      <div className='links'>
        <ul className='flex space-x-5 text-white'>
          <Link to="/"><li>Início</li></Link>
          <Link to="/Nome"><li>Receita por Nome</li></Link>
          <Link to="/Letra"><li>Receita por Letra</li></Link>
          <Link to="/Ingrediente"><li>Receita por Ingrediente</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
