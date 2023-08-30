import React from 'react'
import avatar from '../../../assets/dummy-avatar.png';
import Bio from './Bio';
import './about.css'

const About = () => {
  return (
    <section>
      <div className='container about-container'>
        <div className='about-avatar'>
          <div className='about-avatar-image'>
            <img src={avatar} alt=''/>
          </div>
        </div>
        <div className='bio'>
          <Bio />
        </div>
      </div>
    </section>
  )
}

export default About