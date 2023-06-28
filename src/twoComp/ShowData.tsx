import { useDispatch } from 'react-redux/es/exports';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import{Button}from '@mui/material';

type showprops={
  handleEdit:(email:string) =>void;
}
const ShowData = ({handleEdit}:showprops) => {
  const Users=useSelector((state:any)=>state.submitreducer.Users);
    console.log(Users)
  return (
    <>
    <div className="showtable">
    <h1>Users Details:-</h1>
    <Table striped bordered hover variant="bright" id ="table">
   <thead>
      <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Email</th>
        <th>Password</th>
        <th>Action</th>
        </tr>
      </thead>
      <tbody>
    {Users && Users.length && (
      <> 
        {Users.map((item:any) => {
            return ( 
              <tr>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td><Button className="but"variant='contained' color='success' size='large' disableRipple
                onClick={()=>handleEdit(item.email)}>Edit</Button></td>
              </tr>
            )
          }
          )}
      </>
    )}
    </tbody>
    </Table>
    </div>
    

    </>
  )
}

export default ShowData;