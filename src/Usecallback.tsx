import { useCallback, useState } from 'react';
import Count from './Count';
import Increment  from './Increment';
function Usecallback() {
    const[age,setAge]=useState<number>(25);
    const[salary,setSalary]=useState<number>(15000);
 
    const increseAge=useCallback(() =>{
        setAge(age+1)
   },[age])
   
    const increseSalary=useCallback(() =>{
        setSalary(salary+1000)
   },[salary])

  return (
    <>
    <div>
      <Count text="age" count={age}/>
      <Increment onChangeFun={increseAge}>IncrementAge</Increment>
      <Count text="salary" count={salary}/>
      <Increment onChangeFun={increseSalary} >IncrementSalary</Increment>
    </div>
    </>
    
  )
}

export default Usecallback;
