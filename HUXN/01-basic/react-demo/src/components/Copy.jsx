import React from 'react'

function Copy() {
    const copy = () => {
        console.log("dont copy this text.")
    }

    return (
        <div onCopy={copy}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quaerat dolor distinctio nisi, ratione incidunt ab quo dolorem quam reiciendis voluptate quibusdam perferendis repellendus. Optio possimus quas sequi similique exercitationem!</div>
    )
}

export default Copy