import React from "react";
import styles from "../../styles/dashboard/Analytics.module.scss";
import Image from "next/image";

interface AnalyticsCardProps {
  item: {
    image: string;
    title: string;
    amount: string;
  };
}

const AnalyticsCard: React.FC<AnalyticsCardProps> = ({ item }) => {
  const { image, title, amount } = item;

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Image src={image} alt={`${title} Icon`} width={40} height={40} />
        <p>{title}</p>
        <span className={styles.amount}>{amount}</span>
      </div>
    </div>
  );
};

export default AnalyticsCard;