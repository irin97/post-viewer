import { PostCard } from "@/entities/post/ui/PostCard";
import styles from "./PostList.module.css";
import { type PostListType } from "@/entities/post/model/types";
import { ItemList } from "@/shared/ui/ItemList/ItemList";

interface PostListViewerProps {
    postList: PostListType;
    withComments?: boolean
}

export const PostListViewer = ({ postList, withComments = true }: PostListViewerProps) => {

    return <ItemList
        items={postList}
        renderItem={(item) => <PostCard post={item} withComments={withComments} />}
        listClassName={styles.list}
    />
}