import React, { useEffect, useState } from 'react'

import Table from '../Table/Table'
import styles from '../Task2/Task2.module.css'
import UserService from '../../API/UserService'
import { useFetching } from '../../hooks/useFetching'
import { url } from '../../constants'
import BackHomeButton from '../BackHomeButton/BackHomeButton'

const Task1 = () => {
    const [users, setUsers] = useState([])
    const [fetchUsers, isLoading, error] = useFetching(async () => {
        const users = await UserService.getAllUsers(url)
        setUsers(users)
    })

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div className={styles.container}>
            <h2>TASK 1</h2>
            <Table
                users={users}
                isLoading={isLoading}
                error={error}
            />
            <BackHomeButton />
        </div>
    )
}

export default Task1
