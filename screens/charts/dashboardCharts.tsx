// import React, { useEffect, useState } from 'react';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { Spin, Alert } from 'antd';
// import { fetchUsers } from '../../features/users/userActions';
// import { User } from '../../interfaces';
// import styles from '../../styles/dashboard/Charts.module.scss';

// const DashboardCharts = () => {
//   // const [originalData, setOriginalData] = useState<Array<User>>([]);
//   // const [isLoading, setIsLoading] = useState(true);
//   // const [isError, setIsError] = useState(false);

//   // const fetchAndStoreUsers = async () => {
//   //   try {
//   //     setIsLoading(true);
//   //     const users = await fetchUsers();
//   //     localStorage.setItem('users', JSON.stringify(users));
//   //     setOriginalData(users);
//   //     setIsLoading(false);
//   //   } catch (error) {
//   //     console.error('Error fetching users:', error);
//   //     setIsLoading(false);
//   //     setIsError(true);
//   //   }
//   // };

//   // useEffect(() => {
//   //   const storedUsers = localStorage.getItem('users');
//   //   if (storedUsers) {
//   //     const parsedUsers = JSON.parse(storedUsers);
//   //     setOriginalData(parsedUsers);
//   //     setIsLoading(false);
//   //   } else {
//   //     fetchAndStoreUsers();
//   //   }
//   // }, []);

//   // if (isLoading) return <span className={styles.loading}><Spin size="large" /></span>;
//   // if (isError) return <Alert message="Error fetching data" type="error" />;

//   const customData = [
//     { month: 'Jan', delivered: 100,  },
//     { month: 'Feb', delivered: 120,  },
//     { month: 'Mar', delivered: 100,  },
//     { month: 'Apr', delivered: 120,  },
//     { month: 'May', delivered: 120,  },
//     { month: 'Jun', delivered: 120,  },
//     { month: 'Jul', delivered: 120,  },
//     { month: 'Aug', delivered: 120, },
//     { month: 'Sep', delivered: 100,  },
//     { month: 'Oct', delivered: 120, },
//     { month: 'Nov', delivered: 100,  },
//     { month: 'Dec', delivered: 120,  },
//   ];

//   const getChartData = () => {
//     const barChartData = customData.map(data => ({
//       name: data.month,
//       delivered: data.delivered,
//       // failed: data.failed,
//     }));
//     return barChartData;
//   };

//   return (
//     <div className={styles.container}>
//       <div style={{ marginTop: '20px' }}>
//         <div >
//           <ResponsiveContainer className={styles.chart} width="100%" height={209.51}>
//             <BarChart data={getChartData()}>
//               <XAxis dataKey="name" />
//               <YAxis domain={['100000', '500000']} />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey="delivered" name="Delivered" fill="#1D2C7E" />
//               <Bar dataKey="failed" name="Failed" fill="#FF0000" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardCharts;


import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Spin, Alert } from 'antd';
import { fetchUsers } from '../../features/users/userActions';
import { User } from '../../interfaces';
import styles from '../../styles/dashboard/Charts.module.scss';

const DashboardCharts = () => {
  const customData = [
    { month: 'Jan', delivered: 500, failed: 10 },
    { month: 'Feb', delivered: 320 , failed: 130 },
    { month: 'Mar', delivered: 400 , failed: 100 },
    { month: 'Apr', delivered: 520 , failed: 180 },
    { month: 'May', delivered: 350 , failed: 100 },
    { month: 'Jun', delivered: 650 , failed: 100 },
    { month: 'Jul', delivered: 420 , failed: 10 },
    { month: 'Aug', delivered: 320 , failed: 150 },
    { month: 'Sep', delivered: 600 , failed: 100 },
    { month: 'Oct', delivered: 720 , failed: 106 },
    { month: 'Nov', delivered: 500 , failed: 150 },
    { month: 'Dec', delivered: 680 , failed: 100 },
  ];

  const getChartData = () => {
    const barChartData = customData.map(data => ({
      name: data.month,
      delivered: data.delivered,
      failed: data.failed,
    }));
    return barChartData;
  };

  return (
    <div className={styles.container}>

    <div className={styles.top}>
      <div className={styles.left}>
        <p>Showing data for</p>
        <input type="text" />
      </div>
      <div className={styles.right}>
        <p>Today</p>
        <span><p> Last 7 days</p> </span>
        <p>Last 30 days</p>
      </div>
    </div>

    <div className={styles.charts}>
    <div className={styles.text}>
      <div className={styles.upper}>
        <h5>Revenue</h5>
        <p><span> +0.00% </span> vs Last 7 days</p>
      </div>
      <div className={styles.lower}>
        <h2>₦0.00</h2>
        <p>in total value</p>
      </div>
    </div>
          <ResponsiveContainer style={{
      overflowY:"hidden",
      overflowX:"hidden",
      // maxWidth:"932.98px"
    }} className={styles.chart} width="100%" height={209.51}>
            <BarChart data={getChartData()}>
              <XAxis dataKey="name" />
              {/* <YAxis domain={['100000', '500000']} /> */}
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