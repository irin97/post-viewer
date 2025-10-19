import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { PostListType } from '@/entities/post/model/types';
import type { PostType } from '@/entities/post/model/types';


export const postsApi = createApi({

    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    tagTypes: ['Post'],
    endpoints: (build) => ({
        getPostList: build.query<PostListType, void>({
            query: () => 'posts',
            providesTags: ['Post']
        }),
        getPost: build.query<PostType, string>({
            query: (postId) => `posts/${postId}`,
            providesTags: (_result, _error, id) => [{ type: 'Post', id }],
        }),
        getUsersPostList: build.query<PostListType, string>({
            query: (usertId) => `users/${usertId}/posts`,
            providesTags: (result) =>
                result ? result.map(({ id }) => ({ type: 'Post', id })) : ['Post']
        }),
        addPost: build.mutation<PostType, PostType>({
            query: (body) => ({
                url: 'posts',
                method: 'POST',
                body
            }),
            invalidatesTags: ['Post']
        })
    })
})

export const { useGetPostListQuery, useGetPostQuery, useGetUsersPostListQuery } = postsApi;