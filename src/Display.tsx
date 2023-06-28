import{useState} from 'react';

type displayProps={
    username:string;
    email:string;
    password:string;

}

export const Display=(props :displayProps) =>{
    const [users, setUsers] = useState([
        {
          username:props.username,
          email:props.email,
          password:props.password
        }
      ]);

return(
    <>
        <div id="display">
                 <h1>Display Box</h1>
                <div id="dischild">
                     {users && users.length && (
      <> 
                     {users.map((item) => {
                       return (
                        <div>
                          username= {item.username}<br/>
                           email={item.email}<br/>
                          password= {item.password}
                        </div>
                              
                           ) }
                         )}
      </>
    )}

                    
                </div>
                
        </div>
  
    </>
)
}