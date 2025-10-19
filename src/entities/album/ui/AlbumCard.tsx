import { Link } from "react-router-dom";
import { type FC } from "react";
import type { AlbumType } from "@/entities/album/model/types";
import styles from './AlbumCard.module.css';
import themeStyles from '@/shared/styles/theme.module.css';
import { useTheme } from "@/shared/lib/theme/useTheme";

interface AlbumCardProps {
    album: AlbumType
}

export const AlbumCard: FC<AlbumCardProps> = ({ album }) => {
    const { theme } = useTheme();

    return <div className={`${styles.card} ${themeStyles['card' + theme]}`}>
        <h2 className={`${styles.title} ${themeStyles['text' + theme]}`}>{album.title}</h2>
        <Link to={`/albums/${album.id}/photos`} className={`${styles.link} ${themeStyles['text' + theme]}`}>Open</Link>
    </div>
}