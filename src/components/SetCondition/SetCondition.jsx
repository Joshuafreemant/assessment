import React from "react";
import "./SetCondition.css";
import { Table } from "antd";
import { columnTwo, dataSourceTwo } from "../../data";
import { Link } from "react-router-dom";
// import 'react-beautiful-dnd/style.css'; // Import the styles
const SetCondition = () => {
  return (
    <div className="condition">
      <div className="set-condition">
        <div className="text-group">
          <h4>Set Conditions</h4>
          <div className="button">
            {/* <PlusIcon fill={"#fff"} /> */}
            <span>Add Condition</span>
          </div>
        </div>

        <p className="texts">
          The conditions under which the daily rate may change. If multiple
          conditions are valid, the higher ranking one will apply.
        </p>
      </div>

      <div className="table">
        <Table
          dataSource={dataSourceTwo}
          columns={columnTwo}
          pagination={false}
        />
      </div>
      <div className="condition-btn">
        <div className="save-group">
          <button className="save">Save As Draft</button>
          <div className="btn-gap">
            <button className="prev">
                <Link to="/edit"  style={{color:"#6261b5"}}>Prev</Link>
                
                
                </button>
            <button className="next">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetCondition;
