import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProfileList from './ProfileList'

const ProfileContainer = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users?_page=1&_limit=1')
      .then((response) => {
        // console.log(response.data)
        setUsers(response.data)
      })
  }, [])
  return (
    <>
      <ProfileList users={users} />
    </>
  )
}

export default ProfileContainer