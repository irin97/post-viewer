import { type FC } from "react";
import type { PhotoListType } from "./Photo";
import styles from './PhotoList.module.css';
import { useTheme } from "@/shared/lib/theme/useTheme";

interface PhotoListProps {
    photoList: PhotoListType
}

export const PhotoList: FC<PhotoListProps> = ({ photoList }) => {
    const { theme } = useTheme();

    const listPhotos = photoList.map(item => (
        <li key={item.id}>
            <div className={`${styles.card} ${styles['card' + theme]}`}>
                <img src={item.thumbnailUrl} alt="img" />
                <h2 className={`${styles.title} ${styles['text' + theme]}`}>{item.title}</h2>
            </div>
        </li>
    ))

    return <ul className={styles.list}>{listPhotos}</ul>
}