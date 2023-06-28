 
import{useEffect, useReducer} from 'react';
const initialstate={
    loading:true,
    data:{},
    error:''
    }

    type initialstateprops= {
        loading: boolean;
        data:{};
        error:string
    }

    type actionprops =
   |{ type: "success"; payload:{} }
   | { type: "failure"; payload: string };

 
 const reducer=(state:initialstateprops,action:actionprops) =>{
    switch(action.type){
       case 'success':
        return ({
             data:action.payload,
             error:'',
             loading:false
        })

        case 'failure':
            return ({
                data:{},
                error:action.payload,
                loading:true
            })

        default:
            return(state)
    }
 }
export const Usereducerfetch=() =>{
    const[state,dispatch]=useReducer(reducer,initialstate);
   
      useEffect(() =>{
        const promise = fetch("http://localhost:3004/users");
        promise.then((response)=> {
            console.log(response.status);
            if (response.status === 200) {
                return response.json();
            }
        })
            .then ((data) =>{
            const jsonData = data;
            console.log(jsonData)
            dispatch({type:'success',payload:jsonData})
        })
            .catch((error) =>{
                console.log("2222")
                console.log(error)
                dispatch({type:'failure',payload:"Failed to fetch !"})
        });
        
      },[]);

 return(
    <>
   
         {state.loading ?(state.error):(Object.values(state.data).map((item:any)=> (
         <div>
                  First Name=  {item.firstName}<br/>
                   Last Name  {item.lastName}<br/>
                   Email=  {item.email}<br/>
                    Age= {item.age}<br/>
                    Course= {item.course}<br/>
                    Price {item.price}<br/>
                   Time = {item.time}<br/>
                    Query= {item.query}<br/>
                    Id= {item.id}<br/><br/>            
         </div>
        )))};
    </>     
 )
}