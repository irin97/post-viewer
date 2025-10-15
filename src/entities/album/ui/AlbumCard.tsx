import { Link } from "react-router-dom";
import { type FC } from "react";
import type { AlbumType } from "@/widgets/UserAlbums/Album";
import styles from './AlbumCard.module.css'
import { useTheme } from "@/shared/lib/theme/useTheme";

interface AlbumCardProps {
    album: AlbumType
}

export const AlbumCard: FC<AlbumCardProps> = ({ album }) => {
    const { theme } = useTheme();

    return <div className={`${styles.card} ${styles['card' + theme]}`}>
        <h2 className={`${styles.title} ${styles['text' + theme]}`}>{album.title}</h2>
        <Link to={`/albums/${album.id}/photos`} className={`${styles.link} ${styles['text' + theme]}`}>Open</Link>
    </div>
}