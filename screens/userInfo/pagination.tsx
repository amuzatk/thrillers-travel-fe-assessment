import React from 'react';
import { Pagination, Select } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import styles from '../../styles/dashboard/Paginate.module.scss';
const { Option } = Select;

interface PaginateProps {
  current: number;
  pageSize: number;
  total: number;
  onChange: (page: number, pageSize?: number | undefined) => void; // Update the type of onChange
}

const Paginate: React.FC<PaginateProps> = ({
  current,
  pageSize,
  total,
  onChange,
}) => {
  const pageSizeOptions = [10, 20, 50, 100];

  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <p> Showing </p>
        <Select
          value={pageSize}
          onChange={(value) => onChange(1, Number(value))}
          popupMatchSelectWidth ={false}
          popupClassName ={styles.dropdown}
          style={{ outline: "none", border: "none" }}
        >
          {pageSizeOptions.map(option => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
        </Select>
        <p> of {total} results </p>
      </div>
      <div className={styles.right}>
        <Pagination
          current={current}
          total={total}
          pageSize={pageSize}
          onChange={onChange}
          showSizeChanger={false}
          prevIcon={<LeftOutlined className={styles.arrow} />}
          nextIcon={<RightOutlined className={styles.arrow} />}
          itemRender={(page, type, originalElement) =>
            type === 'page' ? (
              <span
                key={page}
                className={current === page ? styles.activePage : undefined} 
              >
                {page}
              </span>
            ) : (
              originalElement
            )
          }
        />
      </div>
    </div>
  );
};

export default Paginate;