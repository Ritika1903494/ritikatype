

type data={
   id:string;
   title:string;
   alt:string;
   url1:string;
   url2:string;
   url3?:string;
   price:string;
   price1:number;
   quantity:number;
   rating:number;
   
 }

type initialstateprops= {
  cartData:data[]
}

const initialstate:initialstateprops={
    cartData:[]
   }

 
type actionprops =
|{ type: "Add_Cart"; payload:{} }
| { type: "Remove_product"; payload: actionprops};

export const reducer=(state=initialstate,action:any) =>{
    switch(action.type){
       case 'Add_Cart':
         const index=state.cartData.findIndex((item:any)=>item.id===action.payload.id);
         console.log(index)
         if(index>=0){
          state.cartData[index].quantity+=1
         }
         else{
            const temp={...action.payload,quantity:1}
            return {...state,
               cartData:[...state.cartData,temp]
            }
         }
         return(state)
        case 'Remove_product':
        const data=state.cartData.filter((item:any)=>item.id!==action.payload)
        return{
          ...state,
           cartData:data
        }
   
        default:
            return(state)
    }
   }