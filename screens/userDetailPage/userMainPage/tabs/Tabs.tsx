import React, { useState } from 'react';
import { Tab, Tabs, TabList } from 'react-tabs';
import styles from '../../../../styles/dashboard/Tabs.module.scss';
import { currencyFormatter } from '../../../../helpers';
import Image from 'next/image';
import { User } from '../../../../interfaces';

interface TabsComponentProps {
  items: { label: string; content: React.ReactNode }[];
  onSelect: (index: number) => void;
  userDetails?: User;
}

const TabsComponent: React.FC<TabsComponentProps> = ({ items, onSelect, userDetails }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
// console.log(userDetails,'userDetails==>> TabsComponent')
  const handleTabSelect = (index: number) => {
    setSelectedIndex(index);
    onSelect(index);
  };

  return (
    <div className={styles.container}>
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


