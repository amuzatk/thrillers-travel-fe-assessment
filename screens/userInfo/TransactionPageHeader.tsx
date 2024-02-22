import React from 'react'
import styles from '../../styles/dashboard/TransactionPageHeader.module.scss'
import ExportIcon from '../../public/assets/icons/exportIcon.webp'
import Calendar from '../../public/assets/icons/calendar.webp'
import Image from 'next/image'
import { DownOutlined } from '@ant-design/icons';

const TransactionPageHeader = () => {

    const inputStyle = {
        border: 'none',
        height: '30px',
        color: '#2E2E2E',
        fontWeight: 400,
        lineHeight: '18.77px',
        fontSize: '16px',
        cursor:'pointer'
      };
  return (
    <div className={styles.wrapper}>
    <div className={styles.container}>
        <div 
        className={styles.left}

        style={{ 
            position: 'relative', 
            display: 'flex', 
            alignItems: 'center'
             }}
        >
     <input 
     type="text"
     style={inputStyle}
     placeholder="All Accounts"
      />
     <DownOutlined
      style={{
        position: 'absolute',
        right: '8px',
        fontSize: '8px',
      }}
      />

        </div>

        <div className={styles.right}>
            <p>Select Date range:</p>
            <div className={styles.picker}>
            <Image src={Calendar} alt='Calendar' width={20} height={20} />
            <span>June 6, 2023 - Jun 15, 2023</span>
           
            </div>
            <div className={styles.export}>
            <Image src={ExportIcon} alt='ExportIcon' width={20} height={20} />
            <span> Export</span>
            </div>
        </div>
    </div>

    <div className={styles.mobileWrapper}>
      <h1>hojhj;lckmdkkukuoileifjlwfkjiljejvnjdhggdghgwrwrrewfrwfrssfdfslfhrfjhfudjolfjdjk</h1>
     <div 
        className={styles.mobileTop}>
          <div className={styles.topLeft}>
     <input 
     type="text"
     placeholder="All Accounts"
      />
     <DownOutlined />
</div>
<div className={styles.export}>
            <Image src={ExportIcon} alt='ExportIcon' width={20} height={20} />
            <span> Export</span>
            </div>
        </div>
        <div className={styles.mobileBottom}>
            <p>Select Date range:</p>
            <div className={styles.picker}>
            <Image src={Calendar} alt='Calendar' width={20} height={20} />
            <span>June 6, 2023 - Jun 15, 2023</span>
           
            </div>     
        </div>
        </div>
    </div>
  )
}

export default TransactionPageHeader