import React from 'react'
import Layout from '../../../components/_layout/dashboard';

const SettingsPage = () => {

  return (
    <Layout 
    isNotDashboard={true}  
       >
     <h1 style={{marginTop:"40px", fontSize:"25px"}}> SettingsPage Page </h1>
    </Layout>
  )
}

export default SettingsPage;
