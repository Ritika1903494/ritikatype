type user={
    id:number;
    username:string;
    email:string;
    password:string;
    confirmpassword:string;
    
  }
  type payloadtype={
    id:number;
    username:string;
    email:string;
    password:string;
    confirmpassword:string;
}

 
 
 type initialstateprops= {
   Users:user[];
   error?:string;
   data?:any;
 }

 type actionprops =
     |{ type: "Add_Submit"; payload:payloadtype }
     |{ type: "Edit_data"; payload: number };
    
 
 const initialstate:initialstateprops={
    Users:[],
    error:"",
    data:{}
    }
 
 export const submitreducer=(state=initialstate,action:actionprops) =>{
     switch(action.type){
        case 'Add_Submit':
            if(action.payload.password!==action.payload.confirmpassword){
                return{   
                    Users:[...state.Users],
                   error:"Password do not match !"
                }
            }
            if(action.payload.email===state.data.email){
                return {    
                    ...state,    
                    Users: state.Users.map((item:any) => item.email === action.payload.email ? 
                    {...item,
                     username : action.payload.username ,  
                    email: action.payload.email,
                    password : action.payload.password,
                    confirmpassword : action.payload.confirmpassword} : item)    
                }
            }
             
                return{
                    ...state,
                    Users:[...state.Users,action.payload],
                    error:""
                }

        case 'Edit_data':
           console.log(action.payload)
           const temp=state.Users.find((item:any)=>{
            console.log(item.email)
            return(item.email===action.payload)})
           console.log(temp)
           return{
            ...state,
            data:temp
           }
                   
         default:
             return(state)
     }
    }