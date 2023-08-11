import React from 'react'
import './TotalPopulation.css'
import { PieChart } from '../Charts/Charts'

function TotalPopulation() {
    return (
        <div className='population'>
            <h4>Total Population</h4>
            <div className='pie-area'>

                <div className="pie-chart">

                <PieChart />
                </div>

                <div className='info'>
                    <div className="ret">
                        <div className="ret-bg"></div>
                        <label htmlFor="" className='ret-label'> The Retail Techs</label>
                    </div>
                    <div className="agric">
                        <div className="agric-bg"></div>
                        <label htmlFor="" className='agric-label'>Agric Clients</label>
                    </div>
                    <div className="micro">
                        <div className="micro-bg"></div>
                        <label htmlFor="" className='micro-label'>The Micro Techs</label>
                    </div>
                    <div className="loyal">
                        <div className="loyal-bg"></div>
                        <label htmlFor="" className='loyal-label'>The Loyalists</label>
                    </div>
                    <div className="corporate">
                        <div className="corporate-bg"></div>
                        <label htmlFor="" className='corporate-label'>The Corporates</label>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TotalPopulation