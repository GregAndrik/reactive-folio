import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { AiFillMail } from 'react-icons/ai'
import './platforms.css'

const Platforms = () => {
  // rel for security on old browsers
  return (
    <div className='platforms'>
      <a href='https://www.linkedin.com/in/gregory-andrik/' target='_blank' rel='noopener noreferrer'><BsLinkedin /></a>
      <a href='https://github.com/GregAndrik' target='_blank' rel='noopener noreferrer'><FaGithub /></a>
      <a href='mailto:andrikgreg@gmail.com' target='_blank' rel='noopener noreferrer'><AiFillMail /></a>
    </div>
  )
}

export default Platforms