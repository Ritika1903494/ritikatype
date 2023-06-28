import{TextField,Autocomplete,Stack} from '@mui/material';
import React, { useState} from "react";
 
type usertype={
    userName:string;
    email:string;
    password:string;
    id:number
}

export const MuiAuto = () => {
  const users:usertype[]=[
    {
        "userName": "ritika",
        "email": "ritikathakur695@gmail.com",
        "password": "1408",
        "id": 1
      },
      {
        "userName": "tarun kumar",
        "email": "tarun@gmail.com",
        "password": "12345",
        "id": 2
      },
      {
        "userName": "nargisdeep kaur",
        "email": "nargisdeep@gmail.com",
        "password": "65677678",
        "id": 3
      }
]
  const[values,setValues]=useState<string|null>(null);
    console.log({values})
 
  return (
    <Stack spacing={2} width='300px'>
     <Autocomplete
     freeSolo
      options={users.map((user) =>user.email)}
      renderInput={(params) => <TextField {...params} label="Employee" />}
      value={values}
      onChange={(event:any,newValue:string|null) => setValues(newValue)}
    />
    </Stack>
  )
}
