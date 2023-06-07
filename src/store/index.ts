import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './modules/counter';
import { useSelector, TypedUseSelectorHook, useDispatch, shallowEqual } from 'react-redux';
const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

const state = store.getState();
export type stateReturnTypes = typeof state;
type GetStateFnType = typeof store.getState;
export type FnReturnType = ReturnType<GetStateFnType>;
type DispatchType = typeof store.dispatch;

// 类型推倒 函数调用签名TypedUseSelectorHook
export const useAppSelector: TypedUseSelectorHook<FnReturnType> = useSelector;
export const useAppDispatch: () => DispatchType = useDispatch;
export const appShallowEqual = shallowEqual;
export default store;
