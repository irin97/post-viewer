import styles from "./Header.module.css";
import containerStyle from "@/shared/layouts/MainLayout.module.css";
import logo from "./assets/logo.png"

export function Header() {
    return (
        <header className={styles.header}>
            <div className={containerStyle.container}>
                <img src={logo} className={styles.logo} />
            </div>
        </header>
    )
}

