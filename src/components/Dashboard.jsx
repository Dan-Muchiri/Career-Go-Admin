import React from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <LeftSide />
            <RightSide />
        </div>
    );
}

export default Dashboard;
