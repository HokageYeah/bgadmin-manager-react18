import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './modules/counter';
import recommendReducer from '@/views/discover/c-views/recommend/store/recommend';
import { useSelector, TypedUseSelectorHook, useDispatch, shallowEqual } from 'react-redux';
const store = configureStore({
  reducer: {
    yycounter: counterReducer,
    recommend: recommendReducer
  }
});

// 方法一、获取state 的类型
const state = store.getState();
export type stateReturnTypes = typeof state;

// 方法二、获取state的类型
// 获取到函数的类型GetStateFnType
type GetStateFnType = typeof store.getState;
// 获取函数GetStateFnType类型的返回值类型，通过ReturnType获取
export type FnReturnType = ReturnType<GetStateFnType>;
type DispatchType = typeof store.dispatch;

// 类型推倒 函数调用签名TypedUseSelectorHook
export const useAppSelector: TypedUseSelectorHook<FnReturnType> = useSelector;
export const useAppDispatch: () => DispatchType = useDispatch;
export const appShallowEqual = shallowEqual;
export default store;
