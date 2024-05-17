import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserList = ({ fetchRoute, filter }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(fetchRoute)
            .then(response => response.json())
            .then(data => {
                if (filter === 'All') {
                    setUsers(data);
                } else if (filter === 'Verified') {
                    setUsers(data.filter(user => user.profile_verified === true));
                } else if (filter === 'Pending') {
                    setUsers(data.filter(user => user.profile_verified === false));
                }
                setLoading(false);  // Set loading to false after data is fetched
            });
    }, [fetchRoute, filter]);

    const handleUserClick = (id) => {
        navigate(`/user/${id}`);
    };

    if (loading) {
        return (
            <div className="loading-container">
                <div className="loading">Loading...</div>
            </div>
        );
    }

    return (
        <div className="user-list">
            {users.map(user => (
                <div key={user.id} className="user" onClick={() => handleUserClick(user.user.id)}>
                    <span>{user.company_name}</span>
                    <span>{user.first_name}</span>
                </div>
            ))}
        </div>
    );
}

export default UserList;
