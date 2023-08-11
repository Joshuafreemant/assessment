import ActiveIcon from "./assets/active.png"
import DormantIcon from "./assets/dormant.png"

export const dataSource = [
  {
    key: '1',
    customerName: 'John Doe',
    customerId: "1DNFEA3",
    category: 'AGRIC CLIENT',
    loanPeriod: 'NOV 2020 - MAY 2021',
    status: 'ACTIVE',
  },
  {
    key: '2',
    customerName: 'John Doe',
    customerId: "1DNFEA3",
    category: 'AGRIC CLIENT',
    loanPeriod: 'NOV 2020 - MAY 2021',
    status: 'ACTIVE',
  },
  {
    key: '3',
    customerName: 'Jane Doe',
    customerId: "1DNFDHF",
    category: 'CORPORATES',
    loanPeriod: 'NOV 2020 - MAY 2021',
    status: 'DORMANT',
  },
  {
    key: '4',
    customerName: 'Dan Mike',
    customerId: "1DJKEA3",
    category: 'LOYALISTS',
    loanPeriod: 'NOV 2020 - MAY 2021',
    status: 'DORMANT',
  },
  {
    key: '5',
    customerName: 'Dan Mike',
    customerId: "1DJKEA3",
    category: 'RETAIL TECH',
    loanPeriod: 'NOV 2020 - MAY 2021',
    status: 'DORMANT',
  },
  {
    key: '6',
    customerName: 'John Bell',
    customerId: "1DNFEA3",
    category: 'RETAIL TECH',
    loanPeriod: 'NOV 2020 - MAY 2021',
    status: 'DORMANT',
  },
  {
    key: '7',
    customerName: 'John Bell',
    customerId: "1DNFEA3",
    category: 'MICRO TECH',
    loanPeriod: 'NOV 2020 - MAY 2021',
    status: 'ACTIVE',
  },
  {
    key: '8',
    customerName: 'John Bell',
    customerId: "1DNFEA3",
    category: 'MICRO TECH',
    loanPeriod: 'NOV 2020 - MAY 2021',
    status: 'ACTIVE',
  },
  {
    key: '9',
    customerName: 'John Bell',
    customerId: "1DNFEA3",
    category: 'AGRIC CLIENT',
    loanPeriod: 'NOV 2020 - MAY 2021',
    status: 'DORMANT',
  },
  {
    key: '10',
    customerName: 'Joe Bryan',
    customerId: "1DNFEA3",
    category: 'CORPORATES',
    loanPeriod: 'NOV 2020 - MAY 2021',
    status: 'ACTIVE',
  },
  {
    key: '11',
    customerName: 'John Bell',
    customerId: "1DNFEA3",
    category: 'CORPORATES',
    loanPeriod: 'NOV 2020 - MAY 2021',
    status: 'DORMANT',
  },
  {
    key: '12',
    customerName: 'John Bell',
    customerId: "1DNFEA3",
    category: 'CORPORATES',
    loanPeriod: 'NOV 2020 - MAY 2021',
    status: 'DORMANT',
  },
];

export const dataSourceTwo = [
  {
    key: '1',
    customer: 'EGF BANK CUSTOMERS',
    totalNumber: "1,113,040 Customers",
    transValue: 'KES 124Bn',
    loansTaken: '200,000 Ksh',
    loansPerformance: [
      "94% Normal",
      "1.85% Watch",
      "4.17% NPL"
    ],
  },
  {
    key: '2',
    customer: 'NON-EGF BANK CUSTOMERS',
    totalNumber: "7,903,091 Customers",
    transValue: 'KES 943Bn',
    loansTaken: '22.2M Loans Taken Total Value of 1.18Tn',
    loansPerformance: [
      "92.84% Normal",
      "1.58% Watch",
      "5.58% NPL"
    ],
  }



];


export const columns = [
  {
    title: 'CUSTOMER NAME',
    dataIndex: 'customerName',
    key: 'customerName',
    render: (key) => (
      <>
        <span className="table-fonts">
          {key}
        </span>

      </>

    ),
  },
  {
    title: 'CUSTOMER ID',
    dataIndex: 'customerId',
    key: 'customerId',
  },
  {
    title: 'CATEGORY',
    dataIndex: 'category',
    key: 'category',
    render: (key) => (
      <>
        {key === 'AGRIC CLIENT' && <span className="agric-bg">
          AGRIC CLIENT
        </span>}
        {key === 'CORPORATES' && <span className="corporate-bg">
          CORPORATES
        </span>}

        {key === 'LOYALISTS' && <span className="loyalists-bg">
          LOYALISTS
        </span>}

        {key === 'RETAIL TECH' && <span className="retail-bg">
          RETAIL TECH
        </span>}

        {key === 'MICRO TECH' && <span className="micro-bg">
          MICRO TECH
        </span>}


      </>

    ),
  },
  {
    title: 'LOAN PERIOD',
    dataIndex: 'loanPeriod',
    key: 'loanPeriod',
  },
  {
    title: 'STATUS',
    dataIndex: 'status',
    key: 'status',
    render: (key) => (
      <>
        {
          key === 'ACTIVE' && <span className="active-status">
            <img src={ActiveIcon} alt="" />
            ACTIVE
          </span>}
        {
          key === 'DORMANT' && <span className="dormant-status">
            <img src={DormantIcon} alt="" />
            DORMANT
          </span>}
      </>
    ),

  },

];



export const columnTwo = [
  {
    title: 'CUSTOMERS',
    dataIndex: 'customer',
    key: 'customer',
  },
  {
    title: 'TOTAL NUMBER',
    dataIndex: 'totalNumber',
    key: 'totalNumber',
  },
  {
    title: 'TRANSACTION VALUE',
    dataIndex: 'transValue',
    key: 'transValue',
  },
  {
    title: 'LOANS TAKEN',
    dataIndex: 'loansTaken',
    key: 'loansTaken',
  },
  {
    title: 'LOAN PERFORMANCE',
    dataIndex: 'loansPerformance',
    key: 'loansPerformance',
    render: (key) => (
      <>
        {
          key.map((value, i) => {

            return (<ul key={i} className="ant-list">
              <li>
                {value}
              </li>
            </ul>)


          })
        }
      </>

    ),
  },



];