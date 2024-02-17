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


import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Spin, Alert } from 'antd';
import styles from '../../styles/dashboard/Charts.module.scss';

const DashboardCharts = () => {
  const customData = [
    { month: 'Jan', delivered: 100 },
    { month: 'Feb', delivered: 120 },
    { month: 'Mar', delivered: 100 },
    { month: 'Apr', delivered: 120 },
    { month: 'May', delivered: 120 },
    { month: 'Jun', delivered: 120 },
    { month: 'Jul', delivered: 120 },
    { month: 'Aug', delivered: 120 },
    { month: 'Sep', delivered: 100 },
    { month: 'Oct', delivered: 120 },
    { month: 'Nov', delivered: 100 },
    { month: 'Dec', delivered: 120 },
  ];

  const getChartData = () => {
    return customData.map(data => ({
      name: data.month,
      delivered: data.delivered,
    }));
  };

  return (
    <div className={styles.container}
    style={{
      overflowY:"hidden",
      overflowX:"hidden"
    }}
    >
      <div style={{ marginTop:'20px',
      overflowY:"hidden",
      overflowX:"hidden"

      }}
      >
        <ResponsiveContainer 
        className={styles.chart} 
        width="100%" 
        // height={300}
        style={{
          overflowY:"hidden",
          overflowX:"hidden"
        }}
        >
          <BarChart data={getChartData()}>
            <XAxis dataKey="name" />
            <YAxis interval={0} tickCount={6} />
            <Tooltip />
            <Legend />
            <Bar dataKey="delivered" name="Delivered" fill="#FFC145" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardCharts;
