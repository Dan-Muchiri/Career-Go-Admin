import React, { useState } from 'react';
import UserList from './UserList';

const Employers = () => {
    const [filter, setFilter] = useState('All');

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    return (
        <div className="right-side">
            <h1>EMPLOYERS</h1>
            <div className='list-nav'>
                <nav className="right-side-nav">
                    <ul>
                        <li onClick={() => handleFilterChange('All')}>All</li>
                        <li onClick={() => handleFilterChange('Verified')}>Verified</li>
                        <li onClick={() => handleFilterChange('Pending')}>Pending</li>
                    </ul>
                </nav>
                <div className="user-list-container">
                    <UserList fetchRoute="https://careergo-api.onrender.com/employers" filter={filter} />
                </div>
            </div>
        </div>
    );
}

export default Employers;
