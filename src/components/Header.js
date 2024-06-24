import './header.css'
import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = ({toggleTheme}) => {
    return (
            <header className='header'>
                <nav className='nav-header'>
                    <div className='navLeft'>
                        <ul>
                            <li className='borderNavRight'><NavLink to="/home">Accueil</NavLink></li>
                            <li className='borderNavRight'><NavLink to="/a-propos">A propos</NavLink></li> 
                        </ul>
                    </div>
                    <div className='navRight'>
                        <ul>
                            <li className='toggleButton'><button onClick={toggleTheme}>Toogle Theme</button></li>
                        </ul>
                    </div>
                </nav>
            </header>
            );
};

export default Header;
