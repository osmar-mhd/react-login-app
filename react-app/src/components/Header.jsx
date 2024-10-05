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
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/login' title='Login'>
                            <i className='material-icons'>login</i>
                            <span>Login</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/profile' title='Profile'>
                            <i className='material-icons'>account_circle</i>
                            <span>Profile</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;