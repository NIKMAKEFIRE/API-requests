import axios from 'axios';
import React, { MouseEventHandler, useCallback, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import { IUsers } from '../types/types';
import Button from '../UI/Button';
import ProfileContainer from './Profile/ProfileContainer';
import UsersListContainer from './UsersList/UsersListContainer';
import { ContainerComponent, SidebarComponent, SidebarInner, SidebarTitle, SidebarButton } from './styles'


const Container = () => {
    const [users, setUsers] = useState<IUsers[]>([])
    const usersProps = { users, setUsers, sortData }

    useEffect(() => {
        axios.get<IUsers[]>('https://jsonplaceholder.typicode.com/users?_page=1&_limit=10')
            .then((response) => {
                setUsers(response.data)
            })
    }, [])

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
            style={{ background: 'transparent', border: 'none' }}>{children}</button>
    }

    const [sortKey, setSortKey] = useState<SortKeys>('id')
    const [sortOrder, setSortOrder] = useState<SortOrder>('ascn')

    const headers: { id: number, key: SortKeys, label: string }[] = [
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
        <ContainerComponent>
            <div>
                <SidebarComponent>
                    <SidebarInner>
                        <SidebarTitle>Сортировка</SidebarTitle>
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
                                        <SidebarButton>
                                            <Button>{header.label}</Button>
                                        </SidebarButton>
                                </SortButton>
                            )}
                    </SidebarInner>
                </SidebarComponent>
            </div>
            <div>
                <Routes>
                <Route path="/" element={<UsersListContainer {...usersProps} sortedData={sortedData} />} />
                <Route path="/profile" element={<ProfileContainer />} />
                </Routes>
            </div>
        </ContainerComponent>
    )
}

export default Container