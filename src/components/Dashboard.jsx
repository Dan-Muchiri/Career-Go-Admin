import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LeftSide from './LeftSide';
import Employers from './Employers';
import JobSeekers from './Jobseekers';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <LeftSide />
      <Routes>
        <Route path="employers" element={<Employers />} />
        <Route path="jobseekers" element={<JobSeekers />} />
        <Route path="/" element={<Employers />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
