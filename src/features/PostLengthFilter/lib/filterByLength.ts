import type { PostListType } from "@/entities/post/model/types";

export function postLengthFilter(posts: PostListType, length: number): PostListType {
    return posts.filter((post) => post.title.length >= length)
}
