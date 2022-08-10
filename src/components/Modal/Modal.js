import React from 'react'
import styles from './Modal.module.css'

const Modal = (props) => {
    const {
        firstName,
        lastName,
        birthDate,
        gender,
        customerIdentificationCode,
    } = props
    return (
        <div className={styles.modal}>
            <button>CLOSE</button>
            <ul>
                <li>{firstName}</li>
                <li>{lastName}</li>
                <li>{birthDate}</li>
                <li>{gender}</li>
                <li>{customerIdentificationCode}</li>
            </ul>
        </div>
    )
}

export default Modal
