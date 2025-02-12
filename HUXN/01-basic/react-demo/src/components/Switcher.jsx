import React, { useState } from 'react'

function Switcher() {
    const [sw, setSw] = useState(false)
    return (

        <div>
            {sw ? <span>Light</span> : <span>Dark</span>}
            <br />
            <input placeholder={sw ? "Light" : "dark"} key={sw ? "Light" : "dark"} />
            <button onClick={() => setSw(!sw)}>Switch</button>
        </div>
    )
}

export default Switcher