type headingProps={
    children: string; 
}

export const Heading =(props:headingProps) =>{
  return (
    <div><h1>{props.children}</h1></div>
  )

}