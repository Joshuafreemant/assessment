import React from 'react'
import './Overview.css'
import ProfileIcon from "../../assets/Profile.png"
import WalletIcon from "../../assets/Wallet.png"
import DollarIcon from "../../assets/dollar-square.png"

function Overview() {


    return (

        <>
            <h3 className='overview-h3'>OVERVIEW</h3>
            <div className='overview-container'>
                <div className="overview-content">
                    <img src={ProfileIcon} alt="" />
                    <p>Total Customers</p>
                    <h2>1.11 Million</h2>
                </div>

                <div className="overview-content">
                    <img src={DollarIcon} alt="" />
                    <p>Total Transactional Value</p>
                    <h2>124 Billion</h2>
                </div>

                <div className="overview-content">
                    <img src={WalletIcon} alt="" />
                    <p>Average Monthly Balance</p>
                    <h2>₦200,562</h2>
                </div>



            </div>

        </>

    )
}

export default Overview
