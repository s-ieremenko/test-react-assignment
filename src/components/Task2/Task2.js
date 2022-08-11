import React, { useEffect, useState } from 'react'

import Table from '../Table/Table'
import styles from './Task2.module.css'
import { useFetching } from '../../hooks/useFetching'
import UserService from '../../API/UserService'
import { url } from '../../constants'

const Task2 = () => {
    const [users, setUsers] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [usersPerPage, setUsersPerPage] = useState(10)

    const urlWithPagination = `${url}?page=${currentPage}&size=${usersPerPage}`

    const [fetchUsers, isLoading, error] = useFetching(async () => {
        const users = await UserService.getAllUsers(urlWithPagination)
        setUsers(users)
    })

    useEffect(() => {
        fetchUsers()
    }, [usersPerPage, currentPage])

    const handleChange = (e) => {
        setUsersPerPage(e.target.value)
    }
    const handlePreviousButton = () => {
        setCurrentPage(currentPage - 1)
    }

    const handleNextButton = () => {
        setCurrentPage(currentPage + 1)
    }
    return (
        <div className={styles.container}>
            <h2>TASK 2</h2>
            <Table
                users={users}
                isLoading={isLoading}
                error={error}
            />
            {!error && !isLoading && (
                <div className={styles.pagination}>
                    <button onClick={handlePreviousButton}>
                        Previous
                    </button>
                    <button onClick={handleNextButton}>Next</button>
                    <form>
                        <select
                            value={usersPerPage}
                            onChange={handleChange}
                        >
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                        </select>
                    </form>
                </div>
            )}
        </div>
    )
}

export default Task2
