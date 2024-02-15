import React, { useState } from "react";
import styles from "../../../styles/dashboard/UserDetailMainPage.module.scss";
import GeneralDetails from "./generalDetail";
import AppNSystem from "./app&Sytems";
import Savings from "./savings";
import Loans from "./loans";
import BankDetail from "./bankDetail";
import Documents from "./document";
import TabsComponent from "./tabs/Tabs";
import TabContentComponent from "./tabs/Content";
import { User } from "../../../interfaces";

  const UserDetailMainPage: React.FC<{ userDetails: User }> = ({ userDetails }) => {

  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleTabSelect = (index: number) => {
    setSelectedTabIndex(index);
  };

  const tabItems = [
    { label: 'General Details', content: <GeneralDetails userDetails={userDetails} /> },
    { label: 'Documents', content: <Documents /> },
    { label: 'Bank Details', content: <BankDetail /> },
    { label: 'Loans', content: <Loans /> },
    { label: 'Savings', content: <Savings /> },
    { label: 'App and System', content: <AppNSystem /> },
  ];
  
  
  
  return (
    <div className={styles.main}>
    <div className={styles.tab}>
      <TabsComponent items={tabItems} onSelect={handleTabSelect} userDetails={userDetails} />
    </div>
    <div className={styles.content}>
    <TabContentComponent items={tabItems} selectedIndex={selectedTabIndex} />
    </div>
    </div>
  );
};

export default UserDetailMainPage;