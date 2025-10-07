import { useTheme } from "@/shared/lib/theme/useTheme";
import styles from "@/shared/ui/Button/Button.module.css";

export function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    const innactiveTheme = theme === 'Light' ? 'dark' : 'light';

    const handleToggleTheme = () => setTheme(theme === 'Light' ? 'Dark' : 'Light');

    return <button className={`${styles.button} ${styles.buttonLight}`} onClick={handleToggleTheme}>{`Switch to ${innactiveTheme} mode`}</button>
}