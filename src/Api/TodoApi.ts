import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import todoServices from '../Services/todoServices';
export const getAllTodos = createAsyncThunk<[], void, { rejectValue: string }>(
    'getAlltodo',
    async (_, thunkAPI) => {
      try {
       
    let response:any= await todoServices.getAllTodo();
    // return response.data;
    if (response && response.status === 200) {
        return response.data.todos;
      }

        
      } catch (error) {
        return thunkAPI.rejectWithValue('Failed to fetch data.');
      }
    }
)
export type IAddTodos  ={
  todo?:string,
  userId?:number
}

export const addTodos = createAsyncThunk<any, IAddTodos, { rejectValue: string }>(
  'addTodos',
  async (data, thunkAPI) => {
    try {
      let response = await todoServices.createTodo(data);
      if (response && response.status === 200) {
        return response;
      }
    
      
      
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to fetch data.');
    }
  }
)