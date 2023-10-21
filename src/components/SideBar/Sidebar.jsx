import React from "react";
import "./Sidebar.css";
import { TaskIcon, HomeIcon, CalendarIcon, PeopleIcon, DocumentIcon, ReportIcon, TimeToolIcon, PayrollIcon, AnalyticIcon, ExpensesIcon, WorkFlowIcon, HiringIcon, AppIcon, SettingIcon } from "../../assets/Icons";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function SideBar() {
  const location = useLocation();

  return (
    <>
      <div className="sidebar">
        <div className="clustered-icons">
          <Link to="/">
            <div className="nav-link">
              <HomeIcon fill="#407bffff" /> <p>Home</p>
            </div>
          </Link>
          <Link to="/customer">
            <div className="nav-link">
              <TaskIcon fill="#407bffff" /> <p>My Tasks</p>
              <span className="action-bg">18</span>
            </div>
          </Link>

          <Link to="/">
            <div className="nav-link">
              <CalendarIcon fill="#407bffff" /> <p>Team Calendar</p>
            </div>
          </Link>
        </div>

        <div className="second-navs">
          <Link to="/">
            <div className="nav-link">
              <PeopleIcon fill="#407bffff" /> <p>People</p>
            </div>
          </Link>
          <Link to="/customer">
            <div className="nav-link">
              <DocumentIcon fill="#407bffff" /> <p>Documents</p>
            </div>
          </Link>
          <Link to="/">
            <div className="nav-link">
              <ReportIcon fill="#407bffff" /> <p>Reports</p>
            </div>
          </Link>
          <Link to="/">
            <div className="nav-link">
              <AnalyticIcon fill="#407bffff" /> <p>Analytics</p>
            </div>
          </Link>
          <Link to="/">
            <div className="nav-link">
              <WorkFlowIcon fill="#407bffff" /> <p>Workflows</p>
            </div>
          </Link>
          <Link to="/">
            <div className="nav-link">
              <TimeToolIcon fill="#407bffff" /> <p>Time Tools</p>
            </div>
          </Link>{" "}
          <Link to="/">
            <div className="nav-link">
              <PayrollIcon fill="#407bffff" /> <p>Payroll</p>
            </div>
          </Link>{" "}
          <Link to="/">
            <div className="nav-link">
              <ExpensesIcon fill="#407bffff" /> <p>Expenses</p>
            </div>
          </Link>{" "}
          <Link to="/">
            <div className="nav-link">
              <HiringIcon fill="#407bffff" /> <p>Hiring</p>
            </div>
          </Link>
        </div>

        <div className="third-navs">
          <Link to="/">
            <div className="nav-link">
              <AppIcon fill="#407bffff" /> <p>Apps</p>
            </div>
          </Link>
          <Link to="/customer">
            <div className="nav-link">
              <SettingIcon fill="#407bffff" /> <p>Settings</p>
            </div>
          </Link>
         
         
        </div>
      </div>
    </>
  );
}

export default SideBar;
