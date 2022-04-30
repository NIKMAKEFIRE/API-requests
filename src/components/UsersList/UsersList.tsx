import React, { MouseEventHandler, useCallback, useState } from 'react'
import { IAddress, IUsers } from '../../types/types'
import Button from '../../UI/Button'
import List from '../../UI/List'

interface UsersListProps {
    users: IUsers[]
}

const UsersList: React.FC<UsersListProps> = ({ users }) => {
    type Data = typeof users
    type SortKeys = keyof Data[0]
    type SortOrder = 'ascn' | 'desc'

    function sortData({ usersData, sortKey, reverse }: {
        usersData: Data,
        sortKey: SortKeys,
        reverse: boolean
    }) {
        if (!sortKey) return usersData

        const sortedData = users.sort((a, b) => {
            return a[sortKey] > b[sortKey] ? 1 : -1
        })

        if (reverse) {
            return sortedData.reverse()
        }

        return sortedData
    }

    function SortButton({ sortOrder, columnKey, sortKey, onClick, children }: {
        sortOrder: SortOrder
        columnKey: SortKeys
        sortKey: SortKeys
        onClick: MouseEventHandler<HTMLButtonElement>
        children: React.ReactNode
    }) {
        return <button onClick={onClick} 
        style={{ background: 'transparent', border: 'none'}}>{children}</button>
    }
    
    const [sortKey, setSortKey] = useState<SortKeys>('id')
    const [sortOrder, setSortOrder] = useState<SortOrder>('ascn')

    const headers: {id: number, key: SortKeys, label: string }[] = [
        { id: 1, key: 'name', label: 'По компании' },
        { id: 2, key: 'id', label: 'По городу' }
    ]

    const sortedData = useCallback(() =>
        sortData({ usersData: users, sortKey, reverse: sortOrder === 'desc' }),
        [users, sortKey, sortOrder])

    function changeSort(key: SortKeys) {
        setSortOrder(sortOrder === 'ascn' ? 'desc' : 'ascn')
        setSortKey(key)
    }

    return (
        <div className="users-list">
            <div className="users-list__inner">
                {
                    headers.map((header) =>
                        <SortButton 
                        key={header.id} 
                        columnKey={header.key} 
                        onClick={() => changeSort(header.key)}
                            {...{
                                sortOrder,
                                sortKey
                            }}> 
                        <Button>{header.label}</Button>
                        </SortButton>
                )}
                <h5 className="users-list__title">Список пользователей</h5>
                {
                    sortedData().map((user) =>
                        <div key={user.id} className="users-list__list">
                            <List key={user.id} user={user} />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default UsersList