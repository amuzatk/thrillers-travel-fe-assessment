import faker from 'faker';
import { User } from '../../interfaces';

// Function to replace special characters with real letters
const replaceSpecialChars = (input: string): string => {
  return input.replace(/-/g, faker.random.arrayElement(['A', 'B', 'C', 'D', 'E']))
              .replace(/,/g, faker.random.arrayElement(['X', 'Y', 'Z']));
};

const educationSectors = ["FinTech", "Healthcare", "Education", "Technology", "Automotive", "Retail", "Real Estate"];
const maritalStatusOptions = ["Single", "Married", "Widowed", "Divorced", "Separated"];
const residenceTypeOptions = ["Rented Apartment", "Parent's Apartment", "Owned Apartment", "Other"];
const bankNames = ['Providus Bank', 'First Bank', 'GTCO', 'Access Bank', 'Union Bank', 'Jaiz Bank', 'UBA', 'Unity Bank', 'Zenith Bank'];

export const generateMockData = (): User[] => {
  const mockData: User[] = [];

  for (let i = 1; i <= 50; i++) {
    const statusArray = ["Inactive", "Pending", "Active", "Blacklisted"];
    const randomStatusIndex = Math.floor(Math.random() * statusArray.length);
    const randomStatus = statusArray[randomStatusIndex];

    const createdAt = new Date().toISOString();
    const createdTime = new Date().toLocaleTimeString(); // Adding createdTime

    const orgName = replaceSpecialChars(faker.company.companyName().toLowerCase().replace(/\s/g, '-').substring(0, 7));
    const firstName = replaceSpecialChars(faker.name.firstName().substring(0, 4));
    const guarantorFirstName = replaceSpecialChars(faker.name.firstName().substring(0, 4));
    const lastName = replaceSpecialChars(faker.name.lastName().substring(0, 4));
    const email = `${firstName}@${orgName}.com`;
    const phoneNumber = replaceSpecialChars(faker.phone.phoneNumber().replace(/\D/g, '').substring(0, 11));
    const randomBankIndex = Math.floor(Math.random() * bankNames.length);
    const bankName = bankNames[randomBankIndex];

    const user: User = {
      accountBalance: (Math.random() * 150000).toFixed(2),
      accountNumber: Math.floor(1000000000 + Math.random() * 9000000000).toString(),
      lensqrRegNumber: `LSQFf2024g${i}`,
      bankName,
      createdAt,
      createdTime, // Adding createdTime
      education: {
        duration: `${Math.floor(Math.random() * 5) + 1} Years`,
        employmentStatus: "Employed",
        level: "Bsc",
        loanRepayment: (Math.random() * 200).toFixed(2),
        monthlyIncome: [
          (Math.random() * 200000 + 400000).toFixed(2),
          (Math.random() * 200000 + 550000).toFixed(2),
        ],
        officeEmail: `${firstName}@yahoo.com`, // Use firstName for officeEmail
        sector: faker.random.arrayElement(educationSectors), // Random sector
      },
      email,
      guarantor: {
        address: replaceSpecialChars(`${faker.address.streetName()} ${faker.address.city()}`),
        firstName: guarantorFirstName,
        gender: faker.random.arrayElement(["Male", "Female"]),
        lastName: replaceSpecialChars(faker.name.lastName()),
        phoneNumber,
        email: `${guarantorFirstName}@gmail.com`,
        relationship: faker.random.arrayElement(["Sister", "Brother", "Mother", "Father", "Uncle", "Aunt"]), // Adding relationship property
      },
      id: i.toString(),
      lastActiveDate: new Date().toISOString(),
      orgName,
      phoneNumber,
      profile: {
        address: replaceSpecialChars(faker.address.streetAddress()),
        avatar: `https://i.pravatar.cc/200?u=${i}`,
        // avatar: `https://source.unsplash.com/200x200/?person`,
        bvn: `${Math.floor(Math.random() * 1000000000)}`,
        currency: "NGN",
        firstName,
        gender: faker.random.arrayElement(["Male", "Female"]),
        lastName,
        phoneNumber,
        email: faker.random.arrayElement([`${firstName}@gmail.com`, `${firstName}@yahoo.com`]),
        maritalStatus: faker.random.arrayElement(maritalStatusOptions),
        noOfChildren: Math.floor(Math.random() * 4) + 1,
        residenceType: faker.random.arrayElement(residenceTypeOptions),
      },
      socials: {
        facebook: `@${orgName}`,
        instagram: `@${orgName}`,
        twitter: `@${orgName}`,
      },
      userName: `${firstName}.${lastName}`,
      status: {
        0: randomStatus,
        array: [randomStatus],
      },
    };

    mockData.push(user);
  }

  return mockData;
};

export const fetchUsers = (): User[] => {
  const mockData = generateMockData();
  return mockData;
};