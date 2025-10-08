import { PostCard } from "@/entities/post/ui/PostCard";
import { type FC } from "react";
import styles from "./PostList.module.css";
import { type PostListType } from "./Post";

interface PostListViewerProps {
    postList: PostListType;
    withComments?: boolean
}

export const PostListViewer: FC<PostListViewerProps> = ({ postList, withComments = true }) => {
    const listPosts = postList.map(item => (
        <li key={item.id} >
            <PostCard
                post={item}
                withComments={withComments}
            />
        </li >
    ))

    return <>
        <ul className={styles.list}> {listPosts} </ul>
    </>
}