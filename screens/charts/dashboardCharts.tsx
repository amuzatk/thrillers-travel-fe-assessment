// import React, { useEffect, useState } from 'react';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { Spin, Alert } from 'antd';
// import { fetchUsers } from '../../features/users/userActions';
// import { User } from '../../interfaces';
// import styles from '../../styles/dashboard/Charts.module.scss';
// import CustomSelect from '../userInfo/pagination';

// const DashboardCharts = () => {
//   const customData = [
//     { month: 'Jan', delivered: 500, failed: 10 },
//     { month: 'Feb', delivered: 320 , failed: 130 },
//     { month: 'Mar', delivered: 400 , failed: 100 },
//     { month: 'Apr', delivered: 520 , failed: 180 },
//     { month: 'May', delivered: 350 , failed: 100 },
//     { month: 'Jun', delivered: 650 , failed: 100 },
//     { month: 'Jul', delivered: 420 , failed: 10 },
//     { month: 'Aug', delivered: 320 , failed: 150 },
//     { month: 'Sep', delivered: 600 , failed: 100 },
//     { month: 'Oct', delivered: 720 , failed: 106 },
//     { month: 'Nov', delivered: 500 , failed: 150 },
//     { month: 'Dec', delivered: 680 , failed: 100 },
//   ];

//   const getChartData = () => {
//     const barChartData = customData.map(data => ({
//       name: data.month,
//       delivered: data.delivered,
//       failed: data.failed,
//     }));
//     return barChartData;
//   };

//   return (
//     <div className={styles.container}>

//     <div className={styles.top}>
//       <div className={styles.left}>
//         <p>Showing data for</p>
//         <input type="text" />
//         {/* <CustomSelect  /> */}
//       </div>
//       <div className={styles.right}>
//         <p>Today</p>
//         <span><p> Last 7 days</p> </span>
//         <p>Last 30 days</p>
//       </div>
//     </div>

//     <div className={styles.charts}>
//     <div className={styles.text}>
//       <div className={styles.upper}>
//         <h5>Revenue</h5>
//         <p><span> +0.00% </span> vs Last 7 days</p>
//       </div>
//       <div className={styles.lower}>
//         <h2>₦0.00</h2>
//         <p>in total value</p>
//       </div>
//     </div>
//           <ResponsiveContainer style={{
//       overflowY:"hidden",
//       overflowX:"hidden",
//       // maxWidth:"932.98px"
//     }} className={styles.chart} width="100%" height={209.51}>
//             <BarChart data={getChartData()}>
//               <XAxis dataKey="name" />
//               {/* <YAxis domain={['100000', '500000']} /> */}
//               <YAxis interval={0} tickCount={5} />
//               <Tooltip />
//               {/* <Legend /> */}
//               <Bar dataKey="delivered" name="Delivered" fill="#FFC145" />
//               <Bar dataKey="failed" name="Failed" fill="#FF0000" />
//             </BarChart>
//           </ResponsiveContainer>
//           </div>
//       </div>
//   );
// };

// export default DashboardCharts;


import { useState } from 'react';
import { BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer, Bar } from 'recharts';
import styles from '../../styles/dashboard/Charts.module.scss';
import { BarChartData, Transaction } from '../../interfaces';
import CustomSelect from './CustomSelect';

interface Props {
  mockBarChartData: BarChartData[];
  mockTableData:  Transaction[];
}

const DashboardCharts: React.FC<Props> = ({ mockBarChartData,mockTableData }) => {

  if (!mockBarChartData) {
    // Handle the case where mockBarChartData is undefined
    return <div>Loading...</div>;
  }
  console.log( mockTableData,'mockTableData---')
  const [selectedData, setSelectedData] = useState<string>('Today');

  const getChartData = () => {
    let filteredData;
    if (selectedData === 'Today') {
      filteredData = mockBarChartData.slice(-1);
    } else if (selectedData === 'Last 7 days') {
      filteredData = mockBarChartData.slice(-7);
    } else if (selectedData === 'Last 30 days') {
      filteredData = mockBarChartData.slice(-30);
    }
    return filteredData;
  };

  const totalDelivered = getChartData().reduce((acc: number, curr: BarChartData) => acc + curr.delivered, 0);

  const handleSelectChange = (value: string) => {
    setSelectedData(value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.left}>
          <p>Showing data for</p>
          <CustomSelect onChange={handleSelectChange}/>
        </div>
        <div className={styles.right}>
          <p className={selectedData === 'Today' ? styles.active : ''}>Today</p>
          <p className={selectedData === 'Last 7 days' ? styles.active : ''}> Last 7 days</p>
          <p className={selectedData === 'Last 30 days' ? styles.active : ''}>Last 30 days</p>
        </div>
      </div>
      <div className={styles.charts}>
        <div className={styles.text}>
          <div className={styles.upper}>
            <h5>Revenue</h5>
            <p><span> +0.00% </span> vs {selectedData} </p>
          </div>
          <div className={styles.lower}>
            <h2>₦{totalDelivered.toFixed(2)}</h2>
            <p>in total value</p>
          </div>
        </div>
        <ResponsiveContainer style={{ overflowY: "hidden", overflowX: "hidden" }} className={styles.chart} width="100%" height={209.51}>
          <BarChart data={getChartData()}>
            <XAxis dataKey="day" />
            <YAxis interval={0} tickCount={5} />
            <Tooltip />
            <Bar dataKey="delivered" name="Delivered" fill="#FFC145" />
            <Bar dataKey="failed" name="Failed" fill="#FF0000" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardCharts;
