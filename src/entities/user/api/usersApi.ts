import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { UserListType } from '@/widgets/UserList/User';
import type { PostListType } from '@/widgets/PostList/Post';
import type { TodoListType } from '@/widgets/UserTodos/Todo';
import type { AlbumListType } from '@/widgets/UserAlbums/Album';

export const usersApi = createApi({

    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (build) => ({
        getUserList: build.query<UserListType, void>({
            query: () => 'users'
        }),
        getUsersPostList: build.query<PostListType, string>({
            query: (usertId) => `users/${usertId}/posts`
        }),
        getUsersTodosList: build.query<TodoListType, string>({
            query: (usertId) => `users/${usertId}/todos`
        }),
        getUsersAlbumList: build.query<AlbumListType, string>({
            query: (usertId) => `users/${usertId}/albums`
        }),
    })
})

export const { useGetUserListQuery, useGetUsersPostListQuery, useGetUsersTodosListQuery, useGetUsersAlbumListQuery } = usersApi;