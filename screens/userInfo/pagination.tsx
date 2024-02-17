// import React from 'react';
// import { Pagination, Select } from 'antd';
// import { LeftOutlined, RightOutlined } from '@ant-design/icons';
// import styles from '../../styles/dashboard/Paginate.module.scss';
// const { Option } = Select;

// interface PaginateProps {
//   current: number;
//   pageSize: number;
//   total: number;
//   onChange: (page: number, pageSize?: number) => void;
// }

// const Paginate: React.FC<PaginateProps> = ({
//   current,
//   pageSize,
//   total,
//   onChange,
// }) => {
//   const pageSizeOptions = [10, 20, 50, 100];

//   return (
//     <div 
//       className={styles.main}
//       >
//       <div
//       className={styles.left}
//       >
//         <p> Showing </p>
//       <Select
//   value={pageSize}
//   onChange={(value) => onChange(1, Number(value))}
//   className={styles.dropdown}
// >
//   {pageSizeOptions.map(option => (
//     <Option key={option} value={option}>
//       {option}
//     </Option>
//   ))}
// </Select>
//       <p> out of {total} </p>
//       </div>
//       <div className={styles.right}>
//       <Pagination
//         current={current}
//         total={total}
//         pageSize={pageSize}
//         onChange={onChange}
//         showSizeChanger={false}
//         prevIcon={
//           <LeftOutlined 
//             className={styles.arrow}
//           /> 
//         }
//         nextIcon={
//           <RightOutlined 
//             className={styles.arrow}
//           />
//         }
//         itemRender={(page, type, originalElement) => (
//           type === 'page' ? (
//             <span>{page}</span>
//           ) : (
//             originalElement
//           )
//         )}
//       />
//       </div>
//     </div>
//   );
// };

// export default Paginate;


import React, { useState } from 'react';
import { Select } from 'antd';
// import styles from '../../styles/dashboard/Charts.module.scss';
import styles from '../../styles/dashboard/Charts.module.scss';

const { Option } = Select;

interface CustomSelectProps {
  onChange: (value: string) => void; // Define the type for the onChange prop
}

const CustomSelect: React.FC<CustomSelectProps> = ({ onChange }) => {
  const [pageSize, setPageSize] = useState<string>('Today'); // Default value for the select

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

