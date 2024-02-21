import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BarChartData, Transaction } from '../interfaces/user';

export const fetchTransactions = createAsyncThunk<Transaction[]>(
  'data/fetchTransactions',
  async () => {
    const response = await fetch('http://localhost:5000/transactions');
    if (!response.ok) {
      throw new Error('Failed to fetch transactions');
    }
    return response.json();
  }
);

export const fetchBarChartData = createAsyncThunk<BarChartData[]>(
  'data/fetchBarChartData',
  async () => {
    const response = await fetch('http://localhost:5000/barChartData');
    if (!response.ok) {
      throw new Error('Failed to fetch bar chart data');
    }
    return response.json();
  }
);

interface PostsState {
  transactions: Transaction[];
  barChartData: BarChartData[];
  transactionStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  barChartDataStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const postsSlice = createSlice({
  name: 'data',
  initialState: {
    transactions: [],
    barChartData: [],
    transactionStatus: 'idle',
    barChartDataStatus: 'idle',
    error: null,
  } as PostsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.transactionStatus = 'loading';
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.transactionStatus = 'succeeded';
        state.transactions = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.transactionStatus = 'failed';
        state.error = action.error.message ?? 'Unknown error';
      })
      .addCase(fetchBarChartData.pending, (state) => {
        state.barChartDataStatus = 'loading';
      })
      .addCase(fetchBarChartData.fulfilled, (state, action) => {
        state.barChartDataStatus = 'succeeded';
        state.barChartData = action.payload;
      })
      .addCase(fetchBarChartData.rejected, (state, action) => {
        state.barChartDataStatus = 'failed';
        state.error = action.error.message ?? 'Unknown error';
      });
  },
});

export default postsSlice.reducer;
