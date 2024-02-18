// import React from "react";
// import styles from "../../styles/dashboard/Analytics.module.scss";
// import Image from "next/image";

// interface AnalyticsCardProps {
//   item: {
//     image: string;
//     title: string;
//     amount: string;
//   };
// }

// const AnalyticsCard: React.FC<AnalyticsCardProps> = ({ item }) => {
//   const { image, title, amount } = item;

//   return (
//     <div className={styles.container}>
//       <div className={styles.main}>
//         <Image src={image} alt={`${title} Icon`} width={40} height={40} />
//         <p>{title}</p>
//         <span className={styles.amount}>{amount}</span>
//       </div>
//     </div>
//   );
// };

// export default AnalyticsCard;

import React from "react";
import styles from "../../styles/dashboard/Analytics.module.scss";
import Image from "next/image";
import ClipBoard from '../../public/assets/icons/clipboard.webp'
import { BarChartData, Transaction } from "../../interfaces";

// interface AnalyticsCardProps {
//   item: {
//     image: string;
//     title: string;
//     amount: string;
//   };
// }
interface Props {
  mockTableData: Transaction[];
}

const AnalyticsCard: React.FC<Props> = ({mockTableData }) => {

  const bankName = mockTableData[0].bankName;
  const accountNumber = mockTableData[0].accountNumber


  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p>ACCOUNT DETAILS</p>
        <span className={styles.sterling}>{bankName} </span>
        <h4>{accountNumber} </h4>
      </div>
      <div className={styles.right}>
      <Image src={ClipBoard} alt='ClipBoard' width={70} height={28} />
      </div>
    </div>
  );
};

export default AnalyticsCard;