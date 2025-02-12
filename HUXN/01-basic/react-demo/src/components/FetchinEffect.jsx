import React, { useEffect, useState } from 'react'

function FetchinEffect() {
    const [data, setData] = useState([])
    useEffect(() => {
        async function getData() {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')

            const data = await response.json()

            if (data && data.length) setData(data)

        }
        getData()
    }, [])
    return (
        <div>
            <h1>Data</h1>
            {data.map(({ id, title, body }) => (
                <div key={id}>
                    <h2>{title}</h2>
                    <p>{body}</p>
                </div>

            ))}
        </div>
    )
}

export default FetchinEffect