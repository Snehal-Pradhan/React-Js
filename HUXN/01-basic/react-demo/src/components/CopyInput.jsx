import React, { useState } from 'react'
import PopUp from './PopUp';

function CopyInput() {
    const [inputValue, setInputValue] = useState("");
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(inputValue).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
        )

    }

    return (
        <>
            <div>
                <input type='text' placeholder='enter text' value={inputValue} onChange={e => setInputValue(e.target.value)} />
            </div>
            <button onClick={handleCopy}>Copy</button>
            <PopUp copy={copied} />
        </>

    )
}

export default CopyInput