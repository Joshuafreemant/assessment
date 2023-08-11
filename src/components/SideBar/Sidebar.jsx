import React from 'react'
import './Sidebar.css'
import homeIcon from "../../assets/Home.png"
import DocumentIcon from "../../assets/Document.png"
import LogoutIcon from "../../assets/Logout.png"
import { Link } from "react-router-dom";
function SideBar() {

    return (
        <>
            <div className='sidebar'>
                <div className="clustered-icons">
                    <Link to="/">
                        <img src={homeIcon} alt="" />
                    </Link>
                    <Link to="/customer">
                        <img src={DocumentIcon} alt="" />
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