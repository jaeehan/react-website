import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else{
            setButton(true);
        }
    };

    //this won't make the email button show when refreshing on minimized window
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);


    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    J Han Aye 
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <a href="https://jaeehan.github.io/resume" className='nav-links' onClick={closeMobileMenu}>
                            Resume
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href="https://github.com/jaeehan" className='nav-links' onClick={closeMobileMenu}>
                            GitHub
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href="https://www.linkedin.com/in/jaeehan/" className='nav-links' onClick={closeMobileMenu}>
                            LinkedIn
                        </a>
                    </li>
                    
                    <li>
                        <a href="mailto:jaeehan@gmail.com" className='nav-links' onClick={closeMobileMenu}>
                            Email
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar;
