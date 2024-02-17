import faker from 'faker';
import { BarChartData, Transaction } from '../../interfaces';

// Generate mock table display data
const generateTableData = (): Transaction[] => {
    const tableData: Transaction[] = [];
    const bankNames = ['Providus Bank', 'First Bank', 'GTCO', 'Access Bank', 'Union Bank', 'Jaiz Bank', 'UBA', 'Unity Bank', 'Zenith Bank'];
    for (let i = 0; i < 100; i++) {
      const randomNumber = faker.random.number({ min: 1000000000, max: 9999999999 }).toString();
      const transactionId = `TR_${randomNumber}`;
      
      const transaction: Transaction = {
        amount: faker.random.number({ min: 1, max: 1000 }),
        transactionId,
        transactionType: faker.random.arrayElement(['Payment', 'Refund', 'Transfer', 'Withdrawal', 'Deposit', 'Request']),
        date: faker.date.past().toISOString().split('T')[0],
        time: faker.time.recent().split(' ')[0],
        status: faker.random.arrayElement(['Success', 'Pending', 'Failed']),
        bankName: faker.random.arrayElement(bankNames),
        accountNumber: faker.finance.account(10)
      };
      tableData.push(transaction);
    }
    return tableData;
  };
  

// Generate mock bar chart custom data
const generateBarChartData = (): BarChartData[] => {
  const customData: BarChartData[] = [];
  for (let i = 0; i < 31; i++) {
    const date = new Date(2024, 0, i + 1);
    const day = date.toISOString().split('T')[0];
    const delivered = faker.random.number({ min: 200, max: 1000 });
    const failed = faker.random.number({ min: 0, max: 50 });
    customData.push({ day, delivered, failed });
  }
  return customData;
};

// Generate 100 mock data entries for table display data
const mockTableData = generateTableData();

// Generate mock data for bar chart custom data
const mockBarChartData = generateBarChartData();

console.log(mockTableData, 'mockTableData');
console.log(mockBarChartData, 'mockBarChartData');
