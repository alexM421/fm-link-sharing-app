import React from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./Navbar.module.css"
import Button from "../Button/Button";
import IconProfile from "../../assets/IconProfile"
import IconLink from "../../assets/IconLink"

export default function Navbar ({variant="primary"}) {

    const path = useLocation().pathname
    const currentPageIsLinks = path==="/"? true:false

    const primary = 
        <>
            <img src={"/logo-devlinks-large.svg"} className={styles.logo}/>
            <div className={styles.pages}>
                <Link
                to="/"
                className={`${styles.page} ${currentPageIsLinks? styles["selected-page"]:""}`}
                >
                    <IconLink/>
                    <p className="text-preset-3-semi">Links</p>
                </Link>
                <Link
                to="/profile"
                className={`${styles.page} ${!currentPageIsLinks? styles["selected-page"]:""}`}
                >
                    <IconProfile/>
                    <p className="text-preset-3-semi">Profile Details</p>
                </Link>
            </div>
            <Button variant="secondary" text="Preview"/>
        </>

    const secondary = 
        <>
            <Burron variant="secondary" text="Back to Editor"/>
            <Button variant="primary" text="Share Link"/>
        </>

    return(
        <div className={styles.navbar}>
            {variant==="primary"? primary:secondary}
        </div>
    )
}