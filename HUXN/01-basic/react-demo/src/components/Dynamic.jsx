import React from 'react'

function Dynamic() {
    const myName = "Somu"
    const classOfElement = "anything-i-want"
    const multiply = (a, b) => { return a * b }
    return (
        <>
            <section className={classOfElement}>
                <p>
                    2 + 2 = {2 + 2}
                </p>
                <h1>
                    {myName}
                </h1>
                <p>
                    4 * 4 = {multiply(4, 4)}
                </p>
            </section>
        </>
    )
}

export default Dynamic