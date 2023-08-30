import { Link } from 'react-router-dom';
import CustomLink from '../shared/CustomLink';
import './navStandard.css'

const NavStandard = () => {
  return (
    <nav className='nav-standard'>
      <Link to='/' className='nav-standard-site-title'>Gregory Andrikopoulos</Link>
      <ul>
        <CustomLink to='/About'>About</CustomLink>
        <CustomLink to='/Projects'>Projects</CustomLink>
        <CustomLink to='/Contact'>Contact</CustomLink>
      </ul>
    </nav>
  )
}

export default NavStandard;