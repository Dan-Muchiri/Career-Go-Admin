import React, { useEffect, useState } from 'react';

const UserList = ({ fetchRoute, filter }) => {
    const [users, setUsers] = useState([]);

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
            });
    }, [fetchRoute, filter]);

    return (
        <div className="user-list">
            {users.map(user => (
                <div key={user.id} className="user">
                    <span>{user.company_name}</span>
                    <span>{user.first_name}</span>
                </div>
            ))}
        </div>
    );
}

export default UserList;
