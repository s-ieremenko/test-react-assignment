import React from 'react'

import styles from './Modal.module.css'

const Modal = (props) => {
    const {
        firstName,
        lastName,
        birthDate,
        gender,
        customerIdentificationCode,
        handleCloseModal,
    } = props

    return (
        <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
                <button onClick={handleCloseModal}>Close</button>
                <ul>
                    <li>
                        Identification number:{' '}
                        {customerIdentificationCode}
                    </li>
                    <li>First name: {firstName}</li>
                    <li>Last name: {lastName}</li>
                    <li>Birth date: {birthDate}</li>
                    <li>Gender: {gender}</li>
                </ul>
            </div>
        </div>
    )
}

export default Modal
