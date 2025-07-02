'use client'

const { createContext } = require("react");

const UserContext = createContext({
    user: null,
    setUser: () => { },
})

export default UserContext;