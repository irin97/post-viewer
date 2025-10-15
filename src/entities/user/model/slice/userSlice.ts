import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { UserType } from "@/widgets/UserList/User";
import type { RootState } from "@/app/providers/store";

const usersAdapter = createEntityAdapter<UserType>();

const usersSlice = createSlice({
    name: 'users',
    initialState: usersAdapter.getInitialState(),
    reducers: {
        setUsers: usersAdapter.setAll
    }
})

export const { setUsers } = usersSlice.actions;

export const usersSelectors = usersAdapter.getSelectors(
    (state: RootState) => state.users
)

export default usersSlice.reducer