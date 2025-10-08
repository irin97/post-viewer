import styles from "./Header.module.css";
import containerStyle from "@/shared/layouts/MainLayout.module.css";
import logo from "./assets/logo.png";
import { ThemeSwitcher } from "@/features/ThemeSwitcher/ui/ThemeSwitcher";
import { AboutModalButton } from "@/shared/ui/Button/AboutModalButton";
import { UserTabs } from "../UserTabs/UserTabs";

export function Header() {
    return (
        <header className={styles.header}>
            <div className={containerStyle.container}>
                <div className={styles.wrapper}>
                    <img src={logo} />
                    <UserTabs tabs={[{ name: 'Users', path: '/users' }, { name: 'Posts', path: '/posts' }]} />
                    <AboutModalButton />
                    <ThemeSwitcher />
                </div>
            </div>
        </header>
    )
}