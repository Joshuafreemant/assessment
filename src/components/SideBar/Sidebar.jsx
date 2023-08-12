import React from 'react'
import './Sidebar.css'
import { DocumentIcon, HomeIcon, LogOutIcon } from "../../assets/Icons"
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function SideBar() {
    const location = useLocation();

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

                    {location.pathname.includes('/customer') ?
                        <DocumentIcon fill="#407bffff" />:
                        <DocumentIcon fill="#788098" />}

                    </Link>

                </div>
                <div className="logout">
                    <LogOutIcon/>

                </div>
            </div>
        </>
    )
}

export default SideBar