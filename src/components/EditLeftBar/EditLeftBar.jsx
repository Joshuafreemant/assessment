import React from "react";
import "./EditLeftBar.css";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { MarkIcon } from "../../assets/Icons";

function EditLeftBar() {
  const location = useLocation();
  return (
    <div className="edit-left-bar">
      {location.pathname === "/set-condition" ? (
        <div className="steps">
          <span style={{ backgroundColor: "#009b72", color: "#fff" }}>
            <MarkIcon />
          </span>
          <p>Per diem set up</p>
        </div>
      ) : (
        <div className="steps">
          <span style={{ backgroundColor: "#6261b5", color: "#fff" }}>1</span>
          <p>Per diem set up</p>
        </div>
      )}

      {location.pathname === "/set-condition" ? (
        <div className="steps">
          <span style={{ backgroundColor: "#009b72", color: "#fff" }}>
            <MarkIcon />
          </span>
          <p>Set daily Rates</p>
        </div>
      ) : (
        <div className="steps">
          <span>2</span>
          <p>Set daily Rates</p>
        </div>
      )}

      {location.pathname === "/set-condition" ? (
        <div className="steps">
          <span style={{ backgroundColor: "#6261b5", color: "#fff" }}>
           3
          </span>
          <p>Set Conditions</p>
        </div>
      ) : (
        <div className="steps">
          <span>3</span>
          <p>Set Conditions</p>
        </div>
      )}

      <div className="steps">
        <span>4</span>
        <p>Add Deductions</p>
      </div>

      <div className="steps">
        <span>5</span>
        <p>Review & Save</p>
      </div>
    </div>
  );
}

export default EditLeftBar;
