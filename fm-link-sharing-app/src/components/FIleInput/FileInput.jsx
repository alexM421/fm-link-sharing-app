import React from "react";
import Styles from "./FileInput.module.css"
import IconUploadImage from "../../assets/IconUploadImage"

export default function FileInput ( { id, avatar="", setProfileData}) {

    const handleFile = (e) => {

        const file = e.target.files[0]
        if(!file) return;

        const maxWidth = 102400
        const maxHeight = 102400

        const reader = new FileReader()
        
        //On reader load, create an image to check the dimensions of the images
        //If correct then we use that data as the background image
        reader.onload = (e) => {
            console.log("Reader working")
            const image = new Image()
            image.onload = () => {
                console.log("image working")
                if(image.width > maxWidth || image.height > maxHeight){
                    console.log("Not OK")
                    setProfileData(prevData =>  ({...prevData, avatar: ""}))
                }else{
                    setProfileData(prevData =>  ({...prevData, avatar: e.target.result}))
                    console.log("OK")
                }
            }
            image.src = e.target.result
        }
        reader.readAsDataURL(file)
    }

    

    return(
        <label 
        className={Styles.container} 
        htmlFor={id}
        >
            <input
            type="file" 
            name={id} 
            id={id}
            className={Styles.fileInput}
            accept=".png,.jpg"
            onChange={handleFile}
            />
           
            <div 
            className={Styles.imageHolder}
            style={{backgroundImage: avatar? `url(${avatar})`:"none", display: avatar? "block":"none"}}
            ></div>
            <div className={Styles.textContainer}>
                <IconUploadImage style={{color: !avatar? "var(--purple-600)":"white"}}/>
                <p className="text-preset-3-semi" style={{color: !avatar? "var(--purple-600)":"white"}}>+ Upload Image</p>
            </div>
        </label>
    )
}