import React, { useState } from "react";
import styles from "../../../styles/dashboard/UserDetailMainPage.module.scss";
import GeneralDetails from "./generalDetail";
import TabsComponent from "./tabs/Tabs";
import TabContentComponent from "./tabs/Content";
import { Divider } from "antd";

  // const UserDetailMainPage: React.FC<{ userDetails: User }> = ({ userDetails }) => {
  const UserDetailMainPage = () => {

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
      style={{
        marginTop:"0px",
        marginLeft:"21px",
        border:"2px solid #EDEDF2"
      }}
       />
    </div>
    <div className={styles.content}>
    <TabContentComponent items={tabItems} selectedIndex={selectedTabIndex} />
    </div>
    </div>
  );
};

export default UserDetailMainPage;