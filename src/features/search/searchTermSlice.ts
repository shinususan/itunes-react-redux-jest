import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export const searchTermSlice = createSlice({
    name: 'searchTerm',
    initialState: {value:''},
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setSearchTerm: (state, action: PayloadAction<string>) => {
            state.value = action.payload || '';
        },
    }
});

export const { setSearchTerm } = searchTermSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const searchText = (state: RootState) => state.searchTerm;

export default searchTermSlice.reducer;
