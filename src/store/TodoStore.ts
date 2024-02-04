import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IdoData from '../Types/todoTypes';
import { getAllTodos ,addTodos} from '../Api/TodoApi';
interface IdoState {
    AllTodo: IdoData[],
    isloading?: boolean
}
const initialState: IdoState = {
    AllTodo: [],
    isloading: false
}
const TodoSlice = createSlice({
    name: "Todo",
    initialState,
    reducers: {
        // getAllTodo(state, action: PayloadAction<[]>) {
        //     state.AllTodo = action.payload
        //     // state.isloading=action.payload
        // }
    },
    extraReducers(builder) {
        builder.addCase(getAllTodos.fulfilled,(state,action)=> {
            state.AllTodo=action.payload
            state.isloading=false;
        }).addCase(getAllTodos.rejected,(state,action) => {
        state.isloading=false
        state.AllTodo=[];
        }).addCase(getAllTodos.pending,(state)=> {
            state.isloading=true;
        })

        
    },
})

// export const {getAllTodo} = TodoSlice.actions;
export default TodoSlice.reducer;