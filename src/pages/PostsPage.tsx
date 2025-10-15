import { PostList } from "@/widgets/PostList/PostList";
import { withLoading } from "@/shared/lib/hoc/withLoading";
import { usePosts } from "@/features/PostList/model/hooks/usePosts";

const PostListWithLoading = withLoading(PostList);

export const PostsPage = () => {
    const { posts, isLoading } = usePosts();

    return <PostListWithLoading isLoad={!isLoading} postList={posts || []}></PostListWithLoading>
}