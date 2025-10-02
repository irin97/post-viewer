import { type FC, useCallback, useState } from "react";
import type { PostType } from "@/widgets/PostList/Post";
import styles from "./PostCard.module.css";
import { useTheme } from "@/shared/lib/theme/useTheme";
import { CommentList } from "@/widgets/CommentList/ui/CommentList";
import { ToggleCommentsButton } from "./ToggleCommentsButton";
import { commentListData } from "@/shared/mocks/commentList";

interface PostProps {
    post: PostType
}

export const PostCard: FC<PostProps> = ({ post }) => {
    const [commentsOpen, setCommentsOpen] = useState(false);
    const { theme } = useTheme();
    const handleCommentsOpen = useCallback(() => {
        setCommentsOpen(prev => !prev)
    }, [])

    return (
        <div className={`${styles.card} ${styles['card' + theme]}`}>
            <div className={styles.cardContent}>
                <p className={`${styles.description} ${styles['text' + theme]}`}>ID автора: {post.userId}</p>
                <h2 className={`${styles.title} ${styles['text' + theme]}`}>{post.title}</h2>
                <p className={`${styles.description} ${styles['text' + theme]}`}>{post.body} </p>
            </div>
            <>
                <ToggleCommentsButton commentsOpen={commentsOpen} onClick={handleCommentsOpen} />
                {commentsOpen && <CommentList comments={commentListData} ></CommentList>}
            </>

        </div>
    )
}