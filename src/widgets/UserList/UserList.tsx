import { type FC } from "react";
import type { UserListType } from "./User";
import { UserCard } from "@/entities/user/ui/UserCard";
import styles from './UserList.module.css'

interface UserListProps {
    userList: UserListType
}

export const UserList: FC<UserListProps> = ({ userList }) => {

    const listUsers = userList.map(item => (
        <li key={item.id}>
            <UserCard user={item} />
        </li>
    ))

    return <ul className={styles.list}> {listUsers} </ul>
}