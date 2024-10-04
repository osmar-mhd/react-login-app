import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Section/Login';
import Profile from './Section/Profile'
import Home from './Section/Home'

function Main() {
    return (
        <Router>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/profile' element={<Profile/>} />
                <Route path='/home' element={<Home/>} />
            </Routes>
        </Router>
    );
}

export default Main;