import React from 'react';

const UserLeftSide = ({ user }) => {
    return (
        <div className="left-side">
            {user.employer.length > 0 && user.employer.map((employer, index) => (
                <div key={index} className='employer-left-side'>
                    <div className="profile-pic">
                        <img src={'/Employerlogo.png'} alt={`${user.username}`} className="employer-picture"/>
                        <p className="verification-status">
                            Verification: {employer.profile_verified ? 'Verified' : 'Pending'}
                        </p>
                    </div>
                    <div className="user-details">
                        <p className="user-info"><strong>Company:</strong> {employer.company_name}</p>
                        <p className="user-info"><strong>Email:</strong> {user.email}</p>
                        <p className="user-info"><strong>Phone Number:</strong> {user.phone_number}</p>
                        <p className="user-info"><strong>Role:</strong> {user.role}</p>
                    </div>
                    <div>
                        <button className='left-side-button' >Verify</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default UserLeftSide;
