import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Legend, ScatterChart, Scatter, XAxis, YAxis, Tooltip } from 'recharts';
import styles from "../../styles/dashboard/Charts.module.scss";
import { Alert, Spin } from 'antd';
import { User } from '../../interfaces';
import { fetchUsers } from '../../features/users/userActions';

const DashboardCharts = ({ 
 }) => {
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [originalData, setOriginalData] = useState<Array<User>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

    const fetchAndStoreUsers = async () => {
    try {
      // Simulate loading delay
      setIsLoading(true);
      setTimeout(async () => {
      const users = fetchUsers();
        localStorage.setItem('users', JSON.stringify(users));
        setOriginalData(users);
        setIsLoading(false);
      }, 1000); // Simulating a delay of 1 second
    } catch (error) {
      console.error('Error fetching users:', error);
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    // Check if users are already stored in local storage
    const storedUsers = localStorage.getItem('users');

    if (storedUsers) {
      const parsedUsers = JSON.parse(storedUsers);
      console.log(parsedUsers, 'parsedUsers ==> From localStorage');
      setOriginalData(parsedUsers);
      setIsLoading(false);
    } else {
      // Fetch and store users if not present in local storage
      fetchAndStoreUsers();
    }
  }, []);

  if (isLoading) return <span style={{
    // border:"2px solid green",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"

  }}
  className={styles.loading}
  > <Spin size="large" /></span>;
  if (isError) return <Alert message="Error fetching data" type="error" />;




    const getChartData = () => {
    // const totalUsers = originalData.length;

    const barChartData = originalData.map((user) => ({
      name: user.userName,
      accountBalance: parseFloat(user.accountBalance),
    }));

    const lineChartData = originalData.map((user) => ({
      name: user.userName,
      monthlyIncome: parseFloat(user.education.monthlyIncome[0]),
    }));

    const pieChartData = [
      { name: 'Active', value: originalData.filter((user) => user.status.array[0] === 'Active').length },
      { name: 'Inactive', value: originalData.filter((user) => user.status.array[0] === 'Inactive').length },
      { name: 'Pending', value: originalData.filter((user) => user.status.array[0] === 'Pending').length },
      { name: 'Blacklisted', value: originalData.filter((user) => user.status.array[0] === 'Blacklisted').length },
    ];

    return { barChartData, lineChartData, pieChartData };
  };

  const handlePieClick = (entry: { name: React.SetStateAction<null>}) => {
    setSelectedStatus(entry.name);
  };

  const getScatterChartData = () => {
    return originalData.map((user) => ({
      name: user.userName,
      x: parseFloat(user.education.loanRepayment),
      y: parseFloat(user.accountBalance),
    }));
  };

  return (
    <div className={styles.container}>
      <div style={{ marginTop: '20px' }}>
        <div className={styles.chart}>
        <PieChart width={250} height={250}>
          <Pie
            data={getChartData().pieChartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
            onClick={handlePieClick}
          >
            {getChartData().pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
        </div>
        {selectedStatus && <p>{`Selected status: ${selectedStatus}`}</p>}
      </div>

      <div style={{ marginTop: '20px' }}>
        <div className={styles.chart}>
        <ScatterChart width={250} height={250}>
          <XAxis type="number" dataKey="x" name="Loan Repayment" unit=" USD" />
          <YAxis type="number" dataKey="y" name="Account Balance" unit=" USD" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter data={getScatterChartData()} fill="#8884d8" />
          <Legend />
        </ScatterChart>
        </div>
      </div>
    </div>
  );
};

export default DashboardCharts;



