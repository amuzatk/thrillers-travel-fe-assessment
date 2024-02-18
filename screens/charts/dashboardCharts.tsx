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
  const [selectedData, setSelectedData] = useState<string>('Last 7 days');

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
