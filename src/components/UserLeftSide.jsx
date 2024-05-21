import React from 'react';
import Verification from './Verification';
import useUserStore from './useUserStore';

const UserLeftSide = () => {
    const { user, isVerified } = useUserStore();

    return (
        <div className="left-side">
            {user && user.role === 'employer' && user.employer.length > 0 && user.employer.map((employer, index) => (
                <div key={index} className='employer-left-side'>
                    <div className="profile-pic">
                        <img src={ employer.picture ||'/Employerlogo.png'} alt={`${employer.username}`} className="employer-picture"/>
                        <p className="verification-status">
                            Verification: {isVerified ? 'Verified' : 'Pending'}
                        </p>
                    </div>
                    <div className="user-details">
                        <p className="user-info"><strong>Company:</strong> {employer.company_name}</p>
                        <p className="user-info"><strong>Email:</strong> {user.email}</p>
                        <p className="user-info"><strong>Phone Number:</strong> {user.phone_number}</p>
                        <p className="user-info"><strong>Role:</strong> {user.role}</p>
                    </div>
                    <div className='left-side-buttons'>
                    <Verification
                        userId={employer.id}
                        route="employers"
                    />
                    </div>
                </div>
            ))}
            {user && user.role === 'jobseeker' && user.jobseeker.length > 0 && user.jobseeker.map((jobseeker, index) => (
                <div key={index} className='employer-left-side'>
                    <div className="profile-pic">
                        <img src={jobseeker?.picture || '/jobseeker.png'} alt={`${jobseeker.username}`} className="employer-picture"/>
                        <p className="verification-status">
                            Verification: {isVerified ? 'Verified' : 'Pending'}
                        </p>
                    </div>
                    <div className="user-details">
                        <p className="user-info"><strong>Username:</strong> {user.username}</p>
                        <p className="user-info"><strong>Email:</strong> {user.email}</p>
                        <p className="user-info"><strong>Phone Number:</strong> {user.phone_number}</p>
                        <p className="user-info"><strong>Role:</strong> {user.role}</p>
                    </div>
                    <div className='left-side-buttons'>
                        <Verification
                            userId={jobseeker.id}
                            route="jobseekers"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserLeftSide;
