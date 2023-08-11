import React from 'react'
import './LoanPeriod.css'
import { Link } from 'react-router-dom'
import { DatePicker, Space } from 'antd';
import moment from 'moment';
function LoanPeriod() {
    const { RangePicker } = DatePicker;
    const dateFormat = 'YYYY/MM/DD';
    return (
        <div className='loanDiv'>
            <h5>Insert Date Range</h5>

            <div className="start-date">
                <label htmlFor="start date">Start Date</label>
                <DatePicker size='large' format={dateFormat} />
            </div>

            <div className="end-date">
                <label htmlFor="start date">End Date</label>
                <DatePicker size='large'  format={dateFormat} />
            </div>

            <button className='done-btn'>Done</button>
        </div>
    )
}

export default LoanPeriod