import React from 'react';
import { Form, Input, Select, Button, DatePicker } from 'antd';
import moment from 'moment';
import CustomIcon from "../../constants/svgIcons/CallendarIcon";
import { User } from '../../interfaces';
import styles from '../../styles/dashboard/UserInfo3.module.scss';

interface FilterFormProps {
  originalData: User[];
  form: any; // Type 'any' for Form instance
  setFilteredData: React.Dispatch<React.SetStateAction<User[]>>;
}

const FilterForm: React.FC<FilterFormProps> = ({ originalData, form, setFilteredData }) => {
  const onFinish = (values: any) => {
    let newFilteredData = originalData.slice(); // Make a copy of originalData array

    // Filter by organization name
    if (values.orgName && values.orgName.length > 0) {
      newFilteredData = newFilteredData.filter((item) =>
        values.orgName.includes(item.orgName)
      );
    }

    // Filter by username
    if (values.userName) {
      newFilteredData = newFilteredData.filter((item) =>
        item.userName.toLowerCase().includes(values.userName.toLowerCase())
      );
    }

    // Filter by email
    if (values.email) {
      newFilteredData = newFilteredData.filter((item) =>
        item.email.toLowerCase().includes(values.email.toLowerCase())
      );
    }

    // Filter by phone number
    if (values.phoneNumber) {
      newFilteredData = newFilteredData.filter((item) =>
        item.phoneNumber.toLowerCase().includes(values.phoneNumber.toLowerCase())
      );
    }

    // Filter by date
    if (values.createdAt) {
      const selectedDate = moment(values.createdAt).format('MMM DD, YYYY');
      newFilteredData = newFilteredData.filter((item) =>
        item.createdAt.toLowerCase().includes(selectedDate.toLowerCase())
      );
    }

    // Filter by status
    if (values.status && values.status.length > 0) {
      newFilteredData = newFilteredData.filter((item) =>
        values.status.includes(item.status.array[0])
      );
    }

    setFilteredData(newFilteredData);
  };

  return (
    <div className={styles.formContainer}>
      <Form
        form={form}
        layout="vertical"
        initialValues={{ orgName: [] }}
        onFinish={onFinish}
        className={styles.forWrapper}
      >
        <Form.Item label="Organization" className={styles.label} name="orgName">
          <Select mode="multiple" placeholder="Select" showSearch className={styles.selet}>
            {originalData.map((item) => (
              <Select.Option key={item.orgName} value={item.orgName}>
                {item.orgName}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Username" name="userName">
          <Input placeholder="User" />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item label="Date" name="createdAt">
          <DatePicker
            style={{ width: "100%", height: "40px" }}
            placeholder="Date"
            format="MMM DD, YYYY"
            suffixIcon={<CustomIcon />}
            onChange={(date, dateString) => {
              // Handle the date change if needed
              // console.log(date,'Date selected')
            }}
          />
        </Form.Item>
        <Form.Item label="Phone Number" name="phoneNumber" className={styles.label}>
          <Input placeholder="Phone Number" />
        </Form.Item>
        <Form.Item label="Status" name="status">
          <Select className={styles.selet} mode="multiple" placeholder="Select">
            {Array.from(new Set(originalData.map((item) => item?.status?.array[0]))).map((status) => (
              <Select.Option key={status} value={status}>
                {status}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <div className={styles.buttons}>
          <Form.Item>
            <Button onClick={() => { form.resetFields(); setFilteredData(originalData); }} className={styles.reset}>
              Reset
            </Button>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className={styles.filter}>
              Filter
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default FilterForm;