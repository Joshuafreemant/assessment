import React from 'react'
import './AverageTransaction.css'
import { RadialChart } from '../Charts/Charts'

function AverageTransaction() {


    return (
        <div className='average-transaction'>
            <h4>Average Transactional Values </h4>
            <label htmlFor="Average Transactional Values">(Credit)</label>
            <div className="categories">
                <div className="content">
                    <p>The Agric Clients</p>
                    <h2>₦ 6,875</h2>
                </div>
                <div className="content">
                    <p>The Micro Techs</p>
                    <h2>₦ 2,491</h2>
                </div>
                <div className="content">
                    <p>The Retail Techs</p>
                    <h2>₦ 1,689</h2>
                </div>
                <div className="content">
                    <p>The Loyalists</p>
                    <h2>₦ 300,816</h2>
                </div>
                <div className="content">
                    <p>The Corporates</p>
                    <h2>₦ 20,880,542</h2>
                </div>

            </div>

        </div>
    )
}

export default AverageTransaction
