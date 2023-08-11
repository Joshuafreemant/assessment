import React from 'react'
import './CustomerProfile.css'

import { useNavigate } from 'react-router-dom';
import TopComponent from '../../components/TopComponent/TopComponent';
import Overview from '../../components/Overview/Overview';
import Profile from '../../components/Profile/Profile';
function CustomerProfile() {
    return (
        <div className='customer-profile'>
            <TopComponent/>
            <Overview />
            <Profile/>
        </div>
    )
}

export default CustomerProfile