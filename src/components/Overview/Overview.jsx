import React from 'react'
import './Overview.css'
import { WalletIcon, DollarIcon, ProfileIcon } from '../../assets/Icons'

function Overview() {


    return (

        <>
            <h3 className='overview-h3'>OVERVIEW</h3>
            <div className='overview-container'>
                <div className="overview-content">
                    <ProfileIcon width={24} height={25}/>

                    <p>Total Customers</p>
                    <h2>1.11 Million</h2>
                </div>

                <div className="overview-content">
                    <DollarIcon />

                    <p>Total Transactional Value</p>
                    <h2>124 Billion</h2>
                </div>

                <div className="overview-content">

                    <WalletIcon />
                    <p>Average Monthly Balance</p>
                    <h2>₦200,562</h2>
                </div>



            </div>

        </>

    )
}

export default Overview
