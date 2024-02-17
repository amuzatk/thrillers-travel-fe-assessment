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



import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Spin, Alert } from 'antd';
import { fetchUsers } from '../../features/users/userActions';
import { User } from '../../interfaces';
import styles from '../../styles/dashboard/Charts.module.scss';
import CustomSelect from './CustomSelect';
// import CustomSelect from '../userInfo/pagination';

const DashboardCharts = () => {
  const [selectedData, setSelectedData] = useState<string>('Today'); // State to store the selected value


  const customData = [
    { day: '2024-01-01', delivered: 500, failed: 10 },
    { day: '2024-01-02', delivered: 320, failed: 130 },
    { day: '2024-01-03', delivered: 500, failed: 10 },
    { day: '2024-01-04', delivered: 320, failed: 130 },
    { day: '2024-01-05', delivered: 320, failed: 130 },
    { day: '2024-01-06', delivered: 320, failed: 130 },
    { day: '2024-01-07', delivered: 320, failed: 130 },
    { day: '2024-01-08', delivered: 320, failed: 130 },
    { day: '2024-01-09', delivered: 320, failed: 130 },
    { day: '2024-01-10', delivered: 320, failed: 130 },
    { day: '2024-01-11', delivered: 320, failed: 130 },
    { day: '2024-01-12', delivered: 320, failed: 130 },
    { day: '2024-01-13', delivered: 320, failed: 130 },
    { day: '2024-01-14', delivered: 500, failed: 10 },
    { day: '2024-01-15', delivered: 320, failed: 130 },
    { day: '2024-01-16', delivered: 320, failed: 130 },
    { day: '2024-01-17', delivered: 320, failed: 130 },
    { day: '2024-01-18', delivered: 320, failed: 130 },
    { day: '2024-01-19', delivered: 320, failed: 130 },
    { day: '2024-01-20', delivered: 500, failed: 10 },
    { day: '2024-01-21', delivered: 320, failed: 130 },
    { day: '2024-01-22', delivered: 320, failed: 130 },
    { day: '2024-01-23', delivered: 320, failed: 130 },
    { day: '2024-01-24', delivered: 320, failed: 130 },
    { day: '2024-01-25', delivered: 320, failed: 130 },
    { day: '2024-01-26', delivered: 320, failed: 130 },
    { day: '2024-01-27', delivered: 320, failed: 130 },
    { day: '2024-01-28', delivered: 320, failed: 130 },
    { day: '2024-01-29', delivered: 320, failed: 130 },
    { day: '2024-01-30', delivered: 320, failed: 130 },
    { day: '2024-01-31', delivered: 320, failed: 130 },

  ];

  const getChartData = () => {
    let filteredData;
    if (selectedData === 'Today') {
      // Filter data for Today
      filteredData = customData.slice(-1);
    } else if (selectedData === 'Last 7 days') {
      // Filter data for Last 7 days
      filteredData = customData.slice(-7);
    } else if (selectedData === 'Last 30 days') {
      // Filter data for Last 30 days
      filteredData = customData.slice(-30);
    }
    return filteredData;
  };

  // Callback function to handle selection change
  const handleSelectChange = (value: string) => {
    setSelectedData(value); // Update the selected value
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
        <h2>₦0.00</h2>
        <p>in total value</p>
      </div>
    </div>
          <ResponsiveContainer style={{
      overflowY:"hidden",
      overflowX:"hidden",
    }} className={styles.chart} width="100%" height={209.51}>
            <BarChart data={getChartData()}>
              <XAxis dataKey="name" />
              <YAxis interval={0} tickCount={5} />
              <Tooltip />
              {/* <Legend /> */}
              <Bar dataKey="delivered" name="Delivered" fill="#FFC145" />
              <Bar dataKey="failed" name="Failed" fill="#FF0000" />
            </BarChart>
          </ResponsiveContainer>
          </div>
      </div>
  );
};

export default DashboardCharts;