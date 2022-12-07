import React from "react";
import Loader from "react-loaders";
import { useState , useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";
import './index.scss';
import management from './../../assets/images/management .png'
import addoption from './../../assets/images/addption.png'
import zrara from './../../assets/images/zrara.png'
import kayak from './../../assets/images/kayak.png'
import Footer from './../Footer/index'


const Portfolio = ()=>{
    const[letterClass,setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          return   setLetterClass('text-animate-hover')
         }, 3000)
     }, [])

    return(
        <>
    <div className="container portfolio-page">
        <h1 className="title">
           <AnimatedLetters 
           letterClass={letterClass}
           idx={15} strArray={"My Projects".split("")}
           />
        </h1>
    <div className="projects-container">
        <div className="project-1">
            <h6 className="title"> <AnimatedLetters 
                letterClass={letterClass}
                idx={15} strArray={"Veterinary management website ".split("")}
                /> 
           </h6> 
          
           <p>
           management website for the municipality of Dimona based on 3 platforms and combine them together, 
            the citizens of the city report about lost/forsaken dog׳s around the city on the dedicated report website, their reports 
            arrives at the management website and the municipality workers know to find those dogs and treat them by 
            sending for adoption or returning them to the dog owners .
            <h4>
            in that project, I've made use of redux, reactJS, and nodeJs.
            ,MongoDB,CSS , and libraries as : bootstrap, socket, bycrypt .</h4>
        
           </p>
           <a target="_blank"
         rel='noreferrer'
          href='https://github.com/benshmuel49/Final-Project'>
<img src={management} width={490}
/></a>

        </div>
        <div className="project-2">
        <h6 className="title"> <AnimatedLetters 
                letterClass={letterClass}
                idx={15} strArray={"adoption website for Dimona citizens ".split("")}
                />
           </h6>
           <p>
           this website was built in 30 hours hackathon it primary purpose is to bring the adoption options from the previous part management 
        website to the citizens of Dimona, it shows them the dogs in the municipality kennel that could be adopted by them 
        and also have an option for leaving details for a future dog that the client wants to adopt and right now doesn't shows on the 
        the site, also there is a volunteering part the website made for citizens that would like to volunteer to help with the dogs and get its details directly from the management site and updated in real-time 
        by the municipality workers.<h4>
        in that project, I've made use of redux, reactJS, and nodeJs.
            ,MongoDB,CSS , and libraries as : bootstrap, email.js.</h4>
        </p>

        <a target="_blank"
         rel='noreferrer'
          href='https://github.com/benshmuel49/AdoptionSite'>
        <img src={addoption} width={490}
        /></a>

        </div>
        <div className="project-3">

        <h6 className="title"> <AnimatedLetters 
                letterClass={letterClass}
                idx={15} strArray={"Ecommerce shop".split("")}
                />
           </h6> 
        
           <p>
           Ecommerce shop that meant to show to products of the shop and sell them for subscribe users with option 
           to register and buy it with paypal.
           <h4>
        in that project, I've made use of redux, reactJS, and nodeJs.
            ,MongoDB,CSS , and libraries as : bootstrap,bycrypt.
            </h4>
            </p>

            <a target="_blank"
         rel='noreferrer'
          href='https://github.com/benshmuel49/Zrara'>
            <img src={zrara} width={490}
/>           </a>
        </div>
        <div className="project-4">

        <h6 className="title"> <AnimatedLetters 
                letterClass={letterClass}
                idx={15} strArray={" Eco  project website ".split("")}
                />
           </h6>
 
        </div>
    <p>
    The ecologic idea website is built to show the public its advantages of it and present the idea 
        as something possible to do in Israel, the main idea of it is that people can get a free kayak sailing in exchange for cleaning the river/sea with it while sailing the kayak, the kayak contains a trash can and stick to catches the trash with it  at
         the end of the sailing they bring with them the trash instead pay on the sailing .
         <h4>
         in that project, I've made use of redux, reactJS, 
            CSS , and libraries as : bootstrap 
            </h4>
    </p>
   <a target="_blank"
         rel='noreferrer'
          href='https://github.com/benshmuel49/Mid-Term-Project' >
    <img src={kayak} width={490} 
/>
</a>
    </div>
    </div>
    
    <div className="protfolio-footer">
    <Footer/>
    </div>
    <Loader type="pacman"/>
    </>
    )
}

export default Portfolio