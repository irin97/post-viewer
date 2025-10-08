import { NavLink } from "react-router-dom";
import styles from './UserTabs.module.css';
import type { TabListType } from "./Tab";
import { type FC } from "react";

interface UserTabsProps {
    tabs: TabListType
}

export const UserTabs: FC<UserTabsProps> = ({ tabs }) => {

    const tabsList = tabs.map((item) => (
        <NavLink key={item.path} to={item.path} className={({ isActive }) => (isActive ? styles.linkActive : '')} >{item.name}</NavLink>
    ))

    return <nav className={styles.nav}>{tabsList}</nav>
}