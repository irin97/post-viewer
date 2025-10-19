import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { UserListType } from '@/entities/user/model/types';
import type { AlbumListType } from '@/entities/album/model/types';

export const usersApi = createApi({

    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (build) => ({
        getUserList: build.query<UserListType, void>({
            query: () => 'users'
        }),
        getUsersAlbumList: build.query<AlbumListType, string>({
            query: (usertId) => `users/${usertId}/albums`
        }),
    })
})

export const { useGetUserListQuery, useGetUsersAlbumListQuery } = usersApi;