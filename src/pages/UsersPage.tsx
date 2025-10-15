import { useUsers } from "@/features/UserList/model/hooks/useUsers";
import { UserList } from "@/widgets/UserList/UserList";
import { withLoading } from "@/shared/lib/hoc/withLoading";

const UserListWithLoading = withLoading(UserList)

export const UsersPage = () => {
    const { storeUsers, isLoading } = useUsers();

    return <UserListWithLoading isLoad={!isLoading} userList={storeUsers || []} />
}