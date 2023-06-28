import React from 'react'
import ShopIcon from '@mui/icons-material/Shop';
import PeopleIcon from '@mui/icons-material/People';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import{AppBar,Toolbar,IconButton,Typography,Stack,Button,Menu,MenuItem,Badge} from'@mui/material';
import{useState} from 'react';
import {useNavigate} from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux'

const Navbar = () => {
    const getProduct=useSelector((state:any)=>state.reducer.cartData);
    console.log(getProduct)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

 let navigate = useNavigate();
 
  const ChangeRoute = () =>{ 
    setAnchorEl(null);
  let path = `/Main/Clothes`; 
  navigate(path);
}

const ChangeRoute2=() =>{
  setAnchorEl(null);
  let path = `/Main/Grocery`; 
  navigate(path);
}

const ChangeRoute3=() =>{
  setAnchorEl(null);
  let path = `/Main/Electronic`; 
  navigate(path);
}
  return (
<AppBar position='sticky' color='primary'>
    <Toolbar>
        <IconButton size='large' edge='start' aria-label='shop' disableRipple>
            <ShopIcon/>
        </IconButton>
        <Typography variant='h6' component='div' sx={{flexGrow:1}}>
            Shopping
        </Typography>
        <Stack spacing={1} direction='row'>
            <Button 
            color='inherit'
             id="basic-button"
             aria-controls={open ? 'basic-menu' : undefined}
             aria-haspopup="true"
             aria-expanded={open ? 'true' : undefined}
             onClick={handleClick}
             endIcon={ <KeyboardArrowDownIcon/>}
             disableRipple>Products</Button>
            <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
            anchorOrigin={{
                vertical:'bottom',
                horizontal:'right'
            }}
            transformOrigin={{
                vertical:'top',
                horizontal:'right'
            }} >
            <MenuItem onClick={ChangeRoute}>Clothes</MenuItem>
            <MenuItem onClick={ChangeRoute2}>Grocery</MenuItem>
            <MenuItem onClick={ChangeRoute3}>Electronic</MenuItem>
        </Menu>
        <Button 
        color='inherit' 
        endIcon={  <AccountCircleIcon/>}
        disableRipple>Account </Button>
            <Button 
            color='inherit'
            endIcon={<PeopleIcon/>} 
            disableRipple>Users</Button>
        </Stack>
        <IconButton aria-label="cart" size='large'>
        <Badge badgeContent={getProduct.length} color="warning" >
        <ShoppingCartIcon />
        </Badge>
        </IconButton>
    </Toolbar>

</AppBar>
  )
}

export default Navbar
