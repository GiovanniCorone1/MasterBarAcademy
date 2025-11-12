import Facebook from "../assets/Facebook"
import Instagram from '../assets/Instagram';
import { Link } from 'react-scroll';
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="py-4 md:px-36 px-2 font-medium bg-radial-home">
      <div className="flex justify-between items-center border-t border-[#f0f9ff] pt-8">
        <nav className="flex flex-col gap-4 text-[#f0f9ff]/70  font-semibold font-body text-lg">
          <Link to="calculadora" smooth={true} duration={500} className='hover:text-[#f0f9ff]/90 transition-colors duration-500 cursor-pointer'>
            Master Bar Academy
          </Link>
          <a href="" className='hover:text-[#f0f9ff]/90 transition-colors duration-500' target="_blank" rel="noopener noreferrer">Recetas</a>
          <a href="https://www.elitec.edu.pe/" className='hover:text-[#f0f9ff]/90 transition-colors duration-500' target="_blank" rel="noopener noreferrer">Favoritos</a>
          <a href="https://www.elitec.edu.pe/" className='hover:text-[#f0f9ff]/90 transition-colors duration-500' target="_blank" rel="noopener noreferrer">Generar con IA</a>
        </nav>
        <div className='gap-4 flex flex-col '>
          <div className='flex justify-between'>
            <Instagram/>
            <Facebook/>
          </div>
        </div>
      </div>
      <p className='flex justify-center my-4 text-[#f0f9ff]/60 font-semibold font-body'>© Master Bar Academy {year}, Todos los derechos reservados</p>
    </footer>
  )
}

export default Footer
