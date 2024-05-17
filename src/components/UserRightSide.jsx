import React from 'react';
import Card from './Card';

const UserRightSide = ({ user }) => {
    return (
        <div className="right-side">
            {user.role === 'employer' && user.employer.length > 0 && user.employer.map((employer, index) => (
                <div key={index} className='employer-right-side'>
                    <Card title="Profile">
                        <p><span>Company:</span> {employer.company_name}</p>
                        <p><span>Username:</span> {user.username}</p>
                    </Card>
                    <Card title="Payment Details">
                        <p>Payment</p>
                    </Card>
                    <Card title="Files">
                        <p>Files</p>
                    </Card>
                    <Card title="Testimonial">
                        <p>{employer.testimonial}</p>
                        <p><span>App_rating:</span> {employer.app_rating}</p>
                    </Card>
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
                    <Card title="Qualifications">
                        <p>{jobseeker.qualifications}</p>
                    </Card>
                    <Card title="Experience">
                        <p>{jobseeker.experience}</p>
                    </Card>
                    <Card title="Education">
                        <p>{jobseeker.education}</p>
                    </Card>
                    <Card title="Files">
                        <p>Files</p>
                    </Card>
                    <Card title="Testimonial">
                        <p>{jobseeker.testimonial}</p>
                        <p><span>App_rating:</span> {jobseeker.app_rating}</p>
                    </Card>
                    <div className='right-buttons'>
                        <button>Verify</button>
                        <button>Reject</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default UserRightSide;
