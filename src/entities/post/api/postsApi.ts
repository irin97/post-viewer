import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { PostListType } from '@/widgets/PostList/Post';
import type { CommentListType } from '@/widgets/CommentList/ui/Comment';


export const postsApi = createApi({

    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (build) => ({
        getPostList: build.query<PostListType, void>({
            query: () => 'posts'
        }),
        getCommentsList: build.query<CommentListType, number>({
            query: (postId) => `posts/${postId}/comments`
        })
    })
})

export const { useGetPostListQuery, useLazyGetCommentsListQuery } = postsApi;