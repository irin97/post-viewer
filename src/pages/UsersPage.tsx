import { useGetUserListQuery } from "@/entities/user/api/usersApi";
import { UserList } from "@/widgets/UserList/UserList";
import { withLoading } from "@/shared/lib/hoc/withLoading";

const UserListWithLoading = withLoading(UserList)

export const UsersPage = () => {
    const { data: users, isLoading } = useGetUserListQuery();

    return <UserListWithLoading isLoad={!isLoading} userList={users || []} />
}