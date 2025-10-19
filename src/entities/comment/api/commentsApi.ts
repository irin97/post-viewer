import type { CommentListType } from "@/entities/comment/model/types"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const commentsApi = createApi({

    reducerPath: 'commentsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (build) => ({
        getCommenstList: build.query<CommentListType, number>({
            query: (postId) => `posts/${postId}/comments`
        })
    })
})


export const { useLazyGetCommenstListQuery } = commentsApi