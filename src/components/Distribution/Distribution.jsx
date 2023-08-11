import React from 'react'
import './Distribution.css'
import { BarCharts } from '../Charts/Charts'

function Distribution() {


    return (

        <>
            <h3 className='distribution-h3'>PILLAR DISTRIBUTION</h3>
            <div className='distribution-data'>

                <div className="first">
                    <div className="orange-bg"></div>
                    <label htmlFor=""> Social Protection (SP)</label>
                </div>
                <div className="second">
                    <div className="green-bg"></div>
                    <label htmlFor="">Education and Leadership Development (Education)</label>
                </div>
                <div className="third">
                    <div className="red-bg"></div>
                    <label htmlFor="">Energy & Environment (EE)</label>
                </div>
                <div className="fourth">
                    <div className="blue-bg"></div>
                    <label htmlFor="">Enterprise development & financial inclusion (E+E)</label>
                </div>
                <div className="fifth">
                    <div className="blue-two-bg"></div>
                    <label htmlFor="">Food & Agriculture (F&A)</label>
                </div>
            </div>

            <div className="chart-container">
                <div className="box">
                    <div className="blue-bar">
                        <label htmlFor="">The Agric Clients</label>
                    </div>
                    <BarCharts />
                </div>

                <div className="box">
                    <div className="blue-bar">
                        <label htmlFor="">The Micro Techs</label>
                    </div>
                    <BarCharts />
                </div>

                <div className="box">
                    <div className="blue-bar">
                        <label htmlFor="">The Corporates</label>
                    </div>
                    <BarCharts />
                </div>

                <div className="box">
                    <div className="blue-bar">
                        <label htmlFor="">The Retail Tech</label>
                    </div>
                    <BarCharts />
                </div>

                <div className="box">
                    <div className="blue-bar">
                        <label htmlFor="">The Loyalists</label>
                    </div>
                    <BarCharts />
                </div>
                



            </div>



        </>

    )
}

export default Distribution
