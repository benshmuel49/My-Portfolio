import './index.scss';
import LogoS from '../../../assets/images/bletterpng.png';
import {  useRef} from 'react'


const Logo = () => {

    const bgRef = useRef ();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef ();


    return(
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} className='soild-logo' src={LogoS} alt="B"/>


         
        </div>
    )
}

export default Logo