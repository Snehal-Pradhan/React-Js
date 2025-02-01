import React from 'react'

function Weather({ temperature }) {
    return (
        <>
            <h2>Today's Temperature : {temperature}</h2>
            {temperature < 15 && <p>It's cold outside.</p>}
            {temperature >= 15 && temperature <= 25 && <p>It's nice outside.</p>}
            {temperature >= 25 && <p>It's hot outside.</p>}

        </>

    )
}

export default Weather