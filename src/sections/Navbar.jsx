import {logo} from '../assets/icons'
import {navLinks} from '../constants'
import { Button } from '../components'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between'>

      {/* LOGO */}

      <img 
      src={logo}
      alt="logo"
      width={86}
      height={40}
      className='ml-2' 
      />
      
      {/* NAVIGATION */}

      <ul className='flex items-center justify-between '>
        {navLinks.map((link) => (
          <li 
            key={link.id}
            className='font-monserrat text-[#616439] hover:text-black transition duration-300'
            >
            <a
              className='px-5 py-3.5'
              href='/'>
              {link.title}
            </a>
          </li>
        ))}
      </ul>

      {/* BUTTON */}
      
      <Button />

      {/* HAMBURGER */}
      
      {/* <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem" viewBox="0 0 24 24" 
        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
        class="lucide lucide-menu" type="Menu"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" 
        y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
      </div> */}

    </nav>
  )
}

export default Navbar