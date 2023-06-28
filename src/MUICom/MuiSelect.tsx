
import{TextField,  Box,MenuItem} from '@mui/material';
import{useState} from 'react';
function MuiSelect() {
  const[roles,setRoles]=useState<string[]>([]);
     console.log(roles)
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>) =>{
     let data=e.target.value;
      setRoles(typeof data==='string'? data.split(',') :data)
  }
  return (
     <Box width='500px'>
        <TextField label="Select Role"color='primary' size='medium'
           value={roles}
           onChange={handleChange}
            SelectProps={{
            multiple:true,
         }}
         fullWidth 
         select>
            <MenuItem value="Web Dev">Web Developer</MenuItem>
            <MenuItem value="Java Dev">Java Developer</MenuItem>
            <MenuItem value="Automation">Automation</MenuItem>
            <MenuItem value="HR">Human Resources</MenuItem>
        </TextField>
     </Box>
  )
}

export default MuiSelect
