import Unsplash from 'unsplash-js';
const unsplash = new Unsplash({ accessKey: "{8ZH8zzN8CDDrZJWGYhpPmzEreLvOZ6WRPVTgnEH_6Ac}" });


function getListPhotos(perPage = 10) {
    unsplash.photos.listPhotos(2, 15, "latest")
        .then(toJson => toJson)
        .then(json => json);
}

export const unsplashService = {
    getListPhotos
}

