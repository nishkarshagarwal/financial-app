import react from 'react';
import './Hero.css'; 

const Hero = () => {
    return (
        <div className='hero'>
            <div className="content">
                <p>Call us</p>
                <p>+1 505-333-3333</p>
                <p>Because Money</p>
                <p>Doesn't comes with instruction</p>
                <button href="/" className='button'>Free Consultation</button>
            </div>
        </div>
    )
}

export default Hero;