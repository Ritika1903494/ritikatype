import './style.css';
import { Display } from './Display';
import{useState} from 'react';
type fieldProps={
    type1:string;
    type2:string;
    type3:string;
}

export const Fields=(props:fieldProps) =>{
    const [username , setName] = useState<string>('');
    const [email , setEmail] = useState<string>('');
    const [password , setPassword] = useState<string>('');
    const [confirm, setConfPassword] = useState<string>('');
    const[result,setResult]=useState<boolean>(false);
    const handleNameChange =(e:any)=>{
        setName(e.target.value);
      }
     
      const handleEmailChange =(e:any)=>{
        setEmail(e.target.value);
      }
       
      const handlePasswordChange =(e:any)=>{
        setPassword(e.target.value);
      }
       
      const handleConfirmPasswordChange =(e:any)=>{
        setConfPassword(e.target.value);
      }
 
    const handleSubmit = (e:any)=> {
      console.log("222")
        e.preventDefault();
        if(password===confirm){
           setResult(true);
           console.log(result)
        } 
        else{
           setResult(false)
           console.log(result)
          // alert("password do not matched ")
        }
      };
    
    return (
        <>
            <div id="wrapper">
                <h2>Fill Form...</h2>
                <form id="main" onSubmit={(e:any)=>{handleSubmit(e)}} >
                    <input type={props.type1} name="username" placeholder="Enter UserName" 
                    value={username}  onChange= {(e) =>{handleNameChange(e)}} required/>
                    <input type={props.type2} name="email" placeholder="Enter Email"
                    value={email}  onChange= {(e) =>{handleEmailChange(e)}} required/>
                    <input type={props.type3} name="password" placeholder="Enter password"
                     value={password} onChange= {(e) =>{ handlePasswordChange(e)}} required/>
                    <input type="password" name="confirm" placeholder="Confirm password"
                     value={confirm} onChange= {(e) =>{handleConfirmPasswordChange(e)}} required/>
                    <button id="but">Submit</button>
                </form>
            </div>
          {(result && result==true &&
          <Display username={username} email={email} password={password}/>)}
 
            
        
        </>
    )
}