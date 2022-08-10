import React, { useEffect, useState } from 'react'

import Table from '../Table/Table'

const url = 'https://hiring-api.simbuka.workers.dev'

const Task1 = () => {
    const [users, setUsers] = useState([])
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const getUsers = async () => {
        try {
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
    }, [])

    return (
        <Table
            users={users}
            isLoading={isLoading}
            isError={isError}
        />
    )
}

export default Task1
