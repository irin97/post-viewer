import { withLoading } from "@/shared/lib/hoc/withLoading";
import { useParams } from "react-router-dom";
import { useGetUsersPostListQuery } from "@/entities/post/api/postsApi";
import { PostListViewer } from "@/widgets/PostList/PostListViewer";

const PostListViewerWithLoading = withLoading(PostListViewer);

export const UserPostsPage = () => {
    const { id = '' } = useParams<{ id: string }>();
    const { data: posts, isLoading } = useGetUsersPostListQuery(id);

    return <PostListViewerWithLoading isLoad={!isLoading} withComments={false} postList={posts || []} />
}