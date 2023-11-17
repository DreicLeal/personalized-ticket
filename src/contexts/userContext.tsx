"use client"

import { IproviderProps, UserProviderData } from "@/interface/contextsInterface"
import { createContext, useContext, useState } from "react"

const UserContext = createContext<UserProviderData>({} as UserProviderData)

export const UserProvider = ({children}:IproviderProps) => {

    const [selectedImg, setSelectedImg] = useState<File | null>(null)

    return (
        <UserContext.Provider value={{selectedImg, setSelectedImg}}>
        {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)