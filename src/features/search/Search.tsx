import { useState } from 'react';

import { useAppDispatch } from '../../app/hooks';
import {
    searchiTunes,
} from './searchSlice';
import styles from './Search.module.css';
import { Button, TextField } from '@mui/material';

export function Search() {
    const dispatch = useAppDispatch();
    const [searchTerm, setSearchTerm] = useState('');

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
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                {/* Search button */}
                <div className="search-btn-container">
                    <Button
                        variant="contained"
                        onClick={() => dispatch(searchiTunes(searchTerm))}

                    >
                        Search
                    </Button>
                </div>
            </div>
            <h2>iTunes Search</h2>
        </div>
    );
}
