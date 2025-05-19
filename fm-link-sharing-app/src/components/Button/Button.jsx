import React from "react";
import styles from "./Button.module.css"

export default function Button ( { text, variant="primary" }) {

    return(
        <button 
        className={`${styles[variant]} ${styles.button} text-preset-3-semi`}
        >{text}</button>
    )
}