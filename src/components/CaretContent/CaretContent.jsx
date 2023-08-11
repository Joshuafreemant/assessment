import React from 'react'
import './CaretContent.css'
import { Link } from 'react-router-dom'

function CaretContent() {
    return (
        <div className='caretDiv'>
            <Link className="caret-link" to="/">Segmentation Analysis</Link>
            <Link className="caret-link" to="/customer-profile">Customers' Profile</Link>
        </div>
    )
}

export default CaretContent