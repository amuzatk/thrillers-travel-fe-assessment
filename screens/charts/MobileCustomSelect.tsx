import React, { useState } from 'react';
import { Select } from 'antd';
import styles from '../../styles/dashboard/Charts.module.scss';

const { Option } = Select;

interface MobileCustomSelectProps {
  onChange: (value: string) => void;
}

const MobileCustomSelect: React.FC<MobileCustomSelectProps> = ({ onChange }) => {
  const [selectedOption, setSelectedOption] = useState<string>('Weekly');

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
    onChange(value);
  };

  const pageSizeOptions = ['Weekly', 'Last 2 weeks', 'Last 3 weeks'];


  return (
    <Select className={styles.select} value={selectedOption} onChange={handleOptionChange}>
      {pageSizeOptions.map(option => (
        <Option key={option} value={option}>
          {option}
        </Option>
      ))}
    </Select>
  );
};

export default MobileCustomSelect;
