import React from "react";
import styles from "./Button.module.css"

export default function Button ( { text, variant="primary", onClick }) {

    return(
        <button 
        className={`${styles[variant]} ${styles.button} text-preset-3-semi`}
        onClick={onClick}
        >{text}</button>
    )
}