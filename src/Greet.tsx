import { readConfigFile } from 'typescript';
import './style.css';

type greetProps={
    title:string;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    click: () => void;
}

export const Greet= (props:greetProps) =>{
    return(
        <div>
           <h1>Welcome to {props.title}</h1>
           <button id="but" onClick={props.click}>Click</button>
           <h2>count={localStorage.getItem('counter')}</h2>
        </div>
        
    )
    
}

