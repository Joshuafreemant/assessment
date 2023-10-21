import { Link } from "react-router-dom";
import { DeleteIcon, MoreIcon, TableIcon } from "./assets/Icons";

export const dataSource = [
  {
    key: "1",
    perDierName: "Per diem A",
    period: "01/04/2023 - 31/03/2024",
    status: "ACTIVE",
    icon: <MoreIcon />,
  },
  {
    key: "2",
    perDierName: "Per diem B",
    period: "01/04/2023 - 31/03/2024",
    status: "ACTIVE",
    icon: <MoreIcon />,
  },
  {
    key: "3",
    perDierName: "Per diem C",
    period: "01/04/2023 - 31/03/2024",
    status: "INACTIVE",
    icon: <MoreIcon />,
  },
  {
    key: "4",
    perDierName: "Per diem D",
    period: "01/04/2023 - 31/03/2024",
    status: "ACTIVE",
    icon: <MoreIcon />,
  },
  {
    key: "5",
    perDierName: "Per diem E",
    period: "01/04/2023 - 31/03/2024",
    status: "ACTIVE",
    icon: <MoreIcon />,
  },
  {
    key: "6",
    perDierName: "Per diem F",
    period: "01/04/2023 - 31/03/2024",
    status: "ACTIVE",
    icon: <MoreIcon />,
  },
  {
    key: "7",
    perDierName: "Per diem G",
    period: "01/04/2023 - 31/03/2024",
    status: "ACTIVE",
    icon: <MoreIcon />,
  },
  {
    key: "8",
    perDierName: "Per diem H",
    period: "01/04/2023 - 31/03/2024",
    status: "ACTIVE",
    icon: <MoreIcon />,
  },
  {
    key: "9",
    perDierName: "Per diem I",
    period: "01/04/2023 - 31/03/2024",
    status: "ACTIVE",
    icon: <MoreIcon />,
  },
];

export const dataSourceTwo = [
  {
    key: "1",
    icon:<TableIcon/>,
    rateName: "Trip is longer than 14 days",
    tripDuration: "Trip Duration: Longer than 14 Days",
    appliedRate: "80%",
    delete: <DeleteIcon/>,
  },
  {
    key: "2",
    icon:<TableIcon/>,
    rateName: "Trip is longer than 14 days",
    tripDuration: "Trip Duration: Longer than 14 Days",
    appliedRate: "80%",
    delete: <DeleteIcon/>,
  },
];

export const columns = [
  {
    title: "PER DIEM NAME",
    dataIndex: "perDierName",
    key: "perDierName",
    render: (key) => (
      <>
        <span className="table-fonts">
          
          <Link to="/edit">{key}</Link>
        </span>
      </>
    ),
  },
  {
    title: "PERIOD",
    dataIndex: "period",
    key: "period",
    render: (key) => (
      <>
        <span className="period-fonts">{key}</span>
      </>
    ),
  },
  {
    title: "STATUS",
    dataIndex: "status",
    key: "status",
    render: (key) => (
      <>
        {key === "ACTIVE" && <span className="active-status">ACTIVE</span>}
        {key === "INACTIVE" && (
          <span className="inactive-status">INACTIVE</span>
        )}
      </>
    ),
  },
  {
    title: "",
    dataIndex: "icon",
    key: "",
  },
];

export const columnTwo = [
  {
    title: "",
    dataIndex: "icon",
    key: "icon",
  },
  {
    title: "RATE NAME",
    dataIndex: "rateName",
    key: "rateName",
  },
  {
    title: "CONDITION",
    dataIndex: "tripDuration",
    key: "totalNumber",
  },
  {
    title: "APPLIED RATE(% OF DAILY RATES)",
    dataIndex: "appliedRate",
    key: "transValue",
  },
  {
    title: "",
    dataIndex: "delete",
    key: "delete",
  }
  
];
