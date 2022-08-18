import React, { useEffect, useState } from 'react'

import Table from '../Table/Table'
import styles from './Task2.module.css'
import { useFetch } from '../../hooks/useFetching'
import { url } from '../../constants'
import Pagination from '../Pagination/Pagination'
import BackHomeButton from '../BackHomeButton/BackHomeButton'

const Task2 = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [usersPerPage, setUsersPerPage] = useState(10)

    const urlWithPagination = `${url}?page=${currentPage}&size=${usersPerPage}`

    const [fetchUsers, isLoading, error, users] =
        useFetch(urlWithPagination)

    const handleChange = (e) => {
        setUsersPerPage(e.target.value)
    }
    const handlePreviousButton = () => {
        setCurrentPage(currentPage - 1)
    }

    const handleNextButton = () => {
        setCurrentPage(currentPage + 1)
    }
    const disabled = users.length < usersPerPage

    useEffect(() => {
        fetchUsers()
    }, [usersPerPage, currentPage, fetchUsers])

    return (
        <div className={styles.container}>
            <h2>TASK 2</h2>
            <Table
                users={users}
                isLoading={isLoading}
                error={error}
            />
            {!isLoading && !error && (
                <Pagination
                    handleChange={handleChange}
                    handlePreviousButton={handlePreviousButton}
                    handleNextButton={handleNextButton}
                    usersPerPage={usersPerPage}
                    currentPage={currentPage}
                    disabled={disabled}
                />
            )}
            <BackHomeButton />
        </div>
    )
}

export default Task2
