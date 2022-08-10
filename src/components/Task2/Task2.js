import React, { useEffect, useState } from 'react'
import Table from '../Table/Table'
import styles from './Task2.module.css'

const Task2 = () => {
    const [users, setUsers] = useState([])
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [usersPerPage, setUsersPerPage] = useState(10)

    const getUsers = async () => {
        try {
            const url = `https://hiring-api.simbuka.workers.dev/?page=${currentPage}&size=${usersPerPage}`
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
            <Table
                users={users}
                isLoading={isLoading}
                isError={isError}
            />
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
        </div>
    )
}

export default Task2