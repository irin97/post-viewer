import { PostList } from "@/widgets/PostList/PostList";
import { withLoading } from "@/shared/lib/hoc/withLoading";
import { useGetPostListQuery } from "@/entities/post/api/postsApi";

const PostListWithLoading = withLoading(PostList);


export const PostsPage = () => {
    const { data: posts, isLoading } = useGetPostListQuery();

    return <PostListWithLoading isLoad={!isLoading} postList={posts || []}></PostListWithLoading>
}