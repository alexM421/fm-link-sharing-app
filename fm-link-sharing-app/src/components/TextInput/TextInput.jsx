import React from "react";

import styles from "./TextInput.module.css"

export default function TextInput ( { legend, icon, inputProps={}, message={}}) {

    const {underMessage, errorText, error } = message
    const { type="text",placeholder, required, id, min, value, handleChange} = inputProps  

    return(
        <div className={`${styles.container} ${error? styles.error:""}`}>
            <p className={`text-preset-4 ${styles.legend}`}>{legend}</p>
            <label className={styles.inputField} htmlFor={id}>
                {icon? <div className={`text-preset-3 ${styles.icon}`} src={icon}>
                    {icon}
                </div>:""}
                <input
                name={id}
                id={id}
                className={styles.input}
                placeholder={placeholder}
                type={type}
                required={required}
                minLength={min}
                value={value}
                onChange={handleChange}
                />
                <p className={`text-preset-4`}>{errorText}</p>
            </label>
            {underMessage? <p className={`text-preset-4 ${styles.underMessage}`}>{underMessage}</p>:""}
        </div>
    )
}