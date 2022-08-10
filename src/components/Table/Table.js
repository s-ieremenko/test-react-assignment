import React from 'react'

import styles from './Table.module.css'

const Table = (props) => {
    const {
        users,
        isLoading,
        error,
        showMoreInfoColumn,
        handleShowMoreInfo,
    } = props

    if (isLoading) {
        return (
            <div>
                <p className={styles.loading}>Loading...</p>
            </div>
        )
    }

    if (error) {
        return (
            <div>
                <p className={styles.error}>{error}</p>
            </div>
        )
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    {showMoreInfoColumn && <th></th>}
                </tr>
            </thead>
            <tbody>
                {users.map((user) => {
                    const { id, firstName, lastName } = user
                    return (
                        <tr key={id}>
                            <td>{firstName}</td>
                            <td>{lastName}</td>
                            {showMoreInfoColumn && (
                                <td className={styles.moreInfo}>
                                    <button
                                        onClick={() =>
                                            handleShowMoreInfo(user)
                                        }
                                    >
                                        More information
                                    </button>
                                </td>
                            )}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table
