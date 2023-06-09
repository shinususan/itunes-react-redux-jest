// Fetch iTunes songs
const ITUNES_API_BASE_URL = 'https://itunes.apple.com/search';

export const fetchiTunesSongs = async (searchTerm: string, offset: number) => {
    const url = `${ITUNES_API_BASE_URL}?term=${searchTerm}&entity=song&limit=${offset}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
};
