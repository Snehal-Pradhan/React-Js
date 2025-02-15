import React, { useContext } from 'react';
import { Data, Data1 } from './ContextOne';

function UseContext() {
    const userName = useContext(Data);
    const userAge = useContext(Data1);

    return (
        <div>
            My name is {userName} and I am {userAge} years old.
        </div>
    );
}

export default UseContext;
