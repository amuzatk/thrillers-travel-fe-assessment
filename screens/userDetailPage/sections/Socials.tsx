import React from "react";
import styles from '../../../styles/dashboard/PersonalInfo.module.scss';
import { Divider } from "antd";
import { User } from "../../../interfaces";

  const Socials: React.FC<{ userDetails: User }> = ({ userDetails }) => {
  const twitter = userDetails?.socials?.twitter;
  const facebook = userDetails?.socials?.facebook;
  const instagram = userDetails?.socials?.instagram;

  return (
    <div className={styles.container}>
      <h1>Socials</h1>
      <div className={styles.main}>
        <div className={styles.first}>
                <div className={styles.cont}>
            <span className={styles.full}>Twitter</span>
            <span className={styles.name}>{twitter}</span>
          </div>
        </div>
        <div className={styles.second}>
        <div className={styles.cont}>

            <span className={styles.full}>Facebook</span>
            <span className={styles.name}>{facebook}</span>
          </div>
        </div>
        <div className={styles.third}>
        <div className={styles.cont}>

            <span className={styles.full}>Instagram</span>
            <span className={styles.name}>{instagram}</span>
          </div>
        </div>
        <div style={{visibility:"hidden"}} className={styles.forthSocial}>
        <div className={styles.cont}>

            <span className={styles.full}>BVN</span>
            <span className={styles.name}>09087654432</span>
          </div>
        </div>
        <div style={{visibility:"hidden"}} className={styles.fifthSocial}>
        <div className={styles.cont}>

            <span className={styles.full}>GENDER</span>
            <span className={styles.name}>Female</span>
          </div>
        </div>
      </div>
    <Divider />
    </div>
  );
};

export default Socials;
