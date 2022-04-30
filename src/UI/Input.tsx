import React from 'react'

// interface Props {
//     children?: React.ReactNode
//     placeholder: string
// }

const Input = () => {
    return (
        <>
        <label className="profile-user__input-title">Name</label>
            <input className="input" type="text" placeholder="Иван Иванов"/>
        </>
    )
}

export default Input