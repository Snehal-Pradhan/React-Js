import React from 'react'
import { Data, Data1 } from './ContextOne'

function ContextTwo() {
    return (
        <div>
            <Data.Consumer>
                {(name) => (
                    <Data1.Consumer>
                        {(age) => (
                            <h1>
                                my name is {name} and i am {age}
                            </h1>

                        )}

                    </Data1.Consumer>

                )}

            </Data.Consumer>
        </div>
    )
}

export default ContextTwo