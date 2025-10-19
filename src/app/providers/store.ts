import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { postsApi } from '@/entities/post/api/postsApi';
import { usersApi } from '@/entities/user/api/usersApi';
import { albumsApi } from '@/entities/album/api/albumsApi';
import { commentsApi } from '@/entities/comment/api/commentsApi';
import { todosApi } from '@/entities/todo/api/todosApi';
import postReducer from '@/entities/post/model/slice/postSlice';
import userReducer from '@/entities/user/model/slice/userSlice';

export const store = configureStore({
    reducer: {
        [postsApi.reducerPath]: postsApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [commentsApi.reducerPath]: commentsApi.reducer,
        [todosApi.reducerPath]: todosApi.reducer,
        posts: postReducer,
        users: userReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(albumsApi.middleware)
            .concat(usersApi.middleware)
            .concat(postsApi.middleware)
            .concat(commentsApi.middleware)
            .concat(todosApi.middleware),
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch