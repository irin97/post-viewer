import type { PhotoListType } from "@/entities/photo/model/types";
import styles from './PhotoList.module.css';
import { ItemList } from "@/shared/ui/ItemList/ItemList";
import { PhotoCard } from "@/entities/photo/ui/PhotoCard";

interface PhotoListProps {
    photoList: PhotoListType
}

export const PhotoList = ({ photoList }: PhotoListProps) => {

    return <ItemList
        items={photoList}
        renderItem={(item) => <PhotoCard photo={item} />}
        listClassName={styles.list}
    />
}