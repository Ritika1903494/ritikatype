type itemtype={
    id?:number;
    username:string;
    email:string;
    password:string;
    confirmpassword:string;
}


export const Add=(item:any)=>{
    return{
        type:"Add_Cart",
        payload:item
    }
}


export const Remove=(id:string)=>{
    return{
        type:"Remove_product",
        payload:id
    }
}


export const Fetch=() =>{
    return{
        type:"Fetch_Users_Req"
    }
}

export const Fetch_Data=(users:any) =>{
    return{
        type:"Fetch_Users_Success",
        payload:users
    }
}

export const Submit=(item:itemtype)=>{
    return{
        type:"Add_Submit",
        payload:item
    }
}

export const Edit=(email:string)=>{
    console.log(email)
    return{
        type:'Edit_data',
        payload:email
    }
}

export const Fetch_Failure=(error:string) =>{
    return{
        type:"Fetch_Users_Failure",
        payload:error
    }
}


export const Main_fetch=() =>{
    return  function(dispatch:any){
        dispatch(Fetch());
           
      let promise =   fetch("http://localhost:3004/users");
      promise.then((response) => {
        console.log("111")
        console.log(response.status)
        if(response.status===200){
            console.log("aaa")
           return response.json()
        }
       })
      .then((data:any) => {
        console.log("@22")
        dispatch( Fetch_Data(data));
      })
     .catch((error:string) => {
        dispatch(Fetch_Failure(error));
     });   

    }
}