import React from 'react'
import { Link } from 'react-router-dom'

import styles from './BackHomeButton.module.css'

const BackHomeButton = () => {
    return (
        <div className={styles.backHomeButton}>
            <Link to="/">Back home</Link>
        </div>
    )
}

export default BackHomeButton
