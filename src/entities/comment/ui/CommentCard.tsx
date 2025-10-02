import { type FC } from "react";
import type { CommentType } from "@/widgets/CommentList/ui/Comment";
import styles from '@/entities/post/ui/PostCard.module.css';
import { useTheme } from "@/shared/lib/theme/useTheme";

interface CommentCardProps {
    comment: CommentType
}

export const CommentCard: FC<CommentCardProps> = ({ comment }) => {
    const { theme } = useTheme();

    return <>
        <p className={`${styles.title} ${styles['text' + theme]}`}>{comment.name}</p>
        <p className={`${styles.description} ${styles['text' + theme]}`}>{comment.email}</p>
        <p className={`${styles.description} ${styles['text' + theme]}`}>{comment.body}</p>
    </>

}