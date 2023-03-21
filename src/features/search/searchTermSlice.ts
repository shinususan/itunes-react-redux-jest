import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export const searchTermSlice = createSlice({
    name: 'searchTerm',
    initialState: {value:''},
    reducers: {
        setSearchTerm: (state, action: PayloadAction<string>) => {
            state.value = action.payload || '';
        },
    }
});

export const { setSearchTerm } = searchTermSlice.actions;

export const searchText = (state: RootState) => state.searchTerm;

export default searchTermSlice.reducer;
