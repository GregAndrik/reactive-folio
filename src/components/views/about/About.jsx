import React from 'react';
import artwork from '../../../assets/artwork.png';
import Bio from './Bio';
import './about.css';

const About = () => {
  return (
    <section>
      <div className='container about-container'>
        <div className='about-artwork'>
          <div className='about-artwork-image'>
            <img src={artwork} alt=''/>
          </div>
        </div>
        <div className='bio'>
          <Bio />
        </div>
      </div>
    </section>
  )
}

export default About;