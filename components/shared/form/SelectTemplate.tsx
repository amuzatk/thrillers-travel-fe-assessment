import React, { useEffect, useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import styles from '../../../styles/shared/SelectTemplate.module.scss';
import { User } from '../../../interfaces';
import { fetchUsers } from '../../../features/users/userActions';

interface SelectTemplateProps {
  onChange: (selectedOrganization: string) => void;
  selectedOrganization: string;
}

const SelectTemplate: React.FC<SelectTemplateProps> = ({ onChange, selectedOrganization }) => {
  const [originalData, setOriginalData] = useState<Array<User>>([]);
  const [filteredData, setFilteredData] = useState<Array<User>>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  useEffect(() => {
    // Check if users are already stored in local storage
    const storedUsers = localStorage.getItem('users');

    if (storedUsers) {
      const parsedUsers = JSON.parse(storedUsers);
      console.log(parsedUsers, 'parsedUsers ==> From localStorage');
      setOriginalData(parsedUsers);
      setFilteredData(parsedUsers);
    } else {
      // Fetch and store users if not present in local storage
      fetchUsers();
    }
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredUsers = originalData.filter(
      (user) => user?.orgName.toLowerCase().includes(searchTerm)
    );
    
    setFilteredData(filteredUsers);
    setDropdownOpen(true);
  };

  const handleSelectChange = (selectedValue: string) => {
    // Check if "Switch Organization" is selected
    if (selectedValue === 'Switch Organization') {
      // If "Switch Organization" is selected, set the selected organization to an empty string or a default value
      onChange('');
    } else {
      // Otherwise, pass the selected value to the parent component
      onChange(selectedValue);
    }

    // Close the dropdown
    setDropdownOpen(false);
  };

  const inputStyle = {
    border: 'none',
    height: '35px',
    fontFamily: 'Work Sans',
    color: '#213F7D',
    fontWeight: 400,
    lineHeight: '18.77px',
    fontSize: '16px',
    width: '180px',
    cursor:'pointer'
  };

  return (
    <div style={{ 
      position: 'relative', 
      display: 'flex', 
      alignItems: 'center'
       }}>
      <input
  type="text"
  placeholder="Switch Organization"
  value={searchTerm}
  onChange={handleInputChange}
  style={inputStyle}
  className={styles.placehold}
/>
      <DownOutlined
        style={{
          position: 'absolute',
          right: '8px',
          fontSize: '12px',
          color: '#213F7D',
          cursor: 'pointer',
        }}
        onClick={() => setDropdownOpen(!dropdownOpen)}
      />

      {dropdownOpen && (
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            position: 'absolute',
            top: '40px',
            left: 0,
            zIndex: 1,
            border: '1px solid #ccc',
            background: '#fff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          <li>
            <button
              onClick={() => handleSelectChange('Switch Organization')}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Work Sans',
                color: '#213F7D',
                fontWeight: 400,
                lineHeight: '18.77px',
                fontSize: '16px',
                width: '100%', // Set the width as needed
                textAlign: 'left',
                padding: '8px 12px',
              }}
            >
              Switch Organization
            </button>
          </li>
          {filteredData.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleSelectChange(item?.orgName)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'Work Sans',
                  color: '#213F7D',
                  fontWeight: 400,
                  lineHeight: '18.77px',
                  fontSize: '16px',
                  width: '100%', // Set the width as needed
                  textAlign: 'left',
                  padding: '8px 12px',
                }}
              >
                {item.orgName}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectTemplate;