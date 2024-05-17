import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const response = await fetch('https://careergo-api.onrender.com/admin_logout', {
                method: 'DELETE',
            });
    
            if (response.ok) {
                navigate('/');
            } else {
                console.error('Logout failed');
            }
        } catch (error) {
            console.error('Error logging out:', error);
        }

    };

    return (
        <div className="navbar">
            <div className='logo'>
                <img src="/logo.png" alt="Logo" 
                style={{
                        height: '34px',
                        borderRadius: '8px',
                        backgroundColor: '#85BDFF',
                        opacity: '70%'
                    }}/>
            </div>
            <div className="links">
            <Link to="/dashboard">DASHBOARD</Link>
                <a href="#" onClick={handleLogout}>LOGOUT</a>
            </div>
        </div>
    );
};

export default NavBar;
