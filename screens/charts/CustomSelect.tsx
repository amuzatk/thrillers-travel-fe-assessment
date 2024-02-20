import React, { useState } from 'react';
import { Select } from 'antd';
import styles from '../../styles/dashboard/Charts.module.scss';

const { Option } = Select;

interface CustomSelectProps {
  onChange: (value: string) => void; // Define the type for the onChange prop
}

const CustomSelect: React.FC<CustomSelectProps> = ({ onChange }) => {
  const [pageSize, setPageSize] = useState<string>('Last 7 days'); // Default value for the select

  const handlePageSizeChange = (value: string) => {
    setPageSize(value); // Update the selected value
    onChange(value); // Call the parent onChange function
  };

  const pageSizeOptions = ['Today', 'Last 7 days', 'Last 30 days'];

  return (
    <Select className={styles.selet} value={pageSize} onChange={handlePageSizeChange}>
      {pageSizeOptions.map(option => (
        <Option key={option} value={option}>
          {option}
        </Option>
      ))}
    </Select>
  );
};

export default CustomSelect;