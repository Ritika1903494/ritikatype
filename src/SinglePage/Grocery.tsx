import React from 'react'
import '../style.css';
import{Grid,Card,CardContent,CardActions,CardMedia,Typography,Button}from '@mui/material';
import {useNavigate} from "react-router-dom";
const Grocery = () => {
  let id:string;
  let navigate = useNavigate();
  const ChangeRoute3 = () =>{ 
  let path = `/Main/Action/${id}`; 
  navigate(path);
}
  return (
        <Grid container my={1} rowSpacing={10} sx={{ mx:7 }}>
          <Grid item xs={3}>
          <Card className='maincard'>
            <CardMedia
            id="card"
            component='img'
            image="../oil1.jpg"
            alt="oil"/>
            <CardContent className="MuiCardContent">
              <Typography variant='subtitle2' component='div'>
                Fortune Sunlite Refined Oil
              </Typography>
            </CardContent>
            <CardActions className="MuiCardActions">
              <Button variant='contained' disableRipple  onClick={() =>{
            id="9"
            ChangeRoute3()
            }}>Buy</Button>
            </CardActions>
          </Card>
          </Grid>
          <Grid item xs={3}>
          <Card className='maincard'>
            <CardMedia
            id="card"
            component='img'
            image="../rice1.jpg"
            alt="rice"/>
            <CardContent className="MuiCardContent">
              <Typography variant='subtitle2' component='div'>
              Daawat Basamti Rice 
              </Typography>
            </CardContent>
            <CardActions className="MuiCardActions">
              <Button variant='contained' disableRipple  onClick={() =>{
            id="10"
            ChangeRoute3()
            }}>Buy</Button>
            </CardActions>
          </Card>
          </Grid>
          <Grid item xs={3}>
          <Card className='maincard'>
            <CardMedia
            id="card"
            component='img'
            image="../tea1.jpg"
            alt="tea"/>
            <CardContent className="MuiCardContent">
              <Typography variant='subtitle2' component='div'>
              Tata Tea Permium
              </Typography>
            </CardContent>
            <CardActions className="MuiCardActions">
              <Button variant='contained' disableRipple  onClick={() =>{
            id="11"
            ChangeRoute3()
            }}>Buy</Button>
            </CardActions>
          </Card>
          </Grid>
            <Grid item xs={3}>
            <Card className='maincard'>
            <CardMedia 
            id="card"
            component='img'
            image="../maggi1.webp"
            alt="maggi"/>
            <CardContent className="MuiCardContent">
              <Typography variant='subtitle2' component='div'>
              Maggi 2-minute Instant Noodles
              </Typography>
            </CardContent>
            <CardActions className="MuiCardActions">
              <Button variant='contained' disableRipple  onClick={() =>{
            id="12"
            ChangeRoute3()
            }}>Buy</Button>
            </CardActions>
          </Card>
          </Grid>
          <Grid item  xs={3}>
          <Card className='maincard'>
            <CardMedia
            id="card"
            component='img'
            image="../ketchup1.jpg"
            alt="ketchup"/>
            <CardContent className="MuiCardContent">
              <Typography variant='subtitle2' component='div'>
              Del Monte Tomato ketchup
              </Typography>
            </CardContent>
            <CardActions className="MuiCardActions">
              <Button variant='contained' disableRipple  onClick={() =>{
            id="13"
            ChangeRoute3()
            }}>Buy</Button>
            </CardActions>
          </Card>
          </Grid>
           <Grid item xs={3}>
           <Card className='maincard'>
            <CardMedia
            id="card"
            component='img'
            image="../biscuits1.jpg"
            alt="biscuits"/>
            <CardContent className="MuiCardContent">
              <Typography variant='subtitle2' component='div'>
                Cadbury Oreo Vanilla flavour Biscuit
              </Typography>
            </CardContent>
            <CardActions className="MuiCardActions">
              <Button variant='contained' disableRipple  onClick={() =>{
            id="14"
            ChangeRoute3()
            }}>Buy</Button>
            </CardActions>
          </Card>
           </Grid>
           <Grid item xs={3}>
           <Card className='maincard'>
            <CardMedia
            id="card"
            component='img'
            image="../coffee1.jpg"
            alt="coffee"/>
            <CardContent className="MuiCardContent">
              <Typography variant='subtitle2' component='div'>
              Freshly Roasted Coffee Beans
              </Typography>
            </CardContent>
            <CardActions className="MuiCardActions">
              <Button variant='contained' disableRipple  onClick={() =>{
            id="15"
            ChangeRoute3()
            }}>Buy</Button>
            </CardActions>
          </Card>
           </Grid>
           <Grid item xs={3}>
           <Card className='maincard'>
            <CardMedia
            id="card"
            component='img'
            image="../oats1.jpg"
            alt="oats"/>
            <CardContent className="MuiCardContent">
              <Typography variant='subtitle2' component='div'>
              Quaker Oats|Rolled Oats
              </Typography>
            </CardContent>
            <CardActions className="MuiCardActions">
              <Button variant='contained' disableRipple  onClick={() =>{
            id="16"
            ChangeRoute3()
            }}>Buy</Button>
            </CardActions>
          </Card>
           </Grid>
        </Grid>
      
      )
    }

export default Grocery;