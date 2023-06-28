import './style.css';
type signProps={
    email:string;
    password:string;
    common:string;
    label1:string;
    label2:string;
    handleEmailChange:(e:React.ChangeEvent<HTMLInputElement>)=>void;
    handlePasswordChange:(e:React.ChangeEvent<HTMLInputElement>)=>void;
    handleSubmit:(e:any) =>void;
}


export const SignIn=(props:signProps) =>{
  
 return(
<>
    <div id="wrapper">
            <h2>Sign In...</h2>
          <form id="main1" onSubmit={props.handleSubmit}>
            <label>{props.label1}</label>
            <input type="email" placeholder="Enter Email" value={props.email} onChange={props.handleEmailChange}/>
            <label>{props.label2}</label>
            <input type="password" placeholder="Enter Password" value={props.password} onChange={props.handlePasswordChange}/>
            <button id ="but">Sign In</button>
          </form>
          {props.common && props.common.length && (<span style={{color: "red" ,fontSize:'20px', margin:'10px'}}>{props.common}</span>)}
    </div>
</>
    
 )

}