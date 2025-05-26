import React from "react";

const DataContext = React.createContext()

export const DataContextProvider = ({ children }) => {

    const [data, setData] = React.useState({
        links: [],
        profileData: {
                avatar: "",
                firstName: "",
                lastName: "",
                email: "",
        }  
    })

    const value = {
        data: data,
        setData: setData,
    }

    return(
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )

}

export const useDataContext = () => {

    const context = React.useContext(DataContext)

    if(!context){
        throw new Error("DataContext is undefined, please fix.")
    }

    return context

}