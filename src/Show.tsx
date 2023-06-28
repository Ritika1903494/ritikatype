
import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import {Main_fetch} from './redux/action/action';
import Table from 'react-bootstrap/Table';

const Show = () => {
    const dispatch=useDispatch();
    const Users=useSelector((state:any)=>state.fetchreducer.Data);
    console.log(Users)
    // useEffect(()=>{
    //    dispatch(Main_fetch())
    // },[])
  return (
    <>
    <Table striped bordered hover variant="bright" id ="table">
   <thead>
      <tr>
        <th>Index</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Age</th>
        <th>Course</th>
        <th>Price</th>
        <th>End Time</th>
        <th>Query</th>
        </tr>
      </thead>
      <tbody>
    {Users && Users.length && (
      <> 
        {Users.map((item:any,index:number) => {
            return (
              
              <tr>
                <td>{index}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.age}</td>
                <td>{item.course}</td>
                <td>{item.price}</td>
                <td>{item.time}</td>
                <td>{item.query}</td>
              </tr>
            )
          }
          )}
      </>
    )}
    </tbody>
    </Table>

    </>
  )
}

export default Show;
