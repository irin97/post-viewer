import type { FC } from "react";
import type { PostType } from "@/widgets/PostList/Post";
import styles from "./PostCard.module.css";


interface PostProps {
    post: PostType
}

export const PostCard: FC<PostProps> = ({ post }) => {
    return (
        <div className={styles.card}>
            <p className={styles.description}>ID автора: {post.userId}</p>
            <h2 className={styles.title}>{post.title}</h2>
            <p className={styles.text}>{post.body} </p>
        </div>
    )
}