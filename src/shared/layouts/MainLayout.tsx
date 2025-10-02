import { Header } from "@/widgets/LayoutHeader/Header";
import { Footer } from "@/widgets/LayoutFooter/Footer";
import styles from "./MainLayout.module.css";
import { ErrorBoundary } from "../ui/ErrorBoundary";
import { ThemeProvider } from "../lib/theme/ThemeProvider";
import { PostList } from "@/widgets/PostList/PostList";
import { withLoading } from "../lib/hoc/withLoading";
import { postListData } from "../mocks/postList";

const PostListWithLoading  = withLoading(PostList)

export function MainLayout() {

    return (
        <ErrorBoundary>
            <ThemeProvider>
                <Header />
                <main>
                    <section className={styles.section}>
                        <div className={styles.container}>
                            <ErrorBoundary>
                                <PostListWithLoading isLoad={true} postList={postListData} />
                            </ErrorBoundary>
                        </div>
                    </section>
                </main>
                <Footer />
            </ThemeProvider>
        </ErrorBoundary>
    )
}
