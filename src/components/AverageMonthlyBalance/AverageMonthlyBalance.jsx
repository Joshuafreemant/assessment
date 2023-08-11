import React from 'react'
import './AverageMonthlyBalance.css'

function AverageMonthlyBalance() {


    return (

        <>
            <h3 className='average-h3'>AVERAGE MONTHLY BALANCE</h3>
            <div className='average-balance'>
                <div className="balance-content">
                    <p>The Agric Clients</p>
                    <h2>₦ 9,526</h2>
                </div>

                <div className="balance-content">
                    <p>The Micro Techs</p>
                    <h2>---2,491</h2>
                </div>

                <div className="balance-content">
                    <p>The Retail Techs</p>
                    <h2>₦ 2,491</h2>
                </div>

                <div className="balance-content">
                    <p>The Loyalists</p>
                    <h2>₦ 2,491</h2>
                </div>

                <div className="balance-content">
                    <p>The Corporates</p>
                    <h2>₦ 9,526</h2>
                </div>

            </div>

        </>

    )
}

export default AverageMonthlyBalance
