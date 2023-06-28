
import {Greet} from './Greet';
import{Fields} from './Fields';
import{useState} from 'react';
import{Heading} from'./Heading';
import{Place} from './Place';
import{SignIn} from './SignIn';
import{UseReducer} from './UseReducer';
import{Usereducerfetch} from './Usereducerfetch';
import { useNavigate} from "react-router-dom";
import {Routes,Route} from'react-router-dom';
import Usecallback from './Usecallback';
import UseMemo from './UseMemo';
import { MuiTypography } from './MUICom/MuiTypography';
import MuiButton from './MUICom/MuiButton';
import{MuiTextfield} from'./MUICom/MuiTextfield';
import MuiSelect from './MUICom/MuiSelect';
import MuiRadio from './MUICom/MuiRadio';
import MuiCheckbox from './MUICom/MuiCheckbox';
import MuiRating from './MUICom/MuiRating';
import { MuiAuto } from './MUICom/MuiAuto';
import MuiAccordian from './MUICom/MuiAccordian';
import MuiImage from './MUICom/MuiImage';
import Main_container from './SinglePage/Main_container';
import Clothes from './SinglePage/Clothes';
import Grocery from './SinglePage/Grocery';
import Electronic from './SinglePage/Electronic';
import Home from "./SinglePage/Home";
import All from './SinglePage/All';
import Action from './SinglePage/Action';
import Action2 from './SinglePage/Action2';
import Show from './Show';
import Form from './twoComp/Form';

function App() {
  const[count,setCount]=useState<number>(0);
  const [email , setEmail] = useState<string>('');
  const [password , setPassword] = useState<string>('');
  const[common,setCommon]=useState<string>('');
  let navigate = useNavigate(); 
  const routeChange = () =>{
  let path = `/Fields`; 
  navigate(path);
}
  const click=() =>{
        const data= localStorage.getItem('counter');
        const num = data!== null ? (JSON.parse(data)):(console.log("empty"))
        const count=num+1;  
        console.log("button clicked "+count) 
        localStorage.setItem('counter',JSON.stringify(count));
        setCount(count);
  }

  const handleEmailChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setEmail(e.target.value);
  }
   
  const handlePasswordChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setPassword(e.target.value);
  }

  const handleSubmit = async(e:any)=> {
      e.preventDefault();
      const response = await fetch("http://localhost:3000/SignUp");
       const jsonData = await  response.json();
      console.log(typeof response);
      if(jsonData){
          jsonData.map((item:any) => {
            if(email===item.email){
                if(password===item.password){
                  routeChange();
                }
                else{
                  setCommon("User is Invalid !");
                }
            } 
    })}
    else{
      setCommon("User is Invalid !");
    }
  
  };

  return (
    <div className="App">
{/* 
         <Routes>
          <Route path="/" element={ <SignIn email={email} label1="Email:" label2="Password:"password={password} handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange} common={common} handleSubmit={handleSubmit}/> }/> 
          <Route path="/Fields" element={ <Fields type1="text"  type2="email" type3="password" />}/>
          <Route path="/Greet" element={<Greet title="React-Typescript" setCount={setCount}  click={click}/>}/>
        </Routes> */}
        {/* <UseReducer/>
        <Usereducerfetch/>
        <Usecallback/> */}
        {/* <UseMemo/> */}

        {/* <MuiTypography/> */}
        {/* <MuiButton/> */}
        {/* <MuiTextfield/> */}
        {/* <MuiSelect/> */}
        {/* <MuiRadio/>
        <MuiCheckbox/> */}
        {/* <MuiRating/>
        <MuiAuto/>
        // <MuiAccordian/> */}
         {/* <MuiImage/> */}
         {/* <Place><Heading>Child of Place component </Heading></Place> */}
         <Routes>
         <Route path="/" element={<Home/> }/>
         <Route path="/Shop" element={<All/>}/>
          <Route path="/Main" element={<Main_container/>}>
          <Route path="/Main/Clothes" element={<Clothes/>}/>
          <Route path="/Main/Action/:id" element={<Action/>}/>
          <Route path="/Main/Action2/:id" element={<Action2/>}/>
          <Route path="/Main/Grocery" element={<Grocery/>}/> 
          <Route path="/Main/Electronic" element={<Electronic/>}/> 
        </Route>  
        </Routes>


          {/* <Routes>
          <Route path="/" element={ <Form/>}/>
        </Routes> */}
    </div>
  )

  }
export default App;
