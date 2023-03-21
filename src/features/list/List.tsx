import { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { searchiTunes, selectSongs } from '../search/searchSlice';
import InfiniteScroll from "react-infinite-scroll-component";
import { Grid } from '@mui/material';
import { Item } from '../item/Item';
import { searchText } from '../search/searchTermSlice';

export function List() {
    const searchResults = useAppSelector(selectSongs);
    const dispatch = useAppDispatch();
    const searchTerm = useAppSelector(searchText).value;
    const [offset, setOffset] = useState(20);

    const searchOnScroll = () => {
        setOffset(offset + 10);
        dispatch(searchiTunes(searchTerm, offset));
    }

    return (
        <div className="item-list-container">
            {searchResults.length > 0 ? (
                <InfiniteScroll
                    dataLength={searchResults.length}
                    next={searchOnScroll}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                >
                    <Grid container spacing={3}>
                        {searchResults.map((item: any, index: number) => (
                            <Grid item xs={4}>
                                <Item key={index} {...item} />
                            </Grid>
                        ))}
                    </Grid>
                </InfiniteScroll>
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
}
