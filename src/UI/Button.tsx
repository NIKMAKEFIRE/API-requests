import React from 'react'

type ButtonProps = {
    children: string
    disabled?: boolean
    onClick?: () => void | React.MouseEvent<HTMLButtonElement>
}

const Button = ({ children }: ButtonProps) => {
    return (
        <>
            <button type="submit" className="button">{children}</button>
        </>
    )
}

export default Button