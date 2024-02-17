import React from 'react'
import styles from '../../styles/dashboard/TransactionPageHeader.module.scss'
import ExportIcon from '../../public/assets/icons/exportIcon.webp'
import Calendar from '../../public/assets/icons/calendar.webp'
import Image from 'next/image'
import { DownOutlined } from '@ant-design/icons';
// import { DatePicker } from 'antd'
// import CustomIcon from '../../constants/svgIcons/CallendarIcon'

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
            {/* <input className={styles.picker} type="text" /> */}
            
           

            </div>
            <div className={styles.export}>
            <Image src={ExportIcon} alt='ExportIcon' width={20} height={20} />
            <span> Export</span>
            </div>

        </div>

    </div>
  )
}

export default TransactionPageHeader


// import React, { useState } from 'react';
// import styles from '../../styles/dashboard/TransactionPageHeader.module.scss';
// import ExportIcon from '../../public/assets/icons/exportIcon.webp';
// import Calendar from '../../public/assets/icons/calendar.webp';
// import Image from 'next/image';
// import { DownOutlined } from '@ant-design/icons';
// import { DatePicker } from 'antd';
// import CustomIcon from '../../constants/svgIcons/CallendarIcon';

// const TransactionPageHeader = () => {
//     const [showDatePicker, setShowDatePicker] = useState(false);
//     const [selectedDates, setSelectedDates] = useState([]);
//     const inputStyle = {
//         border: 'none',
//         height: '30px',
//         color: '#2E2E2E',
//         fontWeight: 400,
//         lineHeight: '18.77px',
//         fontSize: '16px',
//         cursor: 'pointer'
//     };

//     const handleCalendarClick = () => {
//         setShowDatePicker(!showDatePicker);
//     };

//     const handleDateChange = (dates) => {
//         setSelectedDates(dates);
//     };

//     return (
//         <div className={styles.container}>
//             <div
//                 className={styles.left}
//                 style={{
//                     position: 'relative',
//                     display: 'flex',
//                     alignItems: 'center'
//                 }}
//             >
//                 <input
//                     type="text"
//                     style={inputStyle}
//                     placeholder="All Accounts"
//                 />
//                 <DownOutlined
//                     style={{
//                         position: 'absolute',
//                         right: '8px',
//                         fontSize: '8px',
//                     }}
//                 />
//             </div>
//             <div className={styles.right}>
//                 <p>Select Date range:</p>
//                 <div className={styles.picker}>
//                     <Image
//                         src={Calendar}
//                         alt='Calendar'
//                         width={20}
//                         height={20}
//                         onClick={handleCalendarClick}
//                         style={{ cursor: 'pointer' }}
//                     />
//                     {showDatePicker && (
//                         <>
//                             <DatePicker.RangePicker
//                                 style={{ marginTop: '10px' }}
//                                 onChange={handleDateChange}
//                                 format="MMM DD, YYYY"
//                             />
//                         </>
//                     )}
//                     <span>
//                         {selectedDates.length === 2 && (
//                             <>
//                                 {selectedDates[0].format('MMM DD, YYYY')} - {selectedDates[1].format('MMM DD, YYYY')}
//                             </>
//                         )}
//                     </span>
//                 </div>
//                 <div className={styles.export}>
//                     <Image src={ExportIcon} alt='ExportIcon' width={20} height={20} />
//                     <span> Export</span>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TransactionPageHeader;


