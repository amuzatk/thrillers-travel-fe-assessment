import React from "react";
import styles from '../../../styles/dashboard/PersonalInfo.module.scss'
import { Divider } from "antd";
import { User } from "../../../interfaces";
import { currencyFormatter } from "../../../helpers";

  const EducationNEmployment: React.FC<{ userDetails: User }> = ({ userDetails }) => {
  const educationLevel = userDetails?.education?.level;
  // const officeEmail = userDetails?.education?.officeEmail;
  const officeEmail = userDetails?.email;
  const employmentStatus = userDetails?.education?.employmentStatus;
  const incomeRange1 = userDetails?.education?.monthlyIncome[0];
  const incomeRange2 = userDetails?.education?.monthlyIncome[1];
  const sector = userDetails?.education?.sector;
  const loanRepayment = userDetails?.education?.loanRepayment;
  const employmenntDuration = userDetails?.education?.duration;
  
  return (
    <div className={styles.container}>
      <h1>Education and Employment</h1>
      <div className={styles.main}>
        <div className={styles.first}>
        <div className={styles.cont}>
            <span className={styles.full}>level of education</span>
            <span className={styles.name}>{educationLevel}</span>
          </div>
          <div className={styles.cont}>
            <span className={styles.full}>office email</span>
            <span style={{textTransform:"lowercase"}} className={styles.name}>{officeEmail}</span>
          </div>
        </div>
        <div className={styles.second}>
        <div className={styles.cont}>

            <span className={styles.full}>employment status</span>
            <span className={styles.name}>{employmentStatus}</span>
          </div>
          <div className={styles.cont}>
            <span className={styles.full}>Monthly income</span>
            <span className={styles.name}>{currencyFormatter('en-NG', 'NGN', Number(incomeRange1))}- {currencyFormatter('en-NG', 'NGN', Number(incomeRange2))}</span>
          </div>
        </div>
        <div className={styles.third}>
        <div className={styles.cont}>

            <span className={styles.full}>sector of employment</span>
            <span className={styles.name}>{sector}</span>
          </div>
          <div className={styles.cont}>
            <span className={styles.full}>loan repayment</span>
            <span className={styles.name}>{loanRepayment}</span>
          </div>
        </div>
        <div className={styles.forth}>
        <div className={styles.cont}>
            <span className={styles.full}>Duration of employment</span>
            <span className={styles.name}>{employmenntDuration}</span>
          </div>
        </div>
      </div>
    <Divider />
    </div>
  );
};

export default EducationNEmployment;
