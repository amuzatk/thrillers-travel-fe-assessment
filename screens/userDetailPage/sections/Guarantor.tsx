import React from "react";
import styles from '../../../styles/dashboard/PersonalInfo.module.scss';
import { Divider } from "antd";
import { User } from "../../../interfaces";

  const Guarantor: React.FC<{ userDetails: User }> = ({ userDetails }) => {
  const firstName = userDetails?.guarantor?.firstName;
  const lastName = userDetails?.guarantor?.lastName;
  const phoneNumber = userDetails?.guarantor?.phoneNumber;
  const gender = userDetails?.guarantor?.gender;
  const email = userDetails?.guarantor?.email;
  const relationship = userDetails?.guarantor?.relationship;

  return (
    <div className={styles.container}>
      <h1>Guarantor</h1>
      <div className={styles.main}>
        <div className={styles.first}>
                    <div className={styles.cont}>
            <span className={styles.full}>full Name</span>
            <span className={styles.name}>{firstName}  {lastName}</span>
          </div>
        </div>
        <div className={styles.second}>
        <div className={styles.cont}>

            <span className={styles.full}>Phone Number</span>
            <span className={styles.name}>{phoneNumber}</span>
          </div>
        </div>
        <div className={styles.third}>
        <div className={styles.cont}>
            <span className={styles.full}>Email Address</span>
            <span style={{textTransform:"lowercase"}} className={styles.name}>{email}</span>
          </div>
        </div>
        <div className={styles.forth}>
        <div className={styles.cont}>
            <span className={styles.full}>Relationship</span>
            <span className={styles.name}>{relationship}</span>
          </div>
        </div>
        <div style={{visibility:"hidden"}} className={styles.fifthGuarantor}>
        <div className={styles.cont}>

            <span className={styles.full}>GENDER</span>
            <span className={styles.name}>{gender}</span>
          </div>
        </div>
      </div>
    <Divider />
    </div>
  );
};

export default Guarantor;
