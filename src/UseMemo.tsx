import React, { useState,useMemo } from 'react'

function UseMemo() {
    const[counterone,setCounterOne]=useState<number>(0);
    const[countertwo,setCounterTwo]=useState<number>(0);

    const increaseOne=() =>{
        setCounterOne(counterone+1)
    }

    const increaseTwo=() =>{
        setCounterTwo(countertwo+1)
    }

    /** isEven act as a variable now */
    const isEven=useMemo(():boolean =>{
        let i:number=0;
     while(i<2000000000){
         i++
     }
     if(counterone%2===0){
         return true;
     }
     return false;},[counterone] )
  return (
    <div>
      <button onClick={increaseOne}>Counter1-{counterone}</button>
      {isEven?"Even":"Odd"}
      <button onClick={increaseTwo}>Counter2-{countertwo}</button>

    </div>
  )
}

export default UseMemo;
