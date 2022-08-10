import React, { useEffect, useState } from 'react'

import Table from '../Table/Table'
import styles from './Task3.module.css'
import Modal from '../Modal/Modal'
import { url } from '../../constants'
import { useFetching } from '../../hooks/useFetching'
import UserService from '../../API/UserService'

const Task3 = () => {
    const [users, setUsers] = useState([])
    const [currentUser, setCurrentUser] = useState({})
    const [currentPage, setCurrentPage] = useState(1)
    const [usersPerPage, setUsersPerPage] = useState(10)
    const [openModal, setOpenModal] = useState(false)

    const urlWithPagination = `${url}?page=${currentPage}&size=${usersPerPage}`

    const [fetchUsers, isLoading, error] = useFetching(async () => {
        const users = await UserService.getAllUsers(urlWithPagination)
        setUsers(users)
    })

    const handleShowMoreInfo = (currentUser) => {
        setOpenModal(true)
        setCurrentUser(currentUser)
    }

    const handleCloseModal = () => {
        setOpenModal(false)
        setCurrentUser(null)
    }

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
            <Table
                users={users}
                isLoading={isLoading}
                error={error}
                showMoreInfoColumn={true}
                handleShowMoreInfo={handleShowMoreInfo}
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
            {openModal && (
                <Modal
                    {...currentUser}
                    handleCloseModal={handleCloseModal}
                />
            )}
        </div>
    )
}

export default Task3
