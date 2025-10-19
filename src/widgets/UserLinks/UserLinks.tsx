import { Link } from "react-router-dom";
import styles from './UserLinks.module.css';
import themeStyles from '@/shared/styles/theme.module.css';
import type { TabListType } from "../UserTabs/Tab";
import { type FC } from "react";
import { useTheme } from "@/shared/lib/theme/useTheme";

interface UserLinksProps {
    links: TabListType
}

export const UserLinks: FC<UserLinksProps> = ({ links }) => {
    const {theme} = useTheme()

    const linksList = links.map((item) => (
        <Link key={item.path} to={item.path} className={`${styles.link} ${themeStyles['text' + theme]}`} >{item.name}</Link>
    ))

    return <nav className={styles.nav}>{linksList}</nav>
}