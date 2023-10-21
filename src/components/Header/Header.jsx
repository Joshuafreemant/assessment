import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import user from "../../assets/Avatar.png";
import {BellIcon, DropDown } from "../../assets/Icons";
function Header() {
  return (
    <>
      <div className="header-bg">
        <img src={logo} alt="" />
        <div className="right">
          <div className="notifications">
            <BellIcon />
            <p>Notifications</p>
          </div>
          <div className="separate"></div>
          <div className="user">
            <img src={user} alt="" />
            <p>Bjorn Jonson</p>
            <DropDown/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
