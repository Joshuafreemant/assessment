import React from "react";
import "./Setup.css";
import PerDiemForm from "../PerDiemForm/PerDiemForm";
import Scope from "../Scope/Scope";

const Setup = () => {
  return (
    <div className="setup">
      <PerDiemForm />
      <Scope />
    </div>
  );
};

export default Setup;
