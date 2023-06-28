
import{ Box,FormControl,FormControlLabel,FormLabel,RadioGroup,Radio} from '@mui/material';
import{useState} from 'react';

function MuiRadio() {
  const[values,setValues]=useState<string>('');
  console.log(values)
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>) =>{
        setValues(e.target.value)
  }
  return (
    <Box>
      <FormControl>
        <FormLabel id='profession'>
          Profession
        </FormLabel>
        <RadioGroup aria-labelledby='profession' value={values} onChange={handleChange} >
           <FormControlLabel control={<Radio/>} label='Web Developer' value='Web Developer'/>
           <FormControlLabel control={<Radio/>} label='Automation' value='Automation'/>
           <FormControlLabel control={<Radio/>} label='Android' value='Android'/>
           <FormControlLabel control={<Radio/>} label='Java Developer' value='Java Developer'/>
        </RadioGroup>
      </FormControl>
    </Box>
  )
}

export default MuiRadio