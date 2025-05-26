import React from "react";
import styles from "./Link.module.css"
import TextInput from "../TextInput/TextInput";
import IconLink from "../../assets/IconLink";
import CustomSelect from "../CustomSelect/CustomSelect"
import DragAndDrop from "../../assets/DragAndDrop"
import { selectItemArr } from "./selectItemArrData";
import { data } from "react-router-dom";

export default function Link ({ linkData, setLinksData, index}) {

    //handles CustomSelect change
    const selected = linkData.selected
    const setSelected = (newSelect) => {
        setLinksData(prevLinksData => {

            const newLinkData = {
                ...prevLinksData[index],
                selected: newSelect
            }
        
            const updatedLinkData = [...prevLinksData]
            updatedLinkData[index]= newLinkData

            return updatedLinkData
        })
    }


    //handles Input change
    const link = linkData.link
    const handleLinkChange = (e) => {

        const newLinkText = e.currentTarget.value
        setLinksData(prevLinksData => {
            
            const newLinkData = {
                ...prevLinksData[index],
                link: newLinkText
            }

            const updatedLinkData = [...prevLinksData]
            updatedLinkData[index] = newLinkData

            return updatedLinkData
        })
    }

    //handles remove
    const handleRemove = () => {
        setLinksData((prevData) => {
            const dataArr = [...prevData]
            dataArr.splice(index,1)

            return dataArr
        })
    }

    const linkError = linkData.error
 

    //handles link validation
    function isValidLink() {
        const regex = new RegExp(`^https:\/\/${linkData.selected.domain}\/?[A-Za-z0-9-_.]+\/?$`);
        console.log(linkData.selected.domain)
        return regex.test(linkData.link);
    }

    React.useEffect(() => {
        const setLinkError = (boolean) => {
        setLinksData(prevLinksData => {
                
                const newLinkData = {
                    ...prevLinksData[index],
                    error: boolean
                }

                const updatedLinkData = [...prevLinksData]
                updatedLinkData[index] = newLinkData

                return updatedLinkData
            })
        }
        if(linkData.link){
            !isValidLink()? setLinkError(true):setLinkError(false)
        }
        

    },[linkData.link, linkData.selected])
    

    return(
        <div className={styles.link}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <DragAndDrop/>
                    <p className="text-preset-3-bold">{`Link #${index+1}`}</p>
                </div>
                <p className="text-preset-3" onClick={handleRemove}>Remove</p>
            </div>
            <CustomSelect 
            legend="Platform"
            selectItemsArr={selectItemArr}
            selected={selected}
            setSelected={setSelected}
            />
            <TextInput
            legend="Link"
            icon={<IconLink/>}
            inputProps={{
                id:`link-input-${index}`,
                required:true,
                placeholder:"e.g. https://www.github.com/johnappleseed",
                type:"text",
                value : link,
                handleChange: handleLinkChange,
            }}
            message={{
                error: linkError,
                errorText: linkError? "Link format is wrong": "",
            }}
            />
        </div>
    )
}