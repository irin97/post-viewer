import { type FC, useCallback, useState } from "react";
import type { PostType } from "@/widgets/PostList/Post";
import styles from "./PostCard.module.css";
import { useTheme } from "@/shared/lib/theme/useTheme";
import { CommentList } from "@/widgets/CommentList/ui/CommentList";
import { ToggleCommentsButton } from "./ToggleCommentsButton";
import { useLazyGetCommentsListQuery } from "../api/postsApi";

interface PostProps {
    post: PostType
}

export const PostCard: FC<PostProps> = ({ post }) => {
    const [fetchComments, { data: comments, isLoading }] = useLazyGetCommentsListQuery();
    const [commentsOpen, setCommentsOpen] = useState(false);
    const { theme } = useTheme();
    const handleCommentsOpen = useCallback(() => {
        setCommentsOpen((prev) => {
            if (!prev) fetchComments(post.id)
            return !prev
        }

        )
    }, [fetchComments, post.id])

    return (
        <div className={`${styles.card} ${styles['card' + theme]}`}>
            <div className={styles.cardContent}>
                <p className={`${styles.description} ${styles['text' + theme]}`}>ID автора: {post.userId}</p>
                <h2 className={`${styles.title} ${styles['text' + theme]}`}>{post.title}</h2>
                <p className={`${styles.description} ${styles['text' + theme]}`}>{post.body} </p>
            </div>
            <>
                <ToggleCommentsButton commentsOpen={commentsOpen} onClick={handleCommentsOpen} />
                {commentsOpen && (
                    isLoading ?
                        <div className={`${styles['text' + theme]}`}>Loading...</div>
                        : comments && <CommentList comments={comments} ></CommentList>)}
            </>
        </div>
    )
}