import React, { useState } from 'react'
import Layout from '../../../components/_layout/dashboard';
import { User } from '../../../interfaces';

const Loans = () => {
  const [selectedOrganization, setSelectedOrganization] = useState('');
  const [searchResults, setSearchResults] = useState<User[]>([]); // Define the state for searchResults

  return (
    <Layout 
      isDetailPage={false}
      selectedOrganization={selectedOrganization}
      onOrganizationChange={setSelectedOrganization}
      onSearchResultsChange={setSearchResults} // Pass the function to update search results
      // searchResults={searchResults} // Pass the searchResults state to the Layout component
      // pageTitle="Loans" 
      // dummyVariable={0} 
      // onForceRerender={function (newDummyVariable: number): void {
      //   throw new Error('Function not implemented.');
      // } }    
       >
     <h1 style={{marginTop:"40px", fontSize:"25px"}}> Accounts Page </h1>
    </Layout>
  )
}

export default Loans;
