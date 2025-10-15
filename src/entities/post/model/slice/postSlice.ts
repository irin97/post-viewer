import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@/app/providers/store";
import type { PostType } from "@/widgets/PostList/Post";

const postsAdapter = createEntityAdapter<PostType>();

const postsSlice = createSlice({
    name: 'posts',
    initialState: postsAdapter.getInitialState(),
    reducers: {
        setPosts: postsAdapter.setAll,
    }
})

export const { setPosts } = postsSlice.actions;

export const postsSelectors = postsAdapter.getSelectors(
    (state: RootState) => state.posts
)

export default postsSlice.reducer