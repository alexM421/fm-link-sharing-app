import React from "react";
import styles from "../LinksSharedStyles.module.css"
import profileStyles from "./Profile.module.css"
import Button from "../../components/Button/Button";
import TextInput from "../../components/TextInput/TextInput";
import FileInput from "../../components/FIleInput/FileInput";
import { useDataContext } from "../../contexts/DataContext";

export default function Profile () {

    const {data, setData} = useDataContext()

    const [profileData, setProfileData] = React.useState(data.profileData)

    const [errors, setErrors] = React.useState({
        firstName: false,
        lastName: false,
        email: false,
    })


    const handleSubmit = (e) => {
        
        e.preventDefault()
        const form = e.target.elements


        const getFormValues = (form) => ({
            firstName: form["first-name"].value,
            lastName: form["last-name"].value,
            email: form["email"].value,
        })

        const getFormValidity = (form) => ({
            fileInput: !form["file-input"].validity.valid,
            firstName: !form["first-name"].validity.valid,
            lastName: !form["last-name"].validity.valid,
            email: !form["email"].validity.valid,
        })

        setErrors(getFormValidity(form))
        const isEverythingOk = Object.values(getFormValidity(form)).every(error => !error)

        if(isEverythingOk){
            if(profileData.avatar){
                setData(prevData => ({...prevData, profileData: {
                    ...prevData.profileData,
                    avatar: profileData.avatar,
                    ...getFormValues(form),
                }}))
            }
        }

    }

    return(
        <form className={styles.container} noValidate onSubmit={handleSubmit}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h1 className="text-preset-1">Profile Details</h1>
                    <p className="text-preset-3">Add your details to create a personal touch to your profile.</p>
                </div>
                <div className={profileStyles.main}>
                    <div className={profileStyles.inputsContainer}>
                        <div className={profileStyles.inputDiv}>
                            <p className="text-preset-3">Profile Picture</p>
                            <div className={profileStyles.picture}>
                                <FileInput 
                                id="file-input"
                                avatar={profileData.avatar}
                                setProfileData={setProfileData}
                                />
                                <p className="text-preset-4">Image must be below 1024*1024px. Use PNG or JPG format.</p>
                            </div>    
                        </div>            
                    </div>
                    <div className={profileStyles.inputsContainer}>
                        <div className={profileStyles.inputDiv}>
                            <p className="text-preset-3">First name*</p>
                                <TextInput
                                    inputProps={{
                                        id:`first-name`,
                                        required:true,
                                        placeholder:"e.g. John",
                                        type:"text",
                                    }}
                                    message={{
                                        error: errors.firstName,
                                        errorText: errors.firstName? "Please enter your first name.":"",
                                    }}
                                />
                        </div>
                        <div className={profileStyles.inputDiv}>
                            <p className="text-preset-3">Last name*</p>
                                <TextInput
                                    inputProps={{
                                        id:`last-name`,
                                        required:true,
                                        placeholder:"e.g. Appleseed",
                                        type:"text",
                                    }}
                                    message={{
                                        error: errors.lastName,
                                        errorText: errors.lastName? "Please enter your last name.":"",
                                    }}
                                />
                        </div>
                        <div className={profileStyles.inputDiv}>
                            <p className="text-preset-3">Email</p>
                                <TextInput
                                    inputProps={{
                                        id:`email`,
                                        required:true,
                                        placeholder:"e.g. email@example.com",
                                        type:"email",
                                    }}
                                    message={{
                                        error: errors.email,
                                        errorText: errors.email? "Please enter a valid email":"",
                                    }}
                                />
                        </div>
                    </div>
                </div>
            </div>
             <div className={styles.footer}>
                <Button variant="primary" text="Save" />
            </div>
        </form>
    )
}