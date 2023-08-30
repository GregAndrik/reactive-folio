import Platforms from './platforms/Platforms'
import { FaComputer } from 'react-icons/fa6';
import { BiLogoReact } from 'react-icons/bi'
import resume from '../../../assets/CV_Andrikopoulos.pdf'
import Footer from '../../footer/Footer'
import './home.css'

const Home = () => {
  return (
    <>
      <header className='container'>
        <div className='mobile-exclusive'>
          <h3 className='mobile-exclusive-site-title'>Gregory Andrikopoulos</h3>
          <div className='mobile-exclusive-platforms'>
            <Platforms />
          </div>
        </div>
        <section>
          <div className='home-container'>        
            <h1>Hi, I am Greg | <span style={{color:'var(--color-accent)'}}>Computer <br/>Engineer</span></h1>
            <div className='standard-exclusive-platforms'>
              <Platforms />
            </div> 
            <p className='home-text home-text-length'>   
              Lifelong learner in pursuit of turning passion <FaComputer className='align-icons home-icons'/> into profession. 
              Looking forward to meet new people and develop projects as a team! <BiLogoReact className='align-icons home-icons'/>
            </p>
            <a href={resume} download className='primary-button long-button'>Download Resume</a>  
          </div>
        </section>
      </header>
      <Footer />
    </>
  )
}

export default Home