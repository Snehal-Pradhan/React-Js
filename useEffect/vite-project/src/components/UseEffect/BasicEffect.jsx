import React, { useEffect } from 'react'

function BasicEffect() {
    useEffect(()=>{
        console.log('hello World')
    },[])
  return (

    <div>hello world</div>
  )
}

export default BasicEffect