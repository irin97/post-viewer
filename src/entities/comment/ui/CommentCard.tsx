import { type FC } from "react";
import type { CommentType } from "@/entities/comment/model/types";
import styles from '@/entities/post/ui/PostCard.module.css';
import themeStyles from '@/shared/styles/theme.module.css';
import { useTheme } from "@/shared/lib/theme/useTheme";

interface CommentCardProps {
    comment: CommentType
}

export const CommentCard: FC<CommentCardProps> = ({ comment }) => {
    const { theme } = useTheme();

    return <>
        <p className={`${styles.title} ${themeStyles['text' + theme]}`}>{comment.name}</p>
        <p className={`${styles.description} ${themeStyles['text' + theme]}`}>{comment.email}</p>
        <p className={`${styles.description} ${themeStyles['text' + theme]}`}>{comment.body}</p>
    </>

}