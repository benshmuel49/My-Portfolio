import Loader from 'react-loaders'
import { useState , useEffect,} from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Footer from '../../components/Footer/index.js'


const Contact = () => {
    const[letterClass,setLetterClass] = useState('text-animate')

    useEffect(() => {
       setTimeout(() => {
         return   setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    return(
                <>
        <div className="container contact-page">
        <div className='text-zone'> 

    <h1 className='title'>
        <AnimatedLetters
        letterClass={letterClass}
         strArray={['C', 'o', 'n', 't','a', 'c', 't',' ','M','e']}
        idx ={15}
        />
    </h1>

    <p>
    I am interested in freelance opportunities – especially
            ambitious or large projects , I love challenges. However, if you have other request or
            question, don’t hesitate to contact me using below form
            either.
    </p> 
    <div className='contact-form'>
        <form>
            <ul>
                <li className='half'>
                    <input type="text" name ="name" placeholder='Name' required/>
                </li>
                <li className='half'>
                    <input type="email"
                     name ="name" 
                     placeholder='Email' 
                     required
                     />
                </li>
                <li>
                    <input placeholder= "Subject" type="text" name="subject" required/>
                </li>
                <li>
                    <textarea 
                    placeholder='Message'
                    name='messsage'
                    required
                    ></textarea>
                </li>
                <li>
                    <input type="submit" className='flat-button' value="SEND"/>
                </li>
            </ul>
        </form>

    </div>

   
   
    
   
    
    

</div>
<div className='info-map'>
    Ben Shmuel ,
    <br/>
        Israel,
        <br/>
        1939 Pointe Lane <br/>
        Jerusalem <br/>
        <span>Benshmuel49@gmail.com</span>

</div>
<div className='map-warp'>
<MapContainer center={[ 31.771959,35.217018]} zoom={8} h>
<TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
<Marker position={[ 31.771959,35.217018]}>
            <Popup>Ben lives here , come over for a cup of coffee </Popup>
</Marker>
</MapContainer>

</div>
<Footer />
</div>

<Loader type='pacman'/>
        </>
    )
}


export default Contact