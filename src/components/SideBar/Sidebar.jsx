import React from 'react'
import './Sidebar.css'
import homeIcon from "../../assets/Home.png"
import { DocumentIcon, HomeIcon } from "../../assets/Icons"
import LogoutIcon from "../../assets/Logout.png"
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function SideBar() {
    const location = useLocation();
//     const isCustomerProfileRoute = location.pathname === '/customer';
// console.log(isCustomerProfileRoute)
// // 
    return (
        <>
            <div className='sidebar'>
                <div className="clustered-icons">
                    <Link to="/">
                        {location.pathname === '/' ?
                        <HomeIcon fill="#407bffff" />:
                        <HomeIcon fill="#788098" />}

                    </Link>
                    <Link to="/customer">

                    {location.pathname === '/customer' ?
                        <DocumentIcon fill="#407bffff" />:
                        <DocumentIcon fill="#788098" />}

                    </Link>

                </div>
                <div className="logout">
                    <img src={LogoutIcon} alt="" />

                </div>
            </div>
        </>
    )
}

export default SideBar