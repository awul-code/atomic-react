import React from 'react'
import { useLogin } from '../Hooks/useLogin'
import { Link } from 'react-router-dom'

const ProfilePage = () => {
    const username = useLogin()
    return (
        <div>
            <h1 className='text-3xl font-bold'>Profile</h1>
            <p>{username}</p>
            <Link to={"/products"}>
                <span className='text-sm text-blue-500 hover:text-blue-600'>back to product ✔</span>
            </Link>
        </div>
    )
}

export default ProfilePage