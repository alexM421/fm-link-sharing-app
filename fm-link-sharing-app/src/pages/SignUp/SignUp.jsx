import React from "react";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

import styles from "../AuthSharedStyles.module.css"
import TextInput from "../../components/TextInput/TextInput";
import IconEmail from "../../assets/IconEmail";
import IconPassword from "../../assets/IconPassword";
import Button from "../../components/Button/Button";

export default function SignUp () {

    const navigate = useNavigate()

    const [errors, setErrors] = React.useState({
        email: false,
        password: false,
        confirmPassword: false,
        emailAlreadyUsed: false,
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const emailElement = e.target.elements[0]
        const emailValue = emailElement.value
        const emailError = emailElement.validity.valid

        const passwordElement = e.target.elements[1]
        const passwordValue =  passwordElement.value
        const passwordError = passwordElement.validity.valid
        
        const confirmPasswordElement = e.target.elements[2]
        const confirmPasswordValue =  confirmPasswordElement.value
        const confirmPasswordError = confirmPasswordElement.validity.valid && confirmPasswordValue===passwordValue

        const tempErrors = {
            email: !emailError,
            password: !passwordError,
            confirmPassword: !confirmPasswordError,
            emailAlreadyUsed: localStorage.getItem(emailValue)
        }

        setErrors(tempErrors)

        if(Object.values(tempErrors).every(error => !error)){
            localStorage.setItem(emailValue,JSON.stringify({
                password: passwordValue,
            }))
            navigate("../login")
        }
    }


    return(
        <>
            <div className={styles.header}>
                <h1 className="text-preset-1">Create account</h1>
                <p className="text-preset-3">Let’s get you started sharing your links!</p>
            </div>
            <form className={styles.content} onSubmit={handleSubmit} noValidate>
                <TextInput 
                legend="Email address"
                icon={<IconEmail/>}
                inputProps={{
                    id:"sign-up-email",
                    required: true,
                    placeholder:"e.g.alex@email.com",
                    type:"email"
                }}
                message={{
                    errorText: errors.email? "Can't be empty": errors.emailAlreadyUsed? "Already used":"",
                    error: errors.email || errors.emailAlreadyUsed,
                }}
                />
                <TextInput 
                icon={<IconPassword/>}
                legend="Create password"
                inputProps={{
                    type: "password",
                    placeholder:"At least 8 characters",
                    id:"sign-up-password",
                    required: true,
                    min:8, 
                }}
                message={{
                    errorText: errors.password? "Please check again":"",
                    error: errors.password
                }}
                />
                <TextInput 
                icon={<IconPassword/>}
                legend="Confirm password"
                inputProps={{
                    type:"password",
                    placeholder:"At least 8 characters",
                    id: "sign-up-confirm-password",
                    required: true,
                    min: 8,
                }}
                message={{
                    underMessage:"Password must contain at least 8 characters",
                    error: errors.confirmPassword,
                    errorText: errors.confirmPassword? "Passwords must match":""
                }}
                />
                <Button
                text="Create new account"
                variant="primary"
                />
                <div className={styles.footer}>
                    <p className="text-preset-3">Alreacdy have an account?</p>
                    <Link className="text-preset-3" to="../login">Login</Link>
                </div>  
            </form>
        </>
    )
}