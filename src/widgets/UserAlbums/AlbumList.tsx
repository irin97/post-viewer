import type { AlbumListType } from "@/entities/album/model/types";
import { AlbumCard } from "@/entities/album/ui/AlbumCard";
import styles from '@/widgets/UserList/UserList.module.css';
import { ItemList } from "@/shared/ui/ItemList/ItemList";

interface AlbumListProps {
    albumList: AlbumListType;
}

export const AlbumList = ({ albumList }: AlbumListProps) => {

    return <ItemList
        items={albumList}
        renderItem={(item) => <AlbumCard album={item} />}
        listClassName={styles.list}
    />
}