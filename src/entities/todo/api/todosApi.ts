import type { TodoListType } from "@/entities/todo/model/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
    reducerPath: 'todosApi ',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (build) => ({
        getUsersTodosList: build.query<TodoListType, string>({
            query: (userId) => `users/${userId}/todos`
        })
    })
})

export const { useGetUsersTodosListQuery } = todosApi