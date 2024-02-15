import { User } from "../interfaces";

export type AnalyticsData = {
  image: string;
  title: string;
  amount: string;
};

const fetchUsers = async (): Promise<User[]> => {
  try {
    // Check if users are already stored in local storage
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      const parsedUsers = JSON.parse(storedUsers);
      console.log(parsedUsers, 'Users fetched from localStorage');
      return parsedUsers;
    }
    return [];
  } catch (error) {
    console.error("Error fetching users from local storage:", error);
    return [];
  }
};

const generateMockAnalyticsData = async (): Promise<{ users: string; activeUsers: string; usersWithLoan: string; usersWithSavings: string }> => {
  const mockData = await fetchUsers();

  const users = mockData.length.toString();
  const activeUsers = mockData.filter((user) => user.status.array.includes("Active")).length.toString();
  const usersWithLoan = mockData.filter((user) => parseFloat(user.education.loanRepayment) > 0).length.toString();
  const usersWithSavings = mockData.filter((user) => parseFloat(user.accountBalance) > 0).length.toString();

  return { users, activeUsers, usersWithLoan, usersWithSavings };
};

export const useAnalyticsData = async (): Promise<AnalyticsData[]> => {
  const generatedData = await generateMockAnalyticsData();

  // integrating amount from faker generated data into the static data
  const analyticsData: AnalyticsData[] = [
    {
      image: "/assets/icons/AnalyticIcon1.webp",
      title: "USERS",
      amount: generatedData.users,
    },
    {
      image: "/assets/icons/AnalyticIcon2.webp",
      title: "ACTIVE USERS",
      amount: generatedData.activeUsers,
    },
    {
      image: "/assets/icons/AnalyticIcon3.webp",
      title: "USERS WITH LOANS",
      amount: generatedData.usersWithLoan,
    },
    {
      image: "/assets/icons/AnalyticIcon4.webp",
      title: "USERS WITH SAVINGS",
      amount: generatedData.usersWithSavings,
    },
  ];

  return analyticsData;
};

