import styles from './PostCard.module.css';
import { useTheme } from "@/shared/lib/theme/useTheme";
import type { PostType } from '@/widgets/PostList/Post';
import type { FC } from 'react';

interface PostDataProps {
    post: PostType;
}

export const PostData: FC<PostDataProps> = ({ post }) => {
    const { theme } = useTheme();
    return (
        <div className={styles.cardContent}>
            <p className={`${styles.description} ${styles['text' + theme]}`}>ID автора: {post.userId}</p>
            <h2 className={`${styles.title} ${styles['text' + theme]}`}>{post.title}</h2>
            <p className={`${styles.description} ${styles['text' + theme]}`}>{post.body} </p>
        </div>
    )
}

