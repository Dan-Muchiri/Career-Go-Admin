import React from 'react';
import useUserStore from './useUserStore';
import { useNavigate } from 'react-router-dom';

const Verification = ({ userId, route }) => {
    const { user, isVerified, setIsVerified } = useUserStore(); // Added setUsers from useUserStore
    const navigate = useNavigate();

    const handleVerify = async () => {
        try {
            const response = await fetch(`https://careergo-api.onrender.com/${route}/${userId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    profile_verified: !isVerified
                })
            });

            if (response.ok) {
                setIsVerified(!isVerified);
            } else {
                console.error('Failed to verify user:', response.statusText);
            }
        } catch (error) {
            console.error('Error verifying user:', error);
        }
    };

    const handleReject = async () => {
        try {
            const response = await fetch(`https://careergo-api.onrender.com/users/${user.id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                
                // Optionally, you can perform any cleanup actions here
                alert('User deleted successfully');
                navigate('/dashboard');
            } else {
                console.error('Failed to delete user:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <>
            <button onClick={handleVerify}>
                {isVerified ? 'Unverify' : 'Verify'}
            </button>
            <button onClick={handleReject}>Reject</button>
        </>
    );
}

export default Verification;
