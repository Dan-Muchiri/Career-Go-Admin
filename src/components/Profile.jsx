import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserLeftSide from './UserLeftSide';
import UserRightSide from './UserRightSide';

const Profile = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://careergo-api.onrender.com/users/${id}`)
            .then(response => response.json())
            .then(data => setUser(data));
    }, [id]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="profile">
            <UserLeftSide user={user} />
            <UserRightSide />
        </div>
    );
}

export default Profile;
