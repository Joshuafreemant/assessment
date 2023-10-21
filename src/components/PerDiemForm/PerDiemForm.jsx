import React from "react";
import "./PerDiemForm.css";
import { CalendarIcon } from "../../assets/Icons";

const PerDiemForm = () => {
  return (
    <div>
    <div className="perdiem">
      <h4 className="setup-h4">Per Diem</h4>
      <p className="setup-texts">
        Name your Per Diem and select the review types
      </p>

      </div>

      <div className="perdiemform">
        <form className="form">
          <div className="input-group">
            <label>
              NAME OF PER DIEM <span>*</span>
            </label>

            <input
              className="input"
              type="text"
              name=""
              id=""
              defaultValue="Per Dien A"
            />
          </div>

          <div className="input-group">
            <label>
              APPLICABLE PERIOD <span>*</span>
            </label>
            <div className="half-input">
              <div className="icon-box">
                <CalendarIcon />
                <input type="text" name="" id="" defaultValue="01/04/2023" />
              </div>

              <div className="separator"></div>
              <div className="icon-box">
                <CalendarIcon  />
                <input type="text" name="" id="" defaultValue="31/03/2024" />
              </div>
            </div>
          </div>

          <div className="input-group">
            <label>
              CURRENCY <span>*</span>
            </label>
            <input
              className="input"
              type="text"
              name=""
              id=""
              defaultValue="SGD"
            />
          </div>

          <div className="input-group">
            <label>
              DESCRIPTION <span>*</span>
            </label>
            <input
              className="input"
              type="text"
              name=""
              id=""
              defaultValue="Description"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PerDiemForm;
