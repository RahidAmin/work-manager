'use client'
import React, { useEffect, useState } from 'react'
import UserContext from './userContext'

const UserProvider = ({ children }) => {

    const [user, setUser] = useState(undefined)

    useEffect(() => {
        async function load() {
            try {
                const res = await fetch('http://localhost:3000/api/currentUser', {
                    credentials: 'include',
                });
                const currentUser = await res.json();

                setUser({ ...currentUser });
            } catch (error) {
                console.error(error)
            }
        }
        load();


    }, [])


    return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}

export default UserProvider
