import { TAppDispatch } from 'app/providers/ReduxStore';
import { useDispatch } from 'react-redux';

export const useAppDispatch = () => useDispatch<TAppDispatch>();
