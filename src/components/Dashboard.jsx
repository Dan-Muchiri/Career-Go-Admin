import React from 'react';
import LeftSide from './LeftSide';
import Employers from './Employers';
import JobSeekers from './Jobseekers';
import { Route, Routes } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <LeftSide />
            <Routes>
                {/* Route for Employers */}
                <Route path="/employers" element={<Employers />} />
                
                {/* Route for JobSeekers */}
                <Route path="/jobseekers" element={<JobSeekers />} />

                {/* Default Route */}
                <Route path="/" element={<Employers />} />
            </Routes>
        </div>
    );
}

export default Dashboard;
