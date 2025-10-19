import { type FC, useCallback, useState } from "react";
import type { PostType } from "@/entities/post/model/types";
import styles from "./PostCard.module.css";
import themeStyles from '@/shared/styles/theme.module.css';
import { useTheme } from "@/shared/lib/theme/useTheme";
import { CommentList } from "@/widgets/CommentList/ui/CommentList";
import { ToggleCommentsButton } from "./ToggleCommentsButton";
import { useLazyGetCommenstListQuery } from "@/entities/comment/api/commentsApi";
import { PostData } from "./PostData";
import { Link } from "react-router-dom";

export interface PostProps {
    post: PostType;
    withComments?: boolean
}

export const PostCard: FC<PostProps> = ({ post, withComments }) => {
    const [fetchComments, { data: comments, isLoading }] = useLazyGetCommenstListQuery();
    const [commentsOpen, setCommentsOpen] = useState<boolean>(false);
    const { theme } = useTheme();
    const handleCommentsOpen = useCallback(() => {
        setCommentsOpen((prev) => {
            if (!prev) fetchComments(post.id)
            return !prev
        })
    }, [fetchComments, post.id])

    return (
        <div className={`${styles.card} ${themeStyles['card' + theme]}`}>
            <PostData post={post} />

            {withComments && (
                <>
                    <ToggleCommentsButton commentsOpen={commentsOpen} onClick={handleCommentsOpen} />

                    {commentsOpen && (
                        isLoading ?
                            <div className={`${themeStyles['text' + theme]}`}>Loading...</div>
                            : comments && <CommentList comments={comments} />
                    )}

                    <Link to={`/posts/${post.id}`} className={`${styles.more} ${themeStyles['text' + theme]}`}>Learn More</Link>
                </>
            )}

        </div>
    )
}