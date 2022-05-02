import React from 'react'
import { IUserProps } from '../../types/types'
import List from '../../UI/List'
import { UsersListInner, UsersListTitle, UsersListList } from '../styles'

type Props = IUserProps & {}

const UsersList: React.FC<Props> = ({ sortedData }) => {

    return (
        <div className="users-list">
            <UsersListInner>
                <UsersListTitle>Список пользователей</UsersListTitle>
                {
                    sortedData().map((user) =>
                        <UsersListList key={user.id}>
                            <List key={user.id} user={user} />
                        </UsersListList>
                    )
                }
            </UsersListInner>
        </div>
    )
}

export default UsersList