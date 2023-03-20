import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import { fetchiTunesSongs } from './searchAPI';

export interface searchState {
    value: Array<any>;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: searchState = {
    value: [],
    status: 'idle',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(searchiTunesAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const searchiTunesAsync = createAsyncThunk(
    'search',
    async (searchTerm: string) => {
        const response = await fetchiTunesSongs(searchTerm);
        // The value we return becomes the `fulfilled` action payload
        return response;
    }
);

export const searchiTunes =
    (searchTerm: string=''): AppThunk =>
        (dispatch, getState) => {
            if (searchTerm.length > 3) {
                dispatch(searchiTunesAsync(searchTerm));
            }
        };

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        searchSongs: (state, action: PayloadAction<Array<any>>) => {
            state.value = [...action.payload];
        },
    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    extraReducers: (builder) => {
        builder
            .addCase(searchiTunesAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(searchiTunesAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value = [...action.payload];
            })
            .addCase(searchiTunesAsync.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const { searchSongs } = searchSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectSongs = (state: RootState) => state.search.value;

export default searchSlice.reducer;
