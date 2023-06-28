import{TextField,  Stack,InputAdornment} from '@mui/material';
import{useState} from 'react';
export const MuiTextfield=() =>{
    const[pass,setValues]=useState('')
  return (
    <Stack spacing={2} direction='row' margin='10px'>
        <TextField label='Fill Email' type='email' variant='outlined' color='secondary'/>
        <TextField label='Fill Name' type='text'variant='filled' color='secondary' 
        InputProps={{readOnly:true}}/>
        <TextField label='Fill Password' type='password' variant='standard' color='secondary' 
        value={pass}
        onChange={(e) =>{setValues(e.target.value)}}
        error={!pass}
         helperText={!pass?'required !':'Please dont share password with anybody'}
          required
        />

        <TextField label="amount" InputProps={{
            startAdornment:<InputAdornment position='start'>$</InputAdornment>
        }}/>

<TextField label="Weight" InputProps={{
            endAdornment:<InputAdornment position='end'>Kg</InputAdornment>
        }}/>

    </Stack>
  )

  }   