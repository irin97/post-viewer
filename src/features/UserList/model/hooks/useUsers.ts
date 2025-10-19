import { useGetUserListQuery } from "@/entities/user/api/usersApi";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUsers, usersSelectors } from "@/entities/user/model/slice/userSlice";
import { useSelector } from "react-redux";
import type { AppDispatch } from "@/app/providers/store";

export const useUsers = () => {

    const { data: users, isLoading, isSuccess } = useGetUserListQuery();
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (isSuccess && users) {
            dispatch(setUsers(users))
        }
    }, [dispatch, isSuccess, users])

    const storeUsers = useSelector(usersSelectors.selectAll);

    return { storeUsers, isLoading }
}