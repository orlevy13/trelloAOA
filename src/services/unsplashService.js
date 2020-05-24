import fetch from 'node-fetch';
import Unsplash from 'unsplash-js';
global.fetch = fetch;
const unsplash = new Unsplash({ accessKey: "8ZH8zzN8CDDrZJWGYhpPmzEreLvOZ6WRPVTgnEH_6Ac" });


function getListPhotos(perPage = 14) {

    return unsplash.photos.listPhotos(1, perPage, "popular")
        .then(res => res.json());
}

export const unsplashService = {
    getListPhotos
}

