import { PostCard } from "@/entities/post/ui/PostCard";
import type { FC } from "react";
import type { PostListType } from "@/widgets/PostList/Post";
import styles from "./PostList.module.css";

interface PostListProps {
    posts: PostListType;
}

export const PostList: FC<PostListProps> = ({ posts }) => {

    const listPosts = posts.map(item => (
        <li className={styles.listItem} key={item.id} >
            <PostCard
                post={item}
            />
        </li >
    ))

    return <ul className={styles.list}> {listPosts} </ul>
}