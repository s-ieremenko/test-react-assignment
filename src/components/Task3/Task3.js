import React, { useEffect, useState } from 'react'

import Table from '../Table/Table'
import styles from './Task3.module.css'
import Modal from '../Modal/Modal'
import { url } from '../../constants'
import { useFetch } from '../../hooks/useFetching'
import Pagination from '../Pagination/Pagination'
import BackHomeButton from '../BackHomeButton/BackHomeButton'

const Task3 = () => {
    const [currentUser, setCurrentUser] = useState({})
    const [openModal, setOpenModal] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [usersPerPage, setUsersPerPage] = useState(10)

    const urlWithPagination = `${url}?page=${currentPage}&size=${usersPerPage}`

    const [fetchUsers, isLoading, error, users] =
        useFetch(urlWithPagination)

    const handleShowMoreInfo = (currentUser) => {
        setOpenModal(true)
        setCurrentUser(currentUser)
    }

    const handleCloseModal = () => {
        setOpenModal(false)
        setCurrentUser(null)
    }

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
            <h2>TASK 3</h2>
            <Table
                users={users}
                isLoading={isLoading}
                error={error}
                showMoreInfoColumn={true}
                handleShowMoreInfo={handleShowMoreInfo}
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
