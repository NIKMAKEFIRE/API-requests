import React from 'react'
import { NavLink } from 'react-router-dom'
import { IUsers } from '../types/types'

interface ListsProps {
    user: IUsers
}

const List: React.FC<ListsProps> = ({ user }) => {
    return (
        <div className="list">
            <div className="list__inner">
                <div className="list__info">
                    <div className="list__text list__fio"><span>ФИО:</span> {user.name}</div>
                    <div className="list__text list__city"><span>город:</span> {user.address.city}</div>
                    <div className="list__text list__company"><span>компания:</span> {user.company.name}</div>
                </div>
                <NavLink to="/profile"><button className="list__btn">Подробнее</button></NavLink>
            </div>
        </div>
    )
}

export default List