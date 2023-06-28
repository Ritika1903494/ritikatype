type placeProps={
    children:React.ReactNode;
}

export const Place=(props:placeProps) =>{
 return(
    <div><h3>{props.children}</h3></div>
 )

}