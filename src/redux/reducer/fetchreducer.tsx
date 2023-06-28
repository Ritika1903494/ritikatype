
 
 type initialstateprops= {
    loading:boolean;
     Data:[];
    error:string;

 }
 
 const initialstate:initialstateprops={
      loading:true,
      Data:[],
      error:""
    }
 
  
 type actionprops =
 | { type: "Fetch_Users_Req" }
 | { type: "Fetch_Users_Success"; payload:[]}
 | { type: "Fetch_Users_Failure"; payload:string};
 
 export const fetchreducer=(state=initialstate,action:actionprops) =>{
     switch(action.type){
       case "Fetch_Users_Req":
        return{
            ...state,
            loading:true
        }

        case "Fetch_Users_Success":
            return{
                loading:false,
                Data:action.payload,
                error:""
            }

        case "Fetch_Users_Failure":
            return{
                loading:false,
                Data:[],
                error:action.payload
            }

            
        default:
         return(state)
     }
    }