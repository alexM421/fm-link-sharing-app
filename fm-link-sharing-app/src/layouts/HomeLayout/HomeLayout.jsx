import React from "react";
import { Outlet, Navigate } from "react-router-dom";

import styles from "./HomeLayout.module.css"
import { useAuthContext } from "../../contexts/AuthContext";
import Navbar from "../../components/Navbar/Navbar";

export default function HomeLayout () {

    const { auth, setAuth } = useAuthContext()

    if(!auth.loggedIn){
        return <Navigate to="auth/login"/>
    }

    return(
        <div className={styles.layout}>
            <Navbar/>
            <Outlet/>
        </div>
    )
}