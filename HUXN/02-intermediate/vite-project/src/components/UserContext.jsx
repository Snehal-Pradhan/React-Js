import React, { createContext } from 'react'
export const Data = createContext(null);
function UserContext() {
    const profile = {
        name: "somu",
        age: 19,
        gender: "male"
    }
    return (
        <Data.Provider value={profile}>
            <UserProfile />
        </Data.Provider>
    )
}

export default UserContext