import { Header } from "@/widgets/LayoutHeader/Header";
import { Footer } from "@/widgets/LayoutFooter/Footer";
import styles from "./MainLayout.module.css";
import { ErrorBoundary } from "../ui/ErrorBoundary";
import { ThemeProvider } from "../lib/theme/ThemeProvider";
import { PostsPage } from "@/pages/PostsPage";

export function MainLayout() {

    return (
        <ErrorBoundary>
            <ThemeProvider>
                <Header />
                <main>
                    <section className={styles.section}>
                        <div className={styles.container}>
                            <ErrorBoundary>
                                <PostsPage />
                            </ErrorBoundary>
                        </div>
                    </section>
                </main>
                <Footer />
            </ThemeProvider>
        </ErrorBoundary>
    )
}
