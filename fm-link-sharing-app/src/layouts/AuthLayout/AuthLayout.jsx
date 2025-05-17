import React from "react";
import { Outlet } from "react-router-dom"

import styles from "AuthLayout.module.css"

export default function AuthLayout () {



    return(
        <div className="auth-layout">
            <img src={"/logo-devlinks-large.svg"}/>
            <div className=""
            {Outlet}
        </div>
    )
}