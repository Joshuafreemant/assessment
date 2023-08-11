import React from 'react'
import './AverageAge.css'
import { RadialChart } from '../Charts/Charts'

function AverageAge() {
    return (
        <div className='average-age'>
            <h4>Average Age </h4>
            <label htmlFor="Average Age In Years">(In Years)</label>
            <div className="categories">
                <div className="content">
                    <p>The Agric Clients</p>
                    <h2>62</h2>
                </div>
                <div className="content">
                    <p>The Micro Techs</p>
                    <h2>71</h2>
                </div>
                <div className="content">
                    <p>The Retail Techs</p>
                    <h2>43</h2>
                </div>
                <div className="content">
                    <p>The Loyalists</p>
                    <h2>50</h2>
                </div>
                <div className="content">
                    <p>The Corporates</p>
                    <h2>27</h2>
                </div>

            </div>

        </div>
    )
}

export default AverageAge
