import { combineReducers } from 'redux';
import TodoStore from './TodoStore';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer= combineReducers({
    todos:TodoStore
})

const store =configureStore({
    reducer:rootReducer,
})

export type RootState= ReturnType<typeof rootReducer>;
// export default store;
export  {rootReducer,store};