import { PostLengthFilter } from "@/features/PostLengthFilter/ui/PostLengthFilter";
import { FilteredPostList } from "./FilteredPostList";
import { useState, useCallback, useMemo, type FC } from "react";
import { postLengthFilter } from "@/features/PostLengthFilter/lib/filterByLength";
import type { PostListType } from "./Post";

interface PostListProps {
    postList: PostListType
}

export const PostList: FC<PostListProps> = ({ postList }) => {
    const [filterLength, setFilterLength] = useState<number>(0);
    const setFilterLengthMemo = useCallback((value: number) => setFilterLength(value), [])
    const filteredPosts = useMemo(() => postLengthFilter(postList, filterLength), [postList, filterLength])

    return (
        <>
            <PostLengthFilter setFilterLength={setFilterLengthMemo} />
            <FilteredPostList postList={filteredPosts} />
        </>
    )
}