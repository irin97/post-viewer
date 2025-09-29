import styles from "./Header.module.css";
import containerStyle from "@/shared/layouts/MainLayout.module.css";
import logo from "./assets/logo.png";
import { ThemeSwitcher } from "@/features/ThemeSwitcher/ui/ThemeSwitcher";
import { AboutModalButton } from "@/shared/ui/Button/AboutModalButton";

export function Header() {
    return (
        <header className={styles.header}>
            <div className={containerStyle.container}>
                <div className={styles.wrapper}>
                    <img src={logo}/>
                    <AboutModalButton/>
                    <ThemeSwitcher />
                </div>
            </div>
        </header>
    )
}