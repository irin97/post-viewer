import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "@/shared/layouts/MainLayout";
import { PostsPage } from "@/pages/PostsPage";
import { PostDetailsPage } from "@/pages/PostDetailsPage";
import { UsersPage } from "@/pages/UsersPage";
import { UserAlbumsPage } from "@/pages/UserAlbumsPage";
import { UserTodosPage } from "@/pages/UserTodosPage";
import { UserPostsPage } from "@/pages/UserPostsPage";
import { AlbumPhotosPage } from "@/pages/AlbumPhotosPage";
import { Page404 } from "@/pages/Page404";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <PostsPage />, },
            { path: "posts", element: <PostsPage />, },
            { path: "posts/:id", element: <PostDetailsPage /> },
            { path: "users", element: <UsersPage /> },
            { path: "users/:id/albums", element: <UserAlbumsPage /> },
            { path: "users/:id/todos", element: <UserTodosPage /> },
            { path: "users/:id/posts", element: <UserPostsPage /> },
            { path: "albums/:id/photos", element: <AlbumPhotosPage /> },
            { path: "*", element: <Page404 />, },
        ],
    },
]);
