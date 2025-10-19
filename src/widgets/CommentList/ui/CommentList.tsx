import { CommentCard } from "@/entities/comment/ui/CommentCard";
import type { CommentListType } from "@/entities/comment/model/types";
import styles from './CommentList.module.css';
import { ItemList } from "@/shared/ui/ItemList/ItemList";

interface commentListProps {
    comments: CommentListType
}

export const CommentList = ({ comments }: commentListProps) => {

    return <ItemList
        items={comments}
        renderItem={(item) => <CommentCard comment={item} />}
        itemClassName={styles.listItem}
        listClassName={styles.list}
    />
}