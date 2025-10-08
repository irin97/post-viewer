import { useParams } from "react-router-dom";
import { withLoading } from "@/shared/lib/hoc/withLoading";
import { useGetAlbumPhotoListQuery } from "@/entities/album/api/albumsApi";
import { PhotoList } from "@/widgets/PhotoList/PhotoList";

const PhotoListWithLoading = withLoading(PhotoList)

export const AlbumPhotosPage = () => {

    const { id = '' } = useParams<{ id: string }>();
    const { data: photo, isLoading } = useGetAlbumPhotoListQuery(id);

    return <PhotoListWithLoading isLoad={!isLoading} photoList={photo || []} />
}

