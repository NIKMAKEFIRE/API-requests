import React, { useState } from 'react'
import { IUserProps } from '../../types/types'
import Preloader from '../../UI/Preloader'
import UsersList from './UsersList'
import { UsersListCont } from '../styles'

type Props = IUserProps & {}

const UsersListContainer: React.FC<Props> = ({ ...usersProps }) => {

    const [isLoading, setIsLoading] = useState(false)

    setTimeout(() => {
        setIsLoading(true)
    }, 700)

    return (
        <UsersListCont>
            {
                !isLoading
                    ? <Preloader />
                    : <UsersList {...usersProps} />
            }
        </UsersListCont>
    )
}

export default UsersListContainer