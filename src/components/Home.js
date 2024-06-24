import imageLakeMontain from '../assets/lakeMontain.jpg'
import './home.css'

import React from 'react';

const home = () => {
    return (
        <div>
            <h1>Accueil</h1>
            <img className='responsive-image' src={imageLakeMontain} alt='imageMontagneLac'/>
        </div>
    );
};

export default home;
