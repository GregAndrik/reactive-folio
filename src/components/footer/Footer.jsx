import {HiOutlineMail} from 'react-icons/hi';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className='footer-copyright'>
        <h5><HiOutlineMail className='align-icons'/> andrikgreg@gmail.com</h5>
        <p>&copy; {new Date().getFullYear()} Gregory Andrikopoulos. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;