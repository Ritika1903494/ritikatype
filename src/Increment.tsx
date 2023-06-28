import React from 'react';
type incrementProps={
    onChangeFun:() =>void;
    children: string; 
}


function Increment({onChangeFun,children}:incrementProps){
    console.log(`rendering the  ${children}`)
    return(
        <>
         <button onClick={onChangeFun}>{children}</button><br/>
        </>
    )


}
export default React.memo(Increment);