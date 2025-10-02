import { CommentCard } from "@/entities/comment/ui/CommentCard";
import { type FC } from "react";
import type { CommentListType } from "./Comment";
import styles from './CommentList.module.css'

interface commentListProps {
    comments: CommentListType
}

export const CommentList: FC<commentListProps> = ({ comments }) => {

    const listComments = comments.map(item => (
        <li className={styles.listItem} key={item.id}>
            <CommentCard comment={item} />
        </li>
    ))

    return <ul className={styles.list}> {listComments} </ul>
}