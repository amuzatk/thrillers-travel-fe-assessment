import React, { useState } from 'react';
import { Tab, Tabs, TabList } from 'react-tabs';
import styles from '../../../../styles/dashboard/Tabs.module.scss';
import { currencyFormatter } from '../../../../helpers';
import Image from 'next/image';
import { Rate } from 'antd';
import { User } from '../../../../interfaces';

interface TabsComponentProps {
  items: { label: string; content: React.ReactNode }[];
  onSelect: (index: number) => void;
  userDetails?: User;
}

const TabsComponent: React.FC<TabsComponentProps> = ({ items, onSelect, userDetails }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
console.log(userDetails,'userDetails==>> TabsComponent')
  const handleTabSelect = (index: number) => {
    setSelectedIndex(index);
    onSelect(index);
  };

  const firstName = userDetails?.profile?.firstName;
  const lastName = userDetails?.profile?.lastName;
  const avatar = userDetails?.profile?.avatar || "/assets/images/LoginUser.webp" ;
  const accountBalance = userDetails?.accountBalance;
  const accountNumber = userDetails?.accountNumber;
  const banker = userDetails?.bankName;
  const regNumber = userDetails?.lensqrRegNumber;

  return (
    <div className={styles.container}>
<div className={styles.top}>
        <div className={styles.first}>
          <Image
            style={{ borderRadius: "50%" }}
            src={avatar}           
            width={100}
            height={100}
            alt="avatar"
          />
          <div className={styles.inner}>
          <span className={styles.name}>{firstName} {lastName} </span>
            <span className={styles.others}>{regNumber}</span>
          </div>
        </div>
        <div className={styles.second}>
        <span className={styles.user}>User's Tier</span>
            <span className={styles.rating}><Rate count={3} defaultValue={1} /></span>
        </div>
        <div className={styles.third}>

        <span className={styles.amount}>
          {currencyFormatter('en-NG', 'NGN', Number(accountBalance))}
          </span>
            <span className={styles.bank}>{accountNumber}/{banker}</span>
        </div>
      </div>


      <Tabs className={styles.tabs} selectedIndex={selectedIndex} onSelect={handleTabSelect}>
        <TabList className={styles.tab}>
          {items.map((item, index) => (
            <Tab key={index} className={index === selectedIndex ? styles.activeTab : ''}>
              {item.label}
            </Tab>
          ))}
        </TabList>
      </Tabs>


    </div>
  );
};

export default TabsComponent;


