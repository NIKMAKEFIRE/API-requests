import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IUsers } from '../../types/types'
import Preloader from '../../UI/Preloader'
import UsersList from './UsersList'

const UsersListContainer: React.FC = () => {
    const [users, setUsers] = useState<IUsers[]>([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        axios.get<IUsers[]>('https://jsonplaceholder.typicode.com/users?_page=1&_limit=10')
            .then((response) => {
                // console.log(response.data)
                setUsers(response.data)
            })
        setTimeout(() => {
            setIsLoading(true)
        }, 700)
    }, [])
    return (
        <div className="users-list__cont">
            {
                !isLoading
                    ? <Preloader />
                    : <UsersList users={users}/>
            }
        </div>
    )
}

export default UsersListContainer