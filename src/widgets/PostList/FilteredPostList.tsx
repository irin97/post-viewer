import { PostCard } from "@/entities/post/ui/PostCard";
import { type FC } from "react";
import styles from "./PostList.module.css";
import { type PostListType } from "./Post";

interface FilteredPostListProps {
    postList: PostListType
}

export const FilteredPostList: FC<FilteredPostListProps> = ({ postList }) => {
    const listPosts = postList.map(item => (
        <li key={item.id} >
            <PostCard
                post={item}
            />
        </li >
    ))

    return <>
        <ul className={styles.list}> {listPosts} </ul>
    </>
}