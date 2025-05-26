import React from "react";

import { selectItemArr } from "../../components/Link/selectItemArrData";
import { useDataContext } from "../../contexts/DataContext";
import styles from "../LinksSharedStyles.module.css"
import linkStyles from "./Links.module.css"
import Button from "../../components/Button/Button";
import Link from "../../components/Link/Link";

export default function Links () {

    const { data, setData } = useDataContext() 
    const [linksData, setLinksData] = React.useState(data.links)

    const addNewLink = () => {
        setLinksData(prevLinks => {

            const newLinkData = {
                selected: selectItemArr[0],
                link: "",
                error: false,
            } 

            return(
                [
                    ...prevLinks,
                    newLinkData
                ]
            )
        })
    }


    const handleLinksDisplay = () => {

        const toDisplay = []
        let count=0;

        for(let link of linksData){
            toDisplay.push(
                <Link 
                index={count}
                linkData={link}
                setLinksData={(setLinksData)}
                key={count}
                />
            )
            count++
        }

        return toDisplay
    }

    //Save the data to a context
    const  handleSave = () => {

        //Checks if no error and link is not empty before save
        if(linksData.every(data => !data.error && data.link)){
            console.log("Saved")
            setData(prevData => ({
                ...prevData,
                links: linksData
            }))
        }
    }


    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h1 className="text-preset-1">Customize your links</h1>
                    <p className="text-preset-3">Add/edit/remove links below and then share all your profiles with the world!</p>
                </div>
                <div className={linkStyles.main}>
                    <Button 
                    variant="secondary" 
                    text="+ Add new link"
                    onClick={addNewLink}
                     />
                    {handleLinksDisplay()}
                </div>
            </div>
            <div className={styles.footer}>
                <Button variant="primary" text="Save" onClick={handleSave}/>
            </div>
        </div>
    )
}