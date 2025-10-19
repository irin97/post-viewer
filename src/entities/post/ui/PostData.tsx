import styles from './PostCard.module.css';
import themeStyles from '@/shared/styles/theme.module.css';
import { useTheme } from "@/shared/lib/theme/useTheme";
import type { PostType } from '@/entities/post/model/types';
import type { FC } from 'react';

interface PostDataProps {
    post: PostType;
}

export const PostData: FC<PostDataProps> = ({ post }) => {
    const { theme } = useTheme();
    return (
        <div className={styles.cardContent}>
            <p className={`${styles.description} ${themeStyles['text' + theme]}`}>ID автора: {post.userId}</p>
            <h2 className={`${styles.title} ${themeStyles['text' + theme]}`}>{post.title}</h2>
            <p className={`${styles.description} ${themeStyles['text' + theme]}`}>{post.body} </p>
        </div>
    )
}

