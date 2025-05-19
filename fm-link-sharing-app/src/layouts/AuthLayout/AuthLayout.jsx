import React from "react";
import { Outlet } from "react-router-dom"

import styles from "./AuthLayout.module.css"

export default function AuthLayout () {


    return(
        <div className={styles.authLayout}>
            <img src={"/logo-devlinks-large.svg"} className={styles.logo} alt="devlinks-logo"/>
            <div className={styles.authContainer}>
                <Outlet/>
            </div>
        </div>
    )
}