import React, { useState } from "react";
import styles from "../../../styles/dashboard/UserDetailMainPage.module.scss";
import GeneralDetails from "./generalDetail";
import TabsComponent from "./tabs/Tabs";
import TabContentComponent from "./tabs/Content";
import { Divider } from "antd";

const DashboardInfo = () => {

  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleTabSelect = (index: number) => {
    setSelectedTabIndex(index);
  };

  const tabItems = [
    { label: 'Online Payments', content: <GeneralDetails /> },
  ];
  
  
  return (
    <div className={styles.main}>
    <div className={styles.tab}>
      <TabsComponent items={tabItems} onSelect={handleTabSelect}/>
      <Divider 
      className={styles.divide}
       />
    </div>
    <Divider 
      className={styles.divide2}
       />
    <div className={styles.content}>
    <TabContentComponent items={tabItems} selectedIndex={selectedTabIndex} />
    </div>
    </div>
  );
};

export default DashboardInfo;