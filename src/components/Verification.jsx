import React from 'react';
import useUserStore from './useUserStore';

const Verification = ({ userId, route }) => {

    const { isVerified, setIsVerified} = useUserStore();

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

    return (
        <>
            <button onClick={handleVerify}>
                {isVerified ? 'Unverify' : 'Verify'}
            </button>
            <button >Reject</button>
        </>
    );
}

export default Verification;
