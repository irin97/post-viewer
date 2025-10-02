import styles from "@/widgets/PostList/loader.module.css";
import { type ComponentType } from "react";

interface WithLoadingProps {
    isLoad: boolean;
}


export function withLoading<T extends object>(ComponentWithLoader: ComponentType<T>) {
    return function ComponentWithLoading(props: T & WithLoadingProps) {
        if (!props.isLoad) {
            return <div className={styles.loader}></div>
        }
        return <ComponentWithLoader {...props} />
    }
}