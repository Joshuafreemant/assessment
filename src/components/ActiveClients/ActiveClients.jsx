import React from 'react'
import './ActiveClients.css'
import { RadialChart } from '../Charts/Charts'

function ActiveClients() {
    return (
        <div className='active-clients'>
            <div className="active">
                <h4>Active Clients </h4>
                <h6>(Percentage)</h6>

            </div>

            <div className='radial-area'>

                <div className="radial-chart">
                    <RadialChart />
                </div>
                <div className='info'>
                    <div className="corporate">
                        <div className="corporate-bg"></div>
                        <label htmlFor="" className='corporate-label'>The Corporates</label>
                        <h4>100%</h4>
                    </div>
                    <div className="micro">
                        <div className="micro-bg"></div>
                        <label htmlFor="" className='micro-label'>The Micro Techs</label>
                        <h4>92.5%</h4>

                    </div>
                    <div className="loyal">
                        <div className="loyal-bg"></div>
                        <label htmlFor="" className='loyal-label'>The Loyalists</label>
                        <h4>85.76%</h4>

                    </div>
                    <div className="agric">
                        <div className="agric-bg"></div>
                        <label htmlFor="" className='agric-label'>Agric Clients</label>
                        <h4>57.39%</h4>

                    </div>

                    <div className="ret">
                        <div className="ret-bg"></div>
                        <label htmlFor="" className='ret-label'> The Retail Techs</label>
                        <h4>38.03%</h4>

                    </div>
                   
                    
                   

                </div>
            </div>

        </div>
    )
}

export default ActiveClients