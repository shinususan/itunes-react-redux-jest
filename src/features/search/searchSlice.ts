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

export const searchiTunesAsync = createAsyncThunk(
    'search',
    async (search: any) => {
        const response = await fetchiTunesSongs(search.searchTerm, search.offset);
        return response;
    }
);

export const searchiTunes =
    (searchTerm: string = '', offset: number = 0): AppThunk =>
        (dispatch, getState) => {
            if (searchTerm.length > 3) {
                dispatch(searchiTunesAsync({ searchTerm, offset }));
            }
        };

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchSongs: (state, action: PayloadAction<Array<any>>) => {
            state.value = [...action.payload];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchiTunesAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(searchiTunesAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value.push(...action.payload)
            })
            .addCase(searchiTunesAsync.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const { searchSongs } = searchSlice.actions;

 
export const selectSongs = (state: RootState) => state.search.value;

export default searchSlice.reducer;
