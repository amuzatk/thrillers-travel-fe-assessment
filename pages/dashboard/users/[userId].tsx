import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { User } from '../../../interfaces';
import Layout from '../../../components/_layout/dashboard';
import UserDetailMainPage from '../../../screens/userDetailPage/userMainPage';

const UserDetails = () => {
  const [selectedOrganization, setSelectedOrganization] = useState('');
  const [searchResults, setSearchResults] = useState<User[]>([]); // Define the state for searchResults

  // Initialize router
  const router = useRouter();
  // Extract userId from the router
  const { userId } = router.query;
  // console.log(userId,'userId')

  // State to hold user data
  const [userData, setUserData] = useState<User | null>(null); // Use the User type

  useEffect(() => {
    // Check if userId is available
    if (userId !== undefined) {
      // Get users from localStorage
      const storedUsers = localStorage.getItem('users');

      if (storedUsers) {
        const parsedUsers = JSON.parse(storedUsers);
        // Find the user with the matching ID from the stored data
        const user = parsedUsers.find((user: { id: { toString: () => string | string[]; }; }) => user.id.toString() === userId);

        if (user) {
          // console.log(user,'users detail page localStorage <<===')
          setUserData(user);
        } else {
          console.error('User not found');
        }
      } else {
        console.error('Users not found in localStorage');
      }
    }
  }, [userId]);

  return (
    <Layout 
      isDetailPage={true}
      selectedOrganization={selectedOrganization}
      onOrganizationChange={setSelectedOrganization}
      onSearchResultsChange={setSearchResults} // Pass the function to update search results
      searchResults={searchResults} // Pass the searchResults state to the Layout component
      dummyVariable={0} 
      onForceRerender={function (newDummyVariable: number): void {
        throw new Error('Function not implemented.');
      } }  
    >
      {userData ? (
        <UserDetailMainPage userDetails={userData} />
      ) : (
        <p>Loading...</p>
      )}
    </Layout>
  );
};

export default UserDetails;
