import React from 'react';

const NavBar = () => {
    return (
        <div className="navbar">
            <div className='logo'>
                <img src="logo.png" alt="Logo" 
                style={{
                        height: '34px',
                        borderRadius: '8px',
                        backgroundColor: '#85BDFF',
                        opacity: '70%'
                    }}/>
            </div>
            <div className="links">
                <a href="#">DASHBOARD</a>
                <a href="#">LOGOUT</a>
            </div>
        </div>
    );
}

export default NavBar;
