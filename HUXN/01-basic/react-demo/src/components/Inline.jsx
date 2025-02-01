import React from 'react'

function Inline() {
    const styles = {
        color: "red", backgroundColor: "grey", padding: "2rem"
    }
    return (
        <>
            <section>
                <h2 style={styles}>Inline text</h2>
            </section>
        </>
    )
}

export default Inline