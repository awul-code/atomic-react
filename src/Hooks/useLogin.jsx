import { useEffect, useState } from "react"
import { getUsername } from "../services/auth.service"


export const useLogin = () => {
    const [username, setUsername] = useState()
    useEffect(() => {
        const token = localStorage.getItem("token")
        token && setUsername(getUsername(token).user)
    }, [])

    return username
}