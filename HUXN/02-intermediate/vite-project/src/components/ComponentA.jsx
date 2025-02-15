import React from 'react'
import { Data } from '../App'
import { Data1 } from '../App'

function ComponentA() {
    return (
        <div>
            <Data.Consumer>
                {(name) => (
                    <Data1.Consumer>
                        {(age) => (
                            <h1>My name is {name} and age is {age}</h1>
                        )}
                    </Data1.Consumer>
                )}
            </Data.Consumer>
        </div>
    )
}

export default ComponentA