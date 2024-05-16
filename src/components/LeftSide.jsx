import React from 'react';
import Ellipse from './Ellipse';

const LeftSide = () => {
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
            <div className='left-side-nav'>
                <ul>
                    <li><a href="#">Employers</a></li>
                    <li><a href="#">JobSeekers</a></li>
                </ul>
            </div>
            <div>
                <button className='left-side-button'>Log Out</button>
            </div>
              
        </div>
    );
}

export default LeftSide;
