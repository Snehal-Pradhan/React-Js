import React from 'react'
import { Data } from './UserContext'
import { useContext } from 'react'
function UserProfile() {
    const profile = useContext(Data)
    return (
        <div>
            {(profile) => (
                <>
                    <h1>{profile.name}</h1>
                    <p>{profile.age} year old {profile.gender}</p>
                </>
            )}
        </div>
    )
}

export default UserProfile