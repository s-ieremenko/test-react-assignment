import { useCallback, useEffect, useState } from 'react'

export const useFetch = (url) => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    const getUsers = useCallback(async () => {
        try {
            const response = await fetch(url)
            const users = await response.json()
            setUsers(users)
        } catch (e) {
            setError(e.message)
        } finally {
            setIsLoading(false)
        }
    }, [url])

    useEffect(() => {
        getUsers()
    }, [url, getUsers])
    return [getUsers, isLoading, error, users]
}
