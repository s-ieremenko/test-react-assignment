import React from 'react'
import { Link } from 'react-router-dom'

import styles from './MainPage.module.css'

const MainPage = () => {
    return (
        <main>
            <nav>
                <ul className={styles.navList}>
                    <li>
                        <Link to="/task1">Task 1</Link>
                    </li>
                    <li>
                        <Link to="/task2">Task 2</Link>
                    </li>
                    <li>
                        <Link to="/task3">Task 3</Link>
                    </li>
                </ul>
            </nav>
        </main>
    )
}

export default MainPage
