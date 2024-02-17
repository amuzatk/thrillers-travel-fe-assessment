import React, { useEffect, useState } from 'react'
import AnalyticsCard from '../../../components/card/AnalyticsCard'
import { AnalyticsData, useAnalyticsData } from '../../../utils/sample-data';
import BarChat from './BarChat';
// import { AnalyticsData, useAnalyticsData } from "../../../utils/sample-data";


  // const GeneralDetails: React.FC<{ userDetails: User }> = ({ userDetails }) => {
  const GeneralDetails = () => {
  const [data, setData] = useState<AnalyticsData[]>([]);
  // const [screenWidth, setScreenWidth] = useState(
  //   typeof window !== 'undefined' ? window.innerWidth : 0
  // );

  useEffect(() => {
    const fetchData = async () => {
      const analyticsData = await useAnalyticsData();
      setData(analyticsData);
    };

    fetchData();
  // }, [dummyVariable, onForceRerender]);
}, []);

  return (
    <div>
      <AnalyticsCard 
      // item={{
      //   image: '',
      //   title: '',
      //   amount: ''
      // }}
       />
       <div>
        <BarChat />
       </div>
    </div>
  )
}

export default GeneralDetails
