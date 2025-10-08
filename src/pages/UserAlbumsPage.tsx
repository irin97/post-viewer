import { withLoading } from "@/shared/lib/hoc/withLoading";
import { AlbumList } from "@/widgets/UserAlbums/AlbumList";
import { useGetUsersAlbumListQuery } from "@/entities/user/api/usersApi";
import { useParams } from "react-router-dom";

const AlbumListWithLoading = withLoading(AlbumList)

export const UserAlbumsPage = () => {
    const { id = '' } = useParams();
    const { data: album, isLoading } = useGetUsersAlbumListQuery(id);

    return <AlbumListWithLoading isLoad={!isLoading} albumList={album || []}/>
}