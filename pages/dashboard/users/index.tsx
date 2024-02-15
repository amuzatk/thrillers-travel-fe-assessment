import React, { useState } from 'react';
import { User } from '../../../interfaces';
import Layout from '../../../components/_layout/dashboard';
import UserInfo from '../../../screens/userInfo/userInfo';

const UsersDashboard = () => {
  const [selectedOrganization, setSelectedOrganization] = useState('');
  const [searchResults, setSearchResults] = useState<User[]>([]); // Define the state for searchResults
  const [dummyVariable, setDummyVariable] = useState(null);


  const handleDummyVariableChange = (newDummyVariable) => {
    // console.log('Received new dummyVariable from UserInfo3:', newDummyVariable);
    setDummyVariable(newDummyVariable);
  };

  return (
    <Layout 
      isDetailPage={false} 
      selectedOrganization={selectedOrganization} 
      onOrganizationChange={setSelectedOrganization}
      onSearchResultsChange={setSearchResults} // Pass the function to update search results
      searchResults={searchResults} // Pass the searchResults state to the Layout component
      pageTitle="Users" // Set the pageTitle prop based on the current page
      dummyVariable={dummyVariable}
      onForceRerender={handleDummyVariableChange} // Pass the callback function
  >
      <div>
        <UserInfo 
        selectedOrganization={selectedOrganization}
        searchResults={searchResults} // Pass search results to UserInfo3 component
        onSearchResultsChange={setSearchResults}
        onForceRerender={handleDummyVariableChange} // Pass the callback function
         />
      </div>
    </Layout>
  );
}

export default UsersDashboard;

