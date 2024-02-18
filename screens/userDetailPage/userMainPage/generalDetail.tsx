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
    // style={{border:"1px solid red"}}
    >
      <AnalyticsCard 
 mockTableData={mockTableData}
       />
       <div>
        <DashboardCharts
          mockBarChartData={mockBarChartData} mockTableData={mockTableData}         />
       </div>
    </div>
  )
}

export default GeneralDetails
