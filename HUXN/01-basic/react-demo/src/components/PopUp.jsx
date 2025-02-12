import React from 'react'
import { createPortal } from 'react-dom'

function PopUp({ copy }) {
    return createPortal(
        <div>
            {copy && (
                <div style={{ color: "blue" }}>
                    copied to clipboard
                </div>
            )}
        </div>,
        document.querySelector("#popUp")
    )
}

export default PopUp