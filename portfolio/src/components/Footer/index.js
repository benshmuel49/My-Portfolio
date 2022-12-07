import './index.scss'
import React from 'react'
import {faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon,} from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <div className='footer-container'>
      
        <ul className='contact-ways'>
          <h1 className='footer-title'> Click to talk with me </h1>
    <li>
        <a target="_blank"
         rel='noreferrer'
          href='https://www.linkedin.com/in/ben-shmuel-16a67b249/'>
            <FontAwesomeIcon  icon={faLinkedin} color='#4d4d4e'/>
        </a>
    </li>
    <li>
        <a target="_blank"
         rel='noreferrer'
          href='https://github.com/benshmuel49'>
            <FontAwesomeIcon  icon={faGithub} color='#4d4d4e'/>
        </a>
    </li>
    <li>
        <a target="_blank"
         rel='noreferrer'
          href='https://wa.me/972525666474'>
            <FontAwesomeIcon  icon={faWhatsapp} color='#4d4d4e'/>
        </a>
    </li>
</ul>
    </div>
  )
}

export default Footer