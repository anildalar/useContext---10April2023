import React, { useContext } from 'react'
import { MyContext } from '../index';

export default function Z() {
    //2.1 Hooks area
    const myinfo = useContext(MyContext);



    //2.2


    //2.3 Return statement
    return (
        <>
            {console.log(myinfo)}
            <h1>Z Component {myinfo.name}</h1>
        </>
    )
}
