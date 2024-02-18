// import React, { useEffect, useState } from "react";
// import { Table, Form, Spin, Alert, Checkbox } from "antd";
// import type { ColumnsType } from "antd/es/table";
// import styles from '../../styles/dashboard/UserInfo3.module.scss';
// import moment from "moment";
// import { toastHandler } from "../../helpers/toastHandler";
// import Paginate from "./pagination";
// import { BarChartData, Transaction, User } from "../../interfaces";

// const tableData = (items: User[]) => {
//   return items.map((item) => ({
//     id: item?.id,
//     orgName: item?.orgName,
//     userName: `${item?.profile?.firstName} ${item?.profile?.lastName}`,
//     email: item?.email,
//     phoneNumber: item?.phoneNumber,
//     dateJoined: `${moment(item?.createdAt).format('MMM DD, YYYY')} ${moment(item?.createdTime, 'hh:mm:ss A').format('hh:mm A')}`,
//     status: item.status.array[0],
//   }));
// };

// // interface TransactionProps {
// //   selectedOrganization: string;
// //   searchResults: User[];
// //   onSearchResultsChange: (results: User[]) => void;
// //   onForceRerender: (newDummyVariable: any) => void; // Define the callback function prop
// // }
// interface Props {
//     mockTableData: Transaction[];
//     // mockBarChartData: BarChartData[];
//   }
  
//   const TransactionPage: React.FC<Props> = ({mockTableData }) => {
// // const TransactionPage: React.FC<TransactionProps> = ({ 
// //   selectedOrganization, 
// //   searchResults, 
// //   onSearchResultsChange,
// //   onForceRerender, // Receive the callback function prop
// //  }) => {
// //   const [form] = Form.useForm();
// //   const [isOrgFilterVisible, setOrgFilterVisible] = useState(false);
// //   const [isNameFilterVisible, setNameFilterVisible] = useState(false);
// //   const [isEmailFilterVisible, setEmailFilterVisible] = useState(false);
// //   const [isPhoneFilterVisible, setPhoneFilterVisible] = useState(false);
// //   const [isDateFilterVisible, setDateFilterVisible] = useState(false);
// //   const [isStatusFilterVisible, setStatusFilterVisible] = useState(false);
// //   const [originalData, setOriginalData] = useState<Array<User>>([]);
//   const [filteredData, setFilteredData] = useState<Array<User>>([]);
// //   const [popoverVisible, setPopoverVisible] = useState<string | null>(null);
// //   const [dummyVariable, setDummyVariable] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [pageSize, setPageSize] = useState(10);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isError, setIsError] = useState(false);
//   const [selectAll, setSelectAll] = useState<boolean>(false);


//   // Your component code...
  
//   const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const checked = e.target.checked;
//     // Logic to update state for all columns based on checked value
//     setSelectAll(checked);
//   };
  

// //   useEffect(() => {
// //     if (originalData && originalData.length > 0) {
// //       const filteredUsers = selectedOrganization
// //         ? searchResults.filter((user) => user.orgName === selectedOrganization)
// //         : searchResults;

// //       setFilteredData(filteredUsers);
// //     }
// //   }, [selectedOrganization, searchResults, originalData]);

//   const handlePageChange = (page: number, pageSize?: number) => {
//     setCurrentPage(page);
//     setPageSize(pageSize || 10);
//   }

//   const realData = filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

//   if (isLoading) return <span style={{ display: "flex", justifyContent: "center", alignItems: "center" }} className={styles.loading}><Spin size="large" /></span>;
//   if (isError) return <span style={{ display: "flex", justifyContent: "center", alignItems: "center" }} className={styles.loading}><Alert message="Error fetching data" type="error" /></span>;

// console.log(mockTableData,
//     'mockTableData == table')
//   const columns: ColumnsType<{
//     id: string;
//     orgName: string;
//     userName: string;
//     email: string;
//     phoneNumber: string;
//     dateJoined: string;
//     status: string;
//   }> = [ 
//     {
//         title: <Checkbox  checked={selectAll} />,
//         dataIndex: "selection",
//         key: "selection",
//         className: styles.selection,
//         render: () => <Checkbox /* Add any necessary props for individual select */ />,
//       },         
//       {
//         title: (
// <span className={styles.columnTitle}>AMOUNT</span>
//         ),
//         dataIndex: "orgName",
//         key: "orgName",
//         className: styles.org,
//       },
//       {
//         title: (
//   <span className={styles.columnTitle}>TRANSACTION ID</span>
//         ),
//         dataIndex: "userName",
//         key: "userName",
//         className: styles.name,
//       },
//       {
//         title: (
// <span className={styles.columnTitle}>TRANSACTION TYPE</span>            
//         ),
//         dataIndex: "email",
//         key: "email",
//         className: styles.email2,
//         render: (email: string) => (
//           <span style={{ textTransform:"lowercase" }}>{email}</span>
//         ),
//       },
//       {
//         title: (
// <span className={styles.columnTitle}>DATE</span>             
//         ),
//         dataIndex: "dateJoined",
//         key: "dateJoined",
//         className: styles.date,
//       },
//       {
//         title: (
//    <span className={styles.columnTitle}>TIME</span>
//         ),
//         dataIndex: "phoneNumber",
//         key: "phoneNumber",
//         className: styles.phone,
//       },
//       {
//         title: (
//             <span className={styles.columnTitle}>STATUS</span>
//         ),
//         dataIndex: "status",
//         key: "status",
//         className: styles.status,
//         render: (status: string) => { // Specify the type of status as string
//           // Define styles based on the status value
//           let statusStyle = {};
//           let circleStyle = { 
//             width: "8px",
//             height: "8px",
//             borderRadius: "50%",
//             display: "inline-block",
//             marginRight: "4px" // Adjust as needed
//           };
//           if (status === "Inactive") {
//             statusStyle = { color: "#545F7D", borderRadius: "25px", padding: "6px 12px", background: "#f5f5f7", };
//           } else if (status === "Blacklisted") {
//             statusStyle = { 
//                 color: "#E4033B", 
//                 background:"#FEECEE",
//                 borderRadius: "100px", 
//                 padding: "4px 12px",  
//                 // background: "#fce6eb",
//                 height:"30px",
//                  width:"106px",
//                  border:"1px solid #F14156"
//               };
//           } else if (status === "Active") {
//             statusStyle = { 
//                 color: "#144909",
//                 border: "1px solid#5DC090",
//                  borderRadius: "100px", 
//                  padding: "4px 12px", 
//                  background: "#EFFDED",
//                  height:"30px",
//                  width:"106px", 
//                  };
//           } else if (status === "Pending") {
//             statusStyle = { color: "#E9B200", borderRadius: "25px", padding: "6px 12px", background: "#fdf7e6",  };
//           }
      
//           return <span style={statusStyle}> 
//            <span 
//             >
//                 ● 
//             </span>
//            {status}
//            </span>;
//         },
//       }, 
//   ];

//   return (
//     <>
//       <div className={styles.container}
//       >
//         <Table dataSource={tableData(realData)} className={styles.tab} columns={columns} pagination={false} />
//       </div>
//       <div>
//         <Paginate current={currentPage} pageSize={pageSize} total={filteredData.length} onChange={handlePageChange} />
//       </div>
//     </>
//   );
// };

// export default TransactionPage;





import React, { useEffect, useState } from "react";
import { Table, Form, Spin, Alert, Checkbox } from "antd";
import type { ColumnsType } from "antd/es/table";
import styles from '../../styles/dashboard/UserInfo3.module.scss';
import moment from "moment";
import { toastHandler } from "../../helpers/toastHandler";
import Paginate from "./pagination";
import { BarChartData, Transaction, User } from "../../interfaces";

const tableData = (items: Transaction[]) => {
  return items.map((item) => ({
    amount: item.amount,
    transactionId: item.transactionId,
    transactionType: item.transactionType,
    date: item.date,
    time: item.time,
    status: item.status,
  }));
};
// interface Props {
//     mockTableData?: Transaction[];
//     // mockBarChartData: BarChartData[];
//   }
  
  // const TransactionPage: React.FC<Props> = ({mockTableData }) => {
  const TransactionPage = () => {

    const [selectAll, setSelectAll] = useState<boolean>(false);
    const pageSize = 10; // Assuming a default page size of 10
    const currentPage = 1; // Assuming a default current page of 1

    // Retrieve mock data from local storage
const retrievedMockTableData: Transaction[] = typeof window !== 'undefined' ? 
JSON.parse(localStorage.getItem("mockTableData") || "[]") : [];

console.log(retrievedMockTableData,'retrievedMockTableData==')

    const columns = [
        {
            // title: <Checkbox checked={selectAll} onChange={handleSelectAll} />,
            title: <Checkbox checked={selectAll} />,

            dataIndex: 'selection',
            key: 'selection',
            render: () => <Checkbox />,
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
        },
        {
            title: 'Transaction ID',
            dataIndex: 'transactionId',
            key: 'transactionId',
        },
        {
            title: 'Transaction Type',
            dataIndex: 'transactionType',
            key: 'transactionType',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
    ];

    // Check if mockTableData is defined before passing it to tableData
    const dataSource = retrievedMockTableData ? tableData(retrievedMockTableData) : [];

  return (
    <>
            <div className={styles.container}>
                <Table
                    dataSource={dataSource}
                    className={styles.tab}
                    columns={columns}
                    pagination={false}
                />
            </div>
            {/* Add pagination component here if needed */}
        </>
  
  );
};

export default TransactionPage;