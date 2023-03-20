import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
    searchiTunes,
} from './searchSlice';
import styles from './Search.module.css';
import { Button, TextField } from '@mui/material';
import { searchText, setSearchTerm } from './searchTermSlice';
import { useState } from 'react';

export function Search() {
    const searchTerm = useAppSelector(searchText).value;
    const dispatch = useAppDispatch();
    const [offset, setOffset] = useState(10);

    return (
        <div className="logo-wrapper">
            <div className="logo">
            </div>

            {/* Search field */}
            <div className="search-box">
                <TextField
                    sx={{ width: 1 }}
                    id="search"
                    label="Search"
                    variant="outlined"
                    type="text"
                    placeholder="Search songs..."
                    onChange={(e) => dispatch(setSearchTerm(e.target.value))}
                />

                {/* Search button */}
                <div className="search-btn-container">
                    <Button
                        variant="contained"
                        onClick={() => dispatch(searchiTunes(searchTerm, offset))}

                    >
                        Search
                    </Button>
                </div>
            </div>
            <h2>iTunes Search</h2>
        </div>
    );
}
