import type { FC } from "react";
import type { PostType } from "@/widgets/PostList/Post";
import styles from "./PostCard.module.css";
import { useTheme } from "@/shared/lib/theme/useTheme";

interface PostProps {
    post: PostType
}

export const PostCard: FC<PostProps> = ({ post }) => {
    const { theme } = useTheme();

    return (
            <div className={`${styles.card} ${styles['card' + theme]}`}>
                <p className={`${styles.description} ${styles['text' + theme]}`}>ID автора: {post.userId}</p>
                <h2 className={`${styles.title} ${styles['text' + theme]}`}>{post.title}</h2>
                <p className={`${styles.descr} ${styles['text' + theme]}`}>{post.body} </p>
            </div>
    )
}