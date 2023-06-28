import{ Box,FormControl,FormControlLabel,FormLabel,Checkbox,FormGroup} from '@mui/material';
import{useState} from 'react';

function MuiCheckbox() {
    const[active,setActive]=useState<boolean>(false)
    const[skills,setSkills]=useState<string[]>([]);
    console.log(skills)
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>) =>{
        setActive(e.target.checked)
    }

    const handleSkills=(e:React.ChangeEvent<HTMLInputElement>) =>{
         let index= skills.indexOf(e.target.value)
         if(index===-1){
          setSkills([...skills,e.target.value])
         }
         else{
          setSkills(skills.filter((skill) =>skill!==e.target.value))
         }
    }

  return (
    <Box>     
<Box>
    <FormControlLabel control={<Checkbox checked={active} onChange={handleChange}/>} label='Active' /> 
</Box>
     <Box>
     <FormControl >
    <FormLabel> Skills:</FormLabel>
    <FormGroup row>
    <FormControlLabel control={<Checkbox value='React-Typescript' checked={skills.includes('React-Typescript')}
    onChange={handleSkills} />}  label='React-Typescript' /> 
    <FormControlLabel control={<Checkbox value='Go-lang'checked={skills.includes('Go-lang')} 
    onChange={handleSkills}/>}
      label='Go-lang' /> 
    <FormControlLabel control={<Checkbox value='Material-UI' checked={skills.includes('Material-UI')}
     onChange={handleSkills}/>}
      label='Material-UI' /> 

    </FormGroup>
   </FormControl>
     </Box>
  

</Box>
  )
}

export default MuiCheckbox
