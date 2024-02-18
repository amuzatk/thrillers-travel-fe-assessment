import React, { useState } from 'react';
import { BarChartData, Transaction } from '../../interfaces';
import Layout from '../../components/_layout/dashboard';
import Dashboard from '../../screens/charts/dashboardCharts';


const AdminDashboard = () => {


  return (
    <Layout
      isDetailPage={false}
    >
      <div style={{ marginTop: "40px" }}>
<Dashboard  />
      </div>
    </Layout>
  );
};

export default AdminDashboard;
