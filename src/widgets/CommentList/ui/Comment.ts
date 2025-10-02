export interface CommentType {
    postId: number
    id: number
    name: string
    email: string
    body: string
}

export type CommentListType = CommentType[]