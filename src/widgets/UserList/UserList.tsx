import type { UserListType } from "@/entities/user/model/types";
import { UserCard } from "@/entities/user/ui/UserCard";
import styles from './UserList.module.css';
import { ItemList } from "@/shared/ui/ItemList/ItemList";

interface UserListProps {
    userList: UserListType
}

export const UserList = ({ userList }: UserListProps) => {

    return <ItemList
        items={userList}
        renderItem={(item) => <UserCard user={item} />}
        listClassName={styles.list}
    />
}