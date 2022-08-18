import React from 'react'

import Table from '../Table/Table'
import styles from '../Task2/Task2.module.css'
import { useFetch } from '../../hooks/useFetching'
import { url } from '../../constants'
import BackHomeButton from '../BackHomeButton/BackHomeButton'

const Task1 = () => {
    const [, isLoading, error, users] = useFetch(url)

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
