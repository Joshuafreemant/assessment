import "./Dashboard.css";

import { Table } from "antd";
import { columns, dataSource } from "../../data";
import { PlusIcon } from "../../assets/Icons";
import SideBar from "../../components/SideBar/Sidebar";
import Header from "../../components/Header/Header";

function Dashboard() {
  const buttonBars = ["Categories", "Approval flows", "Per Diems"];
  return (
    <>
      <Header />
      <SideBar />

      <div className="dashboard">
        <h3>Settings</h3>
        <div className="table-bg">
          <div className="button-bars">
            {buttonBars?.map((bars, i) => {
              return <p>{bars.toUpperCase()}</p>;
            })}
          </div>

          <div className="per-diem">
            <div className="text-group">
              <h4>Per Diem</h4>
              <div className="button">
                <PlusIcon fill={"#fff"} />
                <span>Add Per Diem Rates</span>
              </div>
            </div>

            <p className="texts">
              Set Up Diem Rates Below to enable employees to request for per
              diem allowance
            </p>
          </div>
          <Table dataSource={dataSource} columns={columns} pagination={false} />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
