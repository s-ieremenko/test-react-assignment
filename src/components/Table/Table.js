import React from 'react'

import styles from './Table.module.css'

const Table = (props) => {
    const { users, isLoading, isError } = props

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
