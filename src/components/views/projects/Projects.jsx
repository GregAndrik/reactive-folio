import React from 'react'
import _cryptonym from '../../../assets/_cryptonym-showcase.png'
import keyforge from '../../../assets/keyforge-showcase.png'
import xo from '../../../assets/x-o-showcase.png'
import './projects.css'

const data = [
  {
    id: 1,
    image: _cryptonym,
    title: '_cryptonym',
    description: 'Inspired by a beloved TV show, this application features text file Encryption and Decryption through the utilization of the CryptoJS algorithm. Designed as a mock project, one that I thoroughly enjoyed working on. It offers a glimpse into the portrayal of a fictional deep government organization\'s web page, reminiscent of what is often depicted on television.',
    github: 'https://github.com/GregAndrik/_cryptonym',
    netlify: 'https://greg-cryptonym.netlify.app'
  },
  {
    id: 2,
    image: keyforge,
    title: 'Keyforge',
    description: 'This application is a tool that I always wanted to build for myself. It is a password generator that allows the user to define parameters and generate passwords securely. Due to my security obsession, I was always skeptical about online password generators and hoped to one day create my own. Without any attached database, the integrity of generated passwords is assured.',
    github: 'https://github.com/GregAndrik/Keyforge',
    netlify: 'https://greg-keyforge.netlify.app'
  },
  {
    id: 3,
    image: xo,
    title: 'X-O',
    description: 'This is a tic-tac-toe game that I developed during my time as a tutor. Tailored to young children, it embraces vibrant colors that resonate with their preferences. My students asked for this and the requirements were clear... They wanted for each player to be able to input their name, and also pick a color. Additionally, they requested an integrated scoring system.',
    github: 'https://github.com/GregAndrik/x-o',
    netlify: 'https://greg-x-o.netlify.app'
  }
]

const Projects = () => {
  return (
    <section className='project-section'>
      <h2 className='projects-mobile-exclusive'>Here is a collection of some of my recent work</h2>
      <div className='container project-container'>
        {
          data.map(({id, image, title, description, github, netlify}) => {
            return (
              <article key={id} className='project-item'>
                <div className='project-item-image'>
                  <img src={image} alt={title}/>
                </div>
                
                <div className='project-info'>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>

                <div className='project-item-cta'>
                  <a href={github} className='primary-button' target='_blank' rel='noopener noreferrer'>Github</a>
                  <a href={netlify} className='primary-button' target='_blank' rel='noopener noreferrer'>Netlify</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects