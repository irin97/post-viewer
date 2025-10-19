import { type FC } from "react";
import type { UserType } from "@/entities/user/model/types";
import styles from '@/entities/post/ui/PostCard.module.css';
import themeStyles from '@/shared/styles/theme.module.css';
import { useTheme } from "@/shared/lib/theme/useTheme";
import { UserLinks } from "@/widgets/UserLinks/UserLinks";

interface UserProps {
    user: UserType
}

export const UserCard: FC<UserProps> = ({ user }) => {
    const { theme } = useTheme();

    const links = [
        { name: 'Posts', path: `${user.id}/posts` },
        { name: 'Todos', path: `${user.id}/todos` },
        { name: 'Albums', path: `${user.id}/albums` }
    ]

    return <div className={`${styles.card} ${themeStyles['card' + theme]}`}>
        <div className={styles.cardContent}>
            <h2 className={`${styles.title} ${themeStyles['text' + theme]}`}>{user.name}</h2>
            <p className={`${styles.description} ${themeStyles['text' + theme]}`}>Username: {user.username}</p>
            <p className={`${styles.description} ${themeStyles['text' + theme]}`}>{user.email}</p>
        </div>
        <UserLinks links={links} />
    </div>

}