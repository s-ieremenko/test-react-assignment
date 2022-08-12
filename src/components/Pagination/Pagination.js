import React from 'react'
import styles from './Pagination.module.css'

const Pagination = ({
    handleNextButton,
    handleChange,
    handlePreviousButton,
    usersPerPage,
    currentPage,
    disabled,
}) => {
    return (
        <div className={styles.pagination}>
            <button
                onClick={handlePreviousButton}
                disabled={currentPage === 1}
            >
                Previous
            </button>
            <button onClick={handleNextButton} disabled={disabled}>
                Next
            </button>
            <form>
                <select value={usersPerPage} onChange={handleChange}>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                </select>
            </form>
        </div>
    )
}

export default Pagination
