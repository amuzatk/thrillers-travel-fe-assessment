import faker from 'faker';
import { BarChartData, Transaction } from '../../interfaces';

// Generate mock data for a single transaction
const generateTransactionData = (): Transaction => {
    const bankNames = ['Providus Bank', 'First Bank', 'GTCO', 'Access Bank', 'Union Bank', 'Jaiz Bank', 'UBA', 'Unity Bank', 'Zenith Bank'];
    
    const randomNumber = faker.random.number({ min: 1000000000, max: 9999999999 }).toString();
    const transactionId = `TR_${randomNumber}`;
    
    return {
        amount: faker.random.number({ min: 1, max: 1000 }),
        transactionId,
        transactionType: faker.random.arrayElement(['Payment', 'Refund', 'Transfer', 'Withdrawal', 'Deposit', 'Request']),
        date: faker.date.past().toISOString().split('T')[0],
        // time: faker.time.recent().split(' ')[0],
        time: new Date().toLocaleTimeString().split(' ')[0], // Get current time
        status: faker.random.arrayElement(['Processed', 'Failed']),
        bankName: faker.random.arrayElement(bankNames),
        accountNumber: faker.finance.account(10)
    };
};

// Generate mock data for bar chart custom data
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

// Generate a single mock data entry for table display data
export const mockTableData: Transaction[] = [generateTransactionData()];

// Generate mock data for bar chart custom data
export const mockBarChartData = generateBarChartData();

// console.log(mockTableData, 'mockTableData');
// console.log(mockBarChartData, 'mockBarChartData');
