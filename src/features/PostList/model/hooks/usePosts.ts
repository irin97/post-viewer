import { useGetPostListQuery } from "@/entities/post/api/postsApi";
import { setPosts } from "@/entities/post/model/slice/postSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsSelectors } from "@/entities/post/model/slice/postSlice";
import type { AppDispatch } from "@/app/providers/store";

export const usePosts = () => {

    const { data: posts, isLoading, isSuccess } = useGetPostListQuery();
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (isSuccess && posts) {
            dispatch(setPosts(posts))
        }
    }, [isSuccess, posts, dispatch])

    const storePosts = useSelector(postsSelectors.selectAll);

    return { storePosts, isLoading }
}