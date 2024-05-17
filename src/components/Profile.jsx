import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserLeftSide from './UserLeftSide';
import UserRightSide from './UserRightSide';
import useUserStore from './useUserStore';

const Profile = () => {
    const { id } = useParams();
    const { user, setUser } = useUserStore();

    useEffect(() => {
        fetch(`https://careergo-api.onrender.com/users/${id}`)
            .then(response => response.json())
            .then(data => setUser(data));
    }, [id, setUser]);

    if (!user) {
        return (
            <div className="loading-container">
                <div className="loading">Loading...</div>
            </div>
        );
    }

    return (
        <div className="profile">
            <UserLeftSide />
            <UserRightSide />
        </div>
    );
};

export default Profile;
