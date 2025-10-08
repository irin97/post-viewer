import { PostData } from "@/entities/post/ui/PostData";
import { useGetPostQuery } from "@/entities/post/api/postsApi";
import { withLoading } from "@/shared/lib/hoc/withLoading";
import { useParams } from "react-router-dom";

const PostDataWithLoading = withLoading(PostData);

export const PostDetailsPage = () => {
    const { id = '' } = useParams<{ id: string }>();

    const { data: post, isLoading } = useGetPostQuery(id);

    if (!post && !isLoading) {
        return <div>Пост не найден</div>;
    }

    return <PostDataWithLoading isLoad={!isLoading} post={post!} />
}