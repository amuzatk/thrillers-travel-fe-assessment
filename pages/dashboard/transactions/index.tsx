import React from 'react';
// import { User } from '../../../interfaces';
import Layout from '../../../components/_layout/dashboard';
import TransactionPage from '../../../screens/userInfo/TransactionPage';
import TransactionPageHeader from '../../../screens/userInfo/TransactionPageHeader';


const UsersDashboard = () => {

  return (
    <Layout 
      isDetailPage={true} 
  >
    <>
    <TransactionPageHeader />

      <div>
        <TransactionPage        
         />
      </div>


    </>

    </Layout>
  );
}

export default UsersDashboard;

