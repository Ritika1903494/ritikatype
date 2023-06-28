import{useReducer} from 'react';
const initialstate={
    count:0
}
type initialstateprops={
    count:number;
}
type actionprops={
    type:'increment'|'decrement'|'reset';
}
 const reducer=(state:initialstateprops,action:actionprops) =>{
    switch(action.type){
       case 'increment':
        return({count:state.count+1})
        case 'decrement':
            return({count:state.count-1})
            case 'reset':
                return(initialstate)
               default:
                    return(state)
    }
 }
export const UseReducer=() =>{
    const[state,dispatch]=useReducer(reducer,initialstate);
 return(
    <>
    <h3>Count -{state.count}</h3>
    <button onClick={()=>{dispatch({type:'increment'})}}>Increment</button>
     <button onClick={()=>{dispatch({type:'decrement'})}}>Decrement</button>
     <button onClick={()=>{dispatch({type:'reset'})}}>Reset</button>
    </>
     
 )
}