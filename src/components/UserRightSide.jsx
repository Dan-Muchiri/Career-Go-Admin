import React from 'react';
import Card from './Card';
import Files from './Files'; // Import the Files component
import Payments from './Payments';
import Verification from './Verification';
import useUserStore from './useUserStore';

const UserRightSide = () => {
    const { user} = useUserStore();
    return (
        <div className="right-side">
            {user.role === 'employer' && user.employer.length > 0 && user.employer.map((employer, index) => (
                <div key={index} className='employer-right-side'>
                    <Card title="Profile">
                        <p><span>Company:</span> {employer.company_name}</p>
                        <p><span>Username:</span> {user.username}</p>
                    </Card>
                    <Card title="Payment Details">
                        <Payments payments={employer.payments} />
                    </Card>
                    <Card title="Files">
                        <Files files={employer.files} /> {/* Pass employer's files to Files component */}
                    </Card>
                    <Card title="Testimonial">
                        <p>{employer.testimonial}</p>
                        <p><span>App Rating:</span> {employer.app_rating}/5</p>
                    </Card>
                    <div className='right-buttons'>
                        <Verification
                            userId={employer.id}
                            route="employers"
                        />
                    </div>
                </div>
            ))}
            {user.role === 'jobseeker' && user.jobseeker.length > 0 && user.jobseeker.map((jobseeker, index) => (
                <div key={index} className='employer-right-side'>
                    <Card title="Profile">
                        <p><span>First Name:</span> {jobseeker.first_name}</p>
                        <p><span>Last Name:</span> {jobseeker.last_name}</p>
                        <p><span>User Name:</span> {user.username}</p>
                        <p><span>Job Category:</span> {jobseeker.job_category}</p>
                        <p><span>Availability:</span> {jobseeker.availability}</p>
                        <p><span>Salary Expectation:</span> {jobseeker.salary_expectation}</p>
                        <p><span>Github:</span> {jobseeker.github_link}</p>
                        <p><span>LinkedIn:</span> {jobseeker.linkedin_link}</p>
                    </Card>
                    <Card title="Skills">
                        <p>{jobseeker.skills}</p>
                    </Card>
                    <Card title="Experience">
                        <p>{jobseeker.experience}</p>
                    </Card>
                    <Card title="Qualifications / Education">
                        <p>{jobseeker.qualifications}</p>
                    </Card>
                    <Card title="Files">
                        <Files files={jobseeker.files} /> {/* Pass jobseeker's files to Files component */}
                    </Card>
                    <Card title="Testimonial">
                        <p>{jobseeker.testimonial}</p>
                        <p><span>App Rating:</span> {jobseeker.app_rating}/5</p>
                    </Card>
                    <div className='right-buttons'>
                    <Verification
                        userId={jobseeker.id}
                        route="jobseekers"
                    />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default UserRightSide;
