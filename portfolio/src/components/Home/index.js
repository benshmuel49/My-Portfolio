 import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/yellowB.webp'
import AnimatedLetters from '../AnimatedLetters';
import'./index.scss';
import bg from './../../assets/images/bg-pic.png'
import Footer from '../Footer';

const Home =()=>{
    const[letterClass,setLetterClass] = useState('text-animate')
    const nameArray = ['e','n']
    const jobArray = [
    'F',
    'u',
    'l',
    'l',
    'S',
    't',
    'a',
    'c',
    'k',
    ' ',
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    ]

useEffect(() => {
    setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 3000)
}, [])
    
 
 return(
    <>
    <div className="container home-page">
        <div className="text-zone">
    <h1>  
        <span className={letterClass}>H</span>
        <span className={`${letterClass}_12`}>i</span>
         <br/> 
         <span className={`${letterClass}_13`}>I</span>
        <span className={`${letterClass}_14`}>'m</span>
    <img src={LogoTitle} alt="developer"/>
    <AnimatedLetters letterClass={letterClass}
   strArray={nameArray}
   idx={15}/>
    <br/>
   <AnimatedLetters letterClass={letterClass}
   strArray={jobArray}
   idx={22}/>
    </h1>
    <h2>
        FullStack Developer / MERN Stack : MongoDb , Express.Js , React , Node.Js</h2>
        <Link to='/contact' className='flat-button'>CONACT ME </Link>
</div>
{/* <Logo /> */}
<img className='draw-bg' src={bg} alt="dy"/>
    </div>
    <div className='home-footer'>  
<Footer/>
    </div>
    <Loader type ="pacman"/>
    </>
   
 )
 }


 export default Home