import { PostList } from "@/widgets/PostList/PostList";
import { withLoading } from "@/shared/lib/hoc/withLoading";
import { usePosts } from "@/features/PostList/model/hooks/usePosts";

const PostListWithLoading = withLoading(PostList);

export const PostsPage = () => {
    const { storePosts, isLoading } = usePosts();

    return <PostListWithLoading isLoad={!isLoading} postList={storePosts || []}></PostListWithLoading>
}