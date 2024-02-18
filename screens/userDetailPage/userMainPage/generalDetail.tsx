import React from 'react'
import AnalyticsCard from '../../../components/card/AnalyticsCard'
import DashboardCharts from '../../charts/dashboardCharts';
import { BarChartData, Transaction } from '../../../interfaces';
interface Props {
  mockTableData: Transaction[];
  mockBarChartData: BarChartData[]
}

const GeneralDetails: React.FC<Props> = ({ mockTableData, mockBarChartData }) => {

  return (
    <div 
    >
      <AnalyticsCard 
 mockTableData={mockTableData}
       />
       <div>
        <DashboardCharts />
       </div>
    </div>
  )
}

export default GeneralDetails
