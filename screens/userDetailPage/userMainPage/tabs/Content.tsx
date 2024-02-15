import React from 'react';

interface TabContentComponentProps {
  items: { label: string; content: React.ReactNode }[];
  selectedIndex: number;
}

const TabContentComponent: React.FC<TabContentComponentProps> = ({ items, selectedIndex }) => {
  const selectedTabContent = items[selectedIndex].content;

  return <div>{selectedTabContent}</div>;
};

export default TabContentComponent;
