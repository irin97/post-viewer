import { useGetPostListQuery } from "@/entities/post/api/postsApi";

export const usePosts = () => {
    const { data: posts, error, isLoading } = useGetPostListQuery()
    return { posts, error, isLoading }
}