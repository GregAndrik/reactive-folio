import CustomLink from '../shared/CustomLink';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { MdOutlineWorkOutline } from 'react-icons/md'
import { BiMessageSquareDetail } from 'react-icons/bi'
import './navMobile.css'; 

const NavMobile = () => {
  return (
    <nav className='nav-mobile'>
      <CustomLink to='/' className='nav-mobile-link'><AiOutlineHome /></CustomLink>
      <CustomLink to='/About' className='nav-mobile-link'><AiOutlineUser /></CustomLink>
      <CustomLink to='/Projects' className='nav-mobile-link'><MdOutlineWorkOutline /></CustomLink>
      <CustomLink to='/Contact' className='nav-mobile-link'><BiMessageSquareDetail /></CustomLink>
    </nav>
  );
};

export default NavMobile;