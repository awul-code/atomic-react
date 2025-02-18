import React, { useEffect } from 'react'
import { useLogin } from '../Hooks/useLogin'
import { Link } from 'react-router-dom'
import { setBreadcrumb } from '../redux/slices/breadcrumbSlice'
import { useDispatch } from 'react-redux'
import Breadcrumb from '../components/Fragments/Breadcrumb'

const ProfilePage = () => {
    const username = useLogin()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setBreadcrumb({ profile: 'Profile' }));
    }, [dispatch]);

    return (
        <div>
            <Breadcrumb />
            <h1 className='text-3xl font-bold'>Profile</h1>
            <p>{username}</p>
            <Link to={"/products"}>
                <span className='text-sm text-blue-500 hover:text-blue-600'>back to product ✔</span>
            </Link>
        </div>
    )
}

export default ProfilePage