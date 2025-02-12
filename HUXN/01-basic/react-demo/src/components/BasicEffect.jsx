import React, { useEffect } from 'react'

function BasicEffect() {
    useEffect(() => {
        console.log('Used useEffect')
    })
    return (

        <div>
            Basic Effect
        </div>
    )
}

export default BasicEffect