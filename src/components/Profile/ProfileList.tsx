import React from 'react'
import { IUserProfile } from '../../types/types'
import Profile from './Profile'

interface ProfileListProps {
    users: IUserProfile[]
}

const ProfileList: React.FC<ProfileListProps> = ({ users }) => {
    return (
        <>
            {
                users.map((user) => <Profile key={user.id} user={user} />)
            }
        </>
    )
}

export default ProfileList