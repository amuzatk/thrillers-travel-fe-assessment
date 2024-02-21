import React from 'react'
import styles from '../../styles/dashboard/TransactionCard.module.scss'

const TransactionCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.item}>
        <p className={styles.p1}>Amount:  </p>
        <span>70%</span>

        </div>
        <div className={styles.item}>
        <p className={styles.p2}>Transaction:  </p>
        <span>TRANSFER</span>

        </div> 
        <div className={styles.item}>
        <p className={styles.p3}>Date:  </p>
        <span>12 JUNE 2022, 10:48 AM</span>

        </div> 
        <div className={styles.item}>
        <p className={styles.p4}>Status:  </p>
        <span style={{
            color:"#144909",
            backgroundColor:"#EFFDED",
            borderRadius:"10px",
            border:"1px solid #144909",
            height:"20px",
            width:"100px",
            padding:"5px 10px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            marginRight:"5px",
            overflowY:"hidden"
            // borderBottom:"1px solid "
        }} className={styles.status}> <p style={{
            color:"#92EF80"
        }}></p> &#8226; Processed</span>

        </div>
      </div>
    </div>
  )
}

export default TransactionCard
