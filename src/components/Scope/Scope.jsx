import React from "react";
import "./Scope.css";
import { DeleteIcon, DropDown } from "../../assets/Icons";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Link } from "react-router-dom";

const animatedComponents = makeAnimated();
const Scope = () => {
  const options = [
    { value: "singapore", label: "Singapore" },
    { value: "canada", label: "Canada" },
    { value: "united_kingdom", label: "United Kingdom" },
    { value: "united_kingdom", label: "United Kingdom" },
    { value: "Brazil", label: "Brazil" },
    { value: "China", label: "China" },
  ];

  const customOptions = [
    { value: "singapore", label: "Singapore Business Travellers" },
    { value: "canada", label: "C-Level" },
    { value: "united_kingdom", label: "D-Level" },
    { value: "united_kingdom", label: "Singapore Non-Business Travellers" },
  ];
  return (
    <>
      <div className="scope">
        <h4 className="scope-h4">Availability Scope</h4>
        <p className="scope-texts">
          Name your Per Diem and select the review types
        </p>

        <div className="available">
          <p className="texts">Per Diem is available to</p>

          <div className="buttons">
            <div className="btn-group">
              <div className="buton-div">
                <button></button>
              </div>
              <label>Everyone</label>
            </div>

            <div className="btn-group">
              <div className="buton-div">
                <button style={{ backgroundColor: "#61758F" }}></button>
              </div>
              <label>Specific Groups</label>
            </div>
          </div>

          <div className="joint-form">
            <label htmlFor="" className="and">AND</label>
            <div className="form-column">
              <div className="form-select">
                <div className="select-dropdown">
                  <label htmlFor="">Location</label>
                  <DropDown />
                </div>
                <label htmlFor="">Includes</label>
                <div className="select-option">
                  <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    defaultValue={[
                      options[4],
                      options[1],
                      options[5],
                      options[3],
                    ]}
                    isMulti
                    options={options}
                  />
                  <DeleteIcon />
                </div>
              </div>
              <div className="form-select">
                <div className="select-dropdown">
                  <label htmlFor="">Custom Group</label>
                  <DropDown />
                </div>
                <label htmlFor="">Includes</label>
                <div className="select-option">
                  <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    defaultValue={[customOptions[0], customOptions[1]]}
                    isMulti
                    options={customOptions}
                  />
                  <DeleteIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="save-group">
        <button className="save">Save As Draft</button>
        <button className="next">
            <Link to="/set-condition" style={{color:"#fff"}}>Next</Link>
            </button>
      </div>
    </>
  );
};

export default Scope;
