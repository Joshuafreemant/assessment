import React, { useState } from 'react'
import './TopComponent.css'
import { RxCaretDown } from "react-icons/rx";
import CalenderIcon from "../../assets/Calendar.png"
import CaretContent from '../../components/CaretContent/CaretContent';
import LoanPeriod from '../../components/LoanPeriod/LoanPeriod';
import { useLocation } from 'react-router-dom';
import { SlArrowDown } from "react-icons/sl";
function TopComponent() {
    const location = useLocation();
    const isCustomerProfileRoute = location.pathname === '/customer-profile';

    let [caretOpen, setCaretOpen] = useState(false);
    let [periodOpen, setPeriodOpen] = useState(false);

    return (
        <div className=''>
            <div className="filter-action">
                <div className="left-col" onClick={() => setCaretOpen(prev => !prev)}>
                    <label htmlFor="">
                        {isCustomerProfileRoute ? "Customers' Profile" : " Segmentation Analysis"}

                    </label>
                    <SlArrowDown />

                    {caretOpen && <CaretContent />}

                </div>

                <div className="right-col">
                    <label htmlFor="">
                        Loan Data Period
                    </label>

                    <img src={CalenderIcon} alt={CalenderIcon} onClick={() => setPeriodOpen(prev => !prev)} />
                    {periodOpen && <LoanPeriod />}
                </div>

            </div>

        </div>
    )
}

export default TopComponent