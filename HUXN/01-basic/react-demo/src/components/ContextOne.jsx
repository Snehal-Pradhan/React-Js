import React from 'react'
import { createContext } from 'react'
import ContextTwo from './ContextTwo';
export const Data = createContext(null);
export const Data1 = createContext(null);
function ContextOne() {
    const name = 'somu';
    const age = 19
    return (
        <div>
            <Data.Provider value={name}>
                <Data1.Provider value={age}>
                    <ContextTwo />
                </Data1.Provider>
            </Data.Provider>
        </div>
    )
}

export default ContextOne