import styles from "./Footer.module.css";
import containerStyle from "@/shared/layouts/MainLayout.module.css";

export function Footer() {

    return (
        <footer className={styles.footer}>
            <div className={containerStyle.container}>
                <p className={styles.text}> All rights reserved.</p>
            </div>
        </footer>
    )
}