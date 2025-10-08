import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { postsApi } from '@/entities/post/api/postsApi';
import { usersApi } from '@/entities/user/api/usersApi';
import { albumsApi } from '@/entities/album/api/albumsApi';

export const store = configureStore({
    reducer: {
        [postsApi.reducerPath]: postsApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(albumsApi.middleware)
            .concat(usersApi.middleware)
            .concat(postsApi.middleware),
})

setupListeners(store.dispatch)