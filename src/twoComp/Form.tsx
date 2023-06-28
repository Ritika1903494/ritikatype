import React from 'react'
import{useState} from 'react';
import { useDispatch } from 'react-redux/es/exports';
import{Submit} from '../redux/action/action';
import{Edit} from '../redux/action/action';
import '../style.css';
import Store from '../Store';
import ShowData from './ShowData';
import{Stack,TextField,Button}from '@mui/material';



const Form = () => {
    const dispatch=useDispatch();
    const[id,setId]= useState<number>(0);
    const [username , setName] = useState<string>('');
    const [email , setEmail] = useState<string>('');
    const [password , setPassword] = useState<string>('');
    const [confirmpassword, setConfPassword] = useState<string>('');
    const [common, setCommon] = useState<string>('');
    
    
    const handleNameChange =(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setName(e.target.value);
      }
     
      const handleEmailChange =(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setEmail(e.target.value);
      }
       
      const handlePasswordChange =(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setPassword(e.target.value);
      }
       
      const handleConfirmPasswordChange =(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setConfPassword(e.target.value);
      }
     
    const handleEdit=(email:string)=>{
      console.log(email)
      dispatch(Edit(email))
      const data=Store.getState().submitreducer.data
      console.log(data)
      setName(data.username);
        setEmail(data.email);
        setPassword(data.password);
        setConfPassword(data.confirmpassword);
    }
 
    const handleSubmit = (e:any)=> {
        e.preventDefault()
        setId(id+1)
        dispatch(Submit({id,username,email,password,confirmpassword}))
        setName('');
        setEmail('');
        setPassword('');
        setConfPassword('');
        setCommon('');
        const error=Store.getState().submitreducer.error
         console.log(error)
        if(error){
          setCommon(error)
        }
        
      };
    
  return (
   <Stack spacing={4} direction='row' className="formmain">
                <Stack spacing={4} className="formmain" >
                <h2>Fill Form...</h2>
                <form id="main" >
                <TextField className="input" label='Enter Name' type='text' variant='outlined' color='primary' 
                value={username}  onChange= {(e) =>{handleNameChange(e)}}/>
                <TextField className="input" label='Fill Email' type='text'variant='outlined' color='primary'  
                 value={email}  onChange= {(e) =>{handleEmailChange(e)}}/>
                 <TextField className="input" label='Fill Password' type='password' variant='outlined' color='primary'   
                value={password} onChange= {(e) =>{ handlePasswordChange(e)}}/>
                <TextField className="input" label='Confirm Password' type='password' variant='outlined' color='primary'   
                value={confirmpassword} onChange= {(e) =>{handleConfirmPasswordChange(e)}}/>
                <Button className="but"variant='contained' color='primary' size='large'
                 onClick={(e:any)=>handleSubmit(e)}>Submit</Button>
                </form>
                {common && common.length &&(<span style={{color: "red" ,fontSize:'20px', margin:'50px'}}>{common}</span>)}
                </Stack>
          
                
                
        

        <ShowData   handleEdit={handleEdit}/>

  </Stack>

  )
}

export default Form;
