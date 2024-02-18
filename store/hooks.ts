import { useDispatch } from 'react-redux';
import { AppDispatch } from '.';
// import type { AppDispatch } from '../store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
