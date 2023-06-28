import React from 'react'
import Clothes from './Clothes';
import Grocery from './Grocery';
import Electronic from './Electronic';
import Navbar from './Navbar';

const All = () => {

    return(
        <>
         <Navbar/>
        <Clothes/>
        <Grocery/>
        <Electronic/>
        </>
    )
}
 
export default All;