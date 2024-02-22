import React from 'react';
import Layout from '../../../components/_layout/dashboard';
import TransactionPage from '../../../screens/userInfo/TransactionPage';
import TransactionPageHeader from '../../../screens/userInfo/TransactionPageHeader';


const UsersDashboard = () => {

  return (
    <Layout 
    isNotDashboard={true} 
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

