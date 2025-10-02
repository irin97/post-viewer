import type { PostListType } from "@/widgets/PostList/Post";

export function postLengthFilter(posts: PostListType, length: number): PostListType {
    return posts.filter((post) => post.title.length >= length)
}
