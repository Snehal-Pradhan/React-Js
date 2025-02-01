import React from 'react'

function Password({ isValid }) {
    if (isValid) return (<ValidPassword />)
    else return (<InvalidPassword />)
}

const InvalidPassword = () => {
    return (<>
        <div>Invalid Password</div>
    </>)
}
const ValidPassword = () => {
    return (<>
        <div>Valid Password</div>
    </>)
}
export default Password