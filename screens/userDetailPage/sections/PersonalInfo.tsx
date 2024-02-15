import React from "react";
import styles from '../../../styles/dashboard/PersonalInfo.module.scss';
import { Divider } from 'antd';
import { User } from "../../../interfaces";

  const PersonalInfo: React.FC<{ userDetails: User }> = ({ userDetails }) => {
  const firstName = userDetails?.profile?.firstName;
  const lastName = userDetails?.profile?.lastName;
  const phoneNumber = userDetails?.profile?.phoneNumber;
  const gender = userDetails?.profile?.gender;
  const bvn = userDetails?.profile?.bvn;
  const email = userDetails?.profile?.email;
  const maritalStatus = userDetails?.profile?.maritalStatus;
  const noOfChildren = userDetails?.profile?.noOfChildren;
  const residenceType = userDetails?.profile?.residenceType;

  
  return (
    <div 
    style={{
      paddingTop:"30px"
    }} 
    className={styles.container}>
      <h1>Personal Information</h1>
      <div className={styles.main}>
        <div className={styles.first}>
          <div className={styles.cont}>
          <span className={styles.full}>Full Name</span>
            <span className={styles.name}>{firstName}  {lastName} </span>
          </div>
          <div className={styles.cont}>
          <span className={styles.full}>Marital Status</span>
            <span className={styles.name}>{maritalStatus}</span>  
          </div>
        </div>
        <div className={styles.second}>
          <div className={styles.cont}>
          <span className={styles.full}>Phone Number</span>
            <span className={styles.name}>{phoneNumber}</span>
          </div>
          <div className={styles.cont}>
          <span className={styles.full}>Children</span>
            <span className={styles.name}>{noOfChildren}</span>
          </div>
        </div>
        <div className={styles.third}>
          <div className={styles.cont}>
          <span className={styles.full}>Email Address</span>
            <span style={{textTransform:"lowercase"}} className={styles.name}>{email}</span>
          </div>
          <div className={styles.cont}>
          <span className={styles.full}>Type of Residence</span>
            <span className={styles.name}>{residenceType}</span>
          </div>
        </div>
        <div className={styles.forth}>
          <div className={styles.cont}>
          <span className={styles.full}>BVN</span>
            <span className={styles.name}>{bvn}</span>
          </div>
        </div>
        <div className={styles.fifth}>
          <div className={styles.cont}>
          <span className={styles.full}>Gender</span>
            <span className={styles.name}>{gender}</span>
          </div>
        </div>
      </div>
    <Divider />
    </div>
  );
};

export default PersonalInfo;
