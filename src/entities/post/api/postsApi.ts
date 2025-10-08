import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { PostListType } from '@/widgets/PostList/Post';
import type { CommentListType } from '@/widgets/CommentList/ui/Comment';
import type { PostType } from '@/widgets/PostList/Post';


export const postsApi = createApi({

    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (build) => ({
        getPostList: build.query<PostListType, void>({
            query: () => 'posts'
        }),
        getCommentsList: build.query<CommentListType, number>({
            query: (postId) => `posts/${postId}/comments`
        }),
        getPost: build.query<PostType, string>({
            query: (postId) => `posts/${postId}`
        })
    })
})

export const { useGetPostListQuery, useLazyGetCommentsListQuery, useGetPostQuery } = postsApi;