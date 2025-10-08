import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { PhotoListType } from '@/widgets/PhotoList/Photo';


export const albumsApi = createApi({

    reducerPath: 'albumsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (build) => ({
        getAlbumPhotoList: build.query<PhotoListType, string>({
            query: (albumId) => `albums/${albumId}/photos`
        }),
    })
})

export const { useGetAlbumPhotoListQuery } = albumsApi;