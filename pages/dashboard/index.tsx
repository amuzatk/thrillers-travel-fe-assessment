import React, { useState } from 'react';
import { User } from '../../interfaces';
import Layout from '../../components/_layout/dashboard';
import Dashboard from '../../screens/charts/dashboardCharts';

const AdminDashboard = () => {
  // This is preventing error by providing empty state
  const [selectedOrganization, setSelectedOrganization] = useState('');
  const [searchResults, setSearchResults] = useState<User[]>([]); // Define the state for searchResults


  // State for dummyVariable
  const [dummyVariable, setDummyVariable] = useState<number>(Math.random());

  // Function to handle dummyVariable change
  const handleDummyVariableChange = (newDummyVariable: number) => {
    // Handle the change, if needed
    // console.log('Received new dummyVariable WITHIN DashboardComponent:', newDummyVariable);
  };

  return (
    <Layout
      isDetailPage={false}
      selectedOrganization={selectedOrganization}
      onOrganizationChange={setSelectedOrganization}
      onSearchResultsChange={setSearchResults} // Pass the onSearchResultsChange prop
      searchResults={searchResults} // Pass the searchResults state to the Layout component
      dummyVariable={dummyVariable}
      onForceRerender={(newDummyVariable) => {
        setDummyVariable(newDummyVariable);
        handleDummyVariableChange(newDummyVariable);
      }}
    >
      <div style={{ marginTop: "40px" }}>
{/* <Dashboard /> */}
      </div>
    </Layout>
  );
};

export default AdminDashboard;
