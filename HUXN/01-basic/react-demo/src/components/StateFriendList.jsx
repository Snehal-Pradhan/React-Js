import React, { useState } from 'react'

function StateFriendList() {
    const [friend, setFriend] = useState(['Alex', 'John']);
    const addNewFriend = () => {
        setFriend([...friend, 'Somu']);
    }
    const deleteFriend = () => {
        setFriend(friend.filter(f => f !== 'John'));
    }
    const updateOneFriend = () => {
        setFriend(friend.map(f => f == 'Alex' ? "Alex Smith" : f))
    }


    // filter
    // map
    // ternary operator


    return (
        <div>
            <ol>
                {friend.map((f) => (
                    <li key={Math.random}>{f}</li>
                ))}
            </ol>
            <button onClick={addNewFriend}>Add new Friend</button>
            <button onClick={deleteFriend}>Delete Friend</button>
            <button onClick={updateOneFriend}>Update one friend</button>

        </div>
    )
}

export default StateFriendList