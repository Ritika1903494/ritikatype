import{Button,Stack,IconButton,ButtonGroup,ToggleButtonGroup,ToggleButton} from '@mui/material';
import{useState} from 'react';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldRoundedIcon from '@mui/icons-material/FormatBoldRounded';
import FormatItalicRoundedIcon from '@mui/icons-material/FormatItalicRounded';
import FormatUnderlinedRoundedIcon from '@mui/icons-material/FormatUnderlinedRounded';

function MuiButton() {
    const[values,setValue]=useState<string[]|null>(null)
    const handleChange=(event: React.MouseEvent<HTMLElement>,data:string[]) =>{
        setValue(data)
    }
  return (
    <div>
          <Stack spacing={2} direction='row' margin='10px'>
    <Button variant='text' size='small'>Text</Button>
    <Button variant='contained' size='small'>Contained</Button>
    <Button variant='outlined' size='small'>Outlined</Button>
   </Stack>
   <Stack spacing={2} direction='row' margin='10px'>
    <Button variant='contained' color='primary'>Text</Button>
    <Button variant='outlined' color='secondary'>Text</Button>
    <Button variant='contained' color='error'>Text</Button>
    <Button variant='contained' color='warning'>Text</Button>
    <Button variant='contained' color='info'>Text</Button>
    <Button variant='contained' color='success'>Text</Button>
   </Stack>

   <Stack spacing={2} direction='row' margin='10px'>
    <Button variant='contained' startIcon={<SendIcon/>} size='small' disableRipple> Send</Button>
    <Button variant='contained' endIcon={<SendIcon/>} size='medium'> Send</Button>
    <IconButton aria-label='send' color='success'><SendIcon/></IconButton>
   </Stack>

   <ButtonGroup variant='outlined' orientation='vertical'  color='primary'>
    <Button  onClick={() =>{alert("hlo i am top")}} >Top</Button>
    <Button onClick={() =>{alert("hlo i am left")}} >Left</Button>
    <Button onClick={() =>{alert("hlo i am right")}} >Right</Button> 
    <Button onClick={() =>{alert("hlo i am Bottom")}} >Bottom</Button> 
   </ButtonGroup>

   <ToggleButtonGroup value={values} onChange={handleChange} aria-label='group'>
    <ToggleButton value='bold' aria-label='bold'><FormatBoldRoundedIcon/></ToggleButton>
    <ToggleButton value='italic' aria-label='italic'><FormatItalicRoundedIcon/></ToggleButton>
    <ToggleButton value='underline' aria-label='underline'><FormatUnderlinedRoundedIcon /></ToggleButton>
   </ToggleButtonGroup>
    </div>
   
  )
}


export default MuiButton;
