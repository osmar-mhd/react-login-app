import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/header.css';


function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to='/' title='Home'>
                            <i className='material-icons'>home</i>
                        </Link>
                    </li>
                    <li>
                        <Link to='/login' title='Login'>
                            <i className='material-icons'>login</i>
                        </Link>
                    </li>
                    <li>
                        <Link to='/profile' title='Profile'>
                            <i className='material-icons'>profile</i>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;