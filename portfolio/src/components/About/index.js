import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import {Loader} from 'react-loaders'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import Footer from '../../components/Footer/index.js'

const About = () => {
    const[letterClass,setLetterClass] = useState('text-animate')

    useEffect(() => {
       setTimeout(() => {
         return   setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (

        <>
<div className='container about-page'>
    <div className='text-zone'>
<h1 className='title'>
    <AnimatedLetters  
    letterClass={letterClass}
    strArray={['A','b','o','u','t',' ','m','e']}
    idx={15}
    />
</h1>
<p>
I’m very ambitious FullStack developer seeking for my next position in
            the high-tech industury with the opportunity to work with the latest
            technologies on challenging and diverse projects.
</p>
<p>
I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          
</p>
<p>

If I need to define myself in one sentence that would be a freindly human 
, resposeable, know how to run mission from the start to mthe end ,
            working great under pressure and very loyal and commmit to the place that I work in.
</p>
    </div>

    <div className='stage-cube-cont'>
       < div className='cubespinner'>
        <div className='face1'>
            <FontAwesomeIcon icon={faReact} color="#5Ed4f4"/>

        </div>
        <div className='face2'>
            <FontAwesomeIcon icon={faNodeJs} color="#91c63d"/>

        </div>
    
        <div className='face3'>
            <FontAwesomeIcon icon={faJsSquare} color="#efd81d"/>

        </div>
        <div className='face4'>
            <FontAwesomeIcon icon={faHtml5} color="#F06529"/>

        </div>
        <div className='face5'>
            <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>

        </div>
        <div className='face6'>
            <FontAwesomeIcon icon={faGitAlt} color="#ec4d28"/>

        </div>

       </div>

    </div>
    {/* <BarLoader color="#36d7b7" /> */}
 <div className='footer-area'>
 <Footer/>
 </div>
</div>
<Loader type="pacman"/>
</>
    )
}

export default About