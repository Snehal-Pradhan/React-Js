import React from 'react'

function UserStatus({ loggedIn, isAdmin }) {
    return (
        <>
            {loggedIn && isAdmin && <h2>Welcome Admin!</h2>}
            {loggedIn && !isAdmin && <h2>Welcome User</h2>}
        </>
    )
}

export default UserStatus