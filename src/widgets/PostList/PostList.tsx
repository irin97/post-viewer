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
    const setFilterLengthMemo = useCallback((value: number) => setFilterLength(value), []);
    const filteredPosts = useMemo(() => postLengthFilter(postList, filterLength), [postList, filterLength]);

    const { minTitleLength, maxTitleLength } = useMemo(() => {
        const titleLengthArr = postList.map(post => post.title.length);

        return {
            minTitleLength: Math.min(...titleLengthArr),
            maxTitleLength: Math.max(...titleLengthArr)
        }
    }, [postList])

    return (
        <>
            <PostLengthFilter setFilterLength={setFilterLengthMemo} minValue={minTitleLength} maxValue={maxTitleLength} />
            <FilteredPostList postList={filteredPosts} />
        </>
    )
}