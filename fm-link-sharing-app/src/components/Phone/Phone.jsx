import React from "react";
import styles from "./Phone.module.css"
import IllustrationPhone from "../../assets/IllustrationPhone";
import { useDataContext } from "../../contexts/DataContext";
import LinkItem from "../LinkItem/LinkItem";

export default function Phone () {
    
    const { data, setData } = useDataContext()

    const profileData = data.profileData

    console.log(data)

    const handleLinksDisplay = () => {

        const toReturnArr = []

        for(let link of data.links){
            toReturnArr.push(
                <LinkItem linkData={link.selected} link={link.link}/>
            )
        }

        return toReturnArr
    }

    return(
        <div className={styles.container}>
            <IllustrationPhone/>
            <div className={styles.content}>
                <div className={styles.profile}>
                    {profileData.avatar? <img src={profileData.avatar}/> :""}
                    <div className={styles.profileText}>
                        <h2>{`${profileData.firstName} ${profileData.lastName}`}</h2>
                        <p>{profileData.email}</p>
                    </div>
                </div>
                <div className={styles.links}>
                    {handleLinksDisplay()}
                </div>
            </div>
        </div>
    )
}