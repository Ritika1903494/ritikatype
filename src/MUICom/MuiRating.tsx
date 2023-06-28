import{  Stack,Rating} from '@mui/material';
import{useState} from 'react';

export default function MuiRating() {
    const[num,setNum]=useState<number|null>(null)
    console.log(num)
    const handleNum=(e:React.ChangeEvent<{}>,newValue:number|null) =>{
        setNum(newValue)
    }
  return (
        <Stack spacing={4}>
           <Rating precision={0.5}
           value={num}
           onChange={handleNum}
           size='large'
          //  readOnly
           highlightSelectedOnly/>
        </Stack>
  )
}
