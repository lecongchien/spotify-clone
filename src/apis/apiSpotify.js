import { useState } from 'react';
import { baseUrl, clientId, clientSecret, token } from './apiConfig';


const getPlaylist = () =>{
    return 123
}
const APIController = {
    getGenres: async () => {
        const result = await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, {
            method: 'GET',
            headers: { Authorization: 'Bearer ' + token },
        });

        const data = await result.json();
        return data.categories.items;
    },
    getPlaylistByGenre: async (genreId) => {
        const limit = 10;

        const result = await fetch(`https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`, {
            method: 'GET',
            headers: { Authorization: 'Bearer ' + token },
        });

        const data = await result.json();
        return data.playlists.items;
    },
    getTracks: async (tracksEndPoint) => {
        const limit = 10;

        const result = await fetch(`${tracksEndPoint}?limit=${limit}`, {
            method: 'GET',
            headers: { Authorization: 'Bearer ' + token },
        });

        const data = await result.json();
        return data.items;
    },
    getTrack: async (trackEndPoint) => {
        const result = await fetch(`${trackEndPoint}`, {
            method: 'GET',
            headers: { Authorization: 'Bearer ' + token },
        });

        const data = await result.json();
        return data;
    },
};

export default APIController;
