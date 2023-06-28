import React from 'react';

type countProps={
    count:number;
    text:string;
}

function Count({text,count}:countProps){
    console.log(`rendering the  ${text}`)
    return (
        <>
        {text}-{count}<br/>
        </>
    )
}
export default React.memo(Count);