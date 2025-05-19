import React, { use } from "react";
import { Link, useNavigate } from "react-router-dom"

import { useAuthContext } from "../../contexts/AuthContext";
import styles from "../AuthSharedStyles.module.css"
import TextInput from "../../components/TextInput/TextInput";
import IconEmail from "../../assets/IconEmail";
import IconPassword from "../../assets/IconPassword";
import Button from "../../components/Button/Button";

export default function Login () {

    const { auth, setAuth } = useAuthContext()

    //create navigate for login redirection
    const navigate = useNavigate()

    const [errors, setErrors] = React.useState({
        email: false,
        password: false,
    })

    const [authError, setAuthError] = React.useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
    
        const form = e.target.elements

        const getFormValues = (form) => ({
            email: form["login-email"].value,
            password: form["login-password"].value
        })

        const getFormValidity = (form) => ({
            email: !form["login-email"].validity.valid,
            password: !form["login-password"].validity.valid
        })

        setErrors(getFormValidity(form))

        //Checks for errors
        const isEverythingOk = Object.values(getFormValidity(form)).every(error => !error)
        
        //Pulls localStorage data and checks if matching auth
        const localStorageData = JSON.parse(localStorage.getItem(getFormValues(form).email))
        const loginSuccessful = localStorageData?.password === getFormValues(form).password


        if(isEverythingOk){
            if(loginSuccessful){
                setAuthError(false)
                setAuth(prevAuth => ({...prevAuth, loggedIn: true}))
                navigate("../../")
            }
            else{
                setAuthError(true)
            }
        }
    }
    
    return(
        <>
            <div className={styles.header}>
                <h1 className="text-preset-1">Login</h1>
                <p className="text-preset-3">Add your details below to get back into the app</p>
            </div>
            <form className={styles.content} noValidate onSubmit={handleSubmit}>
                <TextInput 
                    legend="Email address"
                    icon={<IconEmail/>}
                    inputProps={{
                        id:"login-email",
                        required:true,
                        placeholder:"e.g.alex@email.com",
                        type:"email",
                    }}
                    message={{
                        error: errors.email || authError,
                        errorText: errors.email? "Can't be empty": authError? "Invalid email/password":"",
                    }}
                />
                <TextInput 
                    legend="Password"
                    icon={<IconPassword/>}
                    inputProps={{
                        id:"login-password",
                        required:true,
                        placeholder:"Enter your password",
                        type:"password"
                    }}
                    message={{
                        error: errors.password || authError,
                        errorText: errors.password? "Can't be empty": authError? "Invalid email/password":"",
                    }}
                />
                <Button
                text="Login"
                variant="primary"
                />
                <div className={styles.footer}>
                    <p className="text-preset-3">Don't have an account?</p>
                    <Link className="text-preset-3" to="../sign-up">Create account</Link>
                </div>  
            </form>
        </>
    )
}