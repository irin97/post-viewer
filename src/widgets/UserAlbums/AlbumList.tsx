import { type FC } from "react";
import type { AlbumListType } from "./Album";
import { AlbumCard } from "@/entities/album/ui/AlbumCard";
import styles from '@/widgets/UserList/UserList.module.css';

interface AlbumListProps {
    albumList: AlbumListType;
}

export const AlbumList: FC<AlbumListProps> = ({ albumList }) => {
    const listTodos = albumList.map(item => (
        <li key={item.id}>
            <AlbumCard album={item} />
        </li>
    ))

    return <ul className={styles.list}>{listTodos}</ul>
}