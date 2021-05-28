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
                        <Link href="https://github.com/jaeehan" className='nav-links' onClick={closeMobileMenu}>
                            Resume
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/github' className='nav-links' onClick={closeMobileMenu}>
                            GitHub
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/linkedin' className='nav-links' onClick={closeMobileMenu}>
                            LinkedIn
                        </Link>
                    </li>
                    
                    <li>
                        <Link to='/Email' className='nav-links-mobile' onClick = {closeMobileMenu}>
                            Email
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle= 'btn--outline'>Email</Button>}
            </div>
        </nav>
        </>
    )
}

export default Navbar;
