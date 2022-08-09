import React, { useState, useEffect } from 'react'

import styles from './Table.module.css'

const url = 'https://hiring-api.simbuka.workers.dev'

const Table = () => {
    const [users, setUsers] = useState([])
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const getUsers = async () => {
        try {
            const response = await fetch(url)
            const users = await response.json()
            setUsers(users)
            setIsLoading(false)
        } catch (e) {
            setIsLoading(false)
            setIsError(true)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    if (isLoading) {
        return (
            <div>
                <p className={styles.loading}>Loading...</p>
            </div>
        )
    }

    if (isError) {
        return (
            <div>
                <p className={styles.error}>Error...</p>
            </div>
        )
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => {
                    const { id, firstName, lastName } = user
                    return (
                        <tr key={id}>
                            <td>{firstName}</td>
                            <td>{lastName}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table
