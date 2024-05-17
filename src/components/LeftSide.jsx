import React from 'react';
import Ellipse from './Ellipse';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LeftSide = () => {

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
        <div className="left-side">
            <div className="left-side-title">
                <hr className="line" />
                <h1>DASHBOARD</h1>
            </div>
            <div className="ellipse">
              <Ellipse />
              <h1>ADMIN</h1>
            </div> 
            <div className="left-side-nav">
                <ul>
                    <li>
                        <NavLink to="employers">Employers</NavLink>
                    </li>
                    <li>
                        <NavLink to="jobseekers">Job Seekers</NavLink>
                    </li>
                </ul>
            </div>
            <div>
                <button className='left-side-buttons' onClick={handleLogout}>Log Out</button>
            </div>
              
        </div>
    );
}

export default LeftSide;
