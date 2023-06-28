
import '../style.css';
import{Grid,Card,CardContent,CardActions,CardMedia,Typography,Button}from '@mui/material';
import {useNavigate} from "react-router-dom";

const Electronic = () => {
  let id:string;
  let navigate = useNavigate();
  const ChangeRoute2 = () =>{ 
  let path = `/Main/Action2/${id}`; 
  navigate(path);
}
  return (
    <Grid container my={1} rowSpacing={10}  sx={{ mx:7 }}>
      <Grid item xs={3}>
      <Card className='maincard'>
        <CardMedia
        id="card"
        component='img'
        image="../washing1.jpg"
        alt="washing machine"/>
        <CardContent className="MuiCardContent">
          <Typography variant='subtitle2' component='div'>
            LG Washing Machine
          </Typography>
        </CardContent>
        <CardActions className="MuiCardActions">
          <Button variant='contained' disableRipple onClick={() =>{
            id="1"
            ChangeRoute2()
            }}>Buy</Button>
        </CardActions>
      </Card>
      </Grid>
      <Grid item xs={3}>
      <Card className='maincard'>
        <CardMedia
        id="card"
        component='img'
        image="../buds1.jpg"
        alt="buds"/>
        <CardContent className="MuiCardContent">
          <Typography variant='subtitle2' component='div'>
           Truly Wireless Earbuds
          </Typography>
        </CardContent>
        <CardActions className="MuiCardActions">
          <Button variant='contained' disableRipple onClick={() =>{
            id="2"
            ChangeRoute2()
            }}>Buy</Button>
        </CardActions>
      </Card>
      </Grid>
      <Grid item xs={3}>
      <Card className='maincard'>
        <CardMedia
        id="card"
        component='img'
        image="../mouse1.jpg"
        alt="mouse"/>
        <CardContent className="MuiCardContent">
          <Typography variant='subtitle2' component='div'>
          Logitech B170 Wireless Mouse
          </Typography>
        </CardContent>
        <CardActions className="MuiCardActions">
          <Button variant='contained' disableRipple onClick={() =>{
            id="3"
            ChangeRoute2()
            }}>Buy</Button>
        </CardActions>
      </Card>
      </Grid>
        <Grid item xs={3}>
        <Card className='maincard'>
        <CardMedia 
        id="card"
        component='img'
        image="../gopro1.jpg"
        alt="gopro"/>
        <CardContent className="MuiCardContent">
          <Typography variant='subtitle2' component='div'>
          GoPro HERO11 Waterproof Camera 
          </Typography>
        </CardContent>
        <CardActions className="MuiCardActions">
          <Button variant='contained' disableRipple onClick={() =>{
            id="4"
            ChangeRoute2()
            }}>Buy</Button>
        </CardActions>
      </Card>
      </Grid>
      <Grid item  xs={3}>
      <Card className='maincard'>
        <CardMedia
        id="card"
        component='img'
        image="../alexa1.jpg"
        alt="alexa"/>
        <CardContent className="MuiCardContent">
          <Typography variant='subtitle2' component='div'>
          Echo combo with Amazon Smart Plug
          </Typography>
        </CardContent>
        <CardActions className="MuiCardActions">
          <Button variant='contained' disableRipple onClick={() =>{
            id="5"
            ChangeRoute2()
            }} >Buy</Button>
        </CardActions>
      </Card>
      </Grid>
       <Grid item xs={3}>
       <Card className='maincard'>
        <CardMedia
        id="card"
        component='img'
        image="../tv1.jpg"
        alt="tv"/>
        <CardContent className="MuiCardContent">
          <Typography variant='subtitle2' component='div'>
          Daiwa Full HD LED Smart TV 
          </Typography>
        </CardContent>
        <CardActions className="MuiCardActions">
          <Button variant='contained' disableRipple onClick={() =>{
            id="6"
            ChangeRoute2()
            }}>Buy</Button>
        </CardActions>
      </Card>
       </Grid>
       <Grid item xs={3}>
       <Card className='maincard'>
        <CardMedia
        id="card"
        component='img'
        image="../secruity1.jpg"
        alt="secruity"/>
        <CardContent className="MuiCardContent">
          <Typography variant='subtitle2' component='div'>
          Dahua C-Series Wi-Fi Camera
          </Typography>
        </CardContent>
        <CardActions className="MuiCardActions">
          <Button variant='contained' disableRipple onClick={() =>{
            id="7"
            ChangeRoute2()
            }}>Buy</Button>
        </CardActions>
      </Card>
       </Grid>
       <Grid item xs={3}>
       <Card className='maincard'>
        <CardMedia
        id="card"
        component='img'
        image="../watch1.jpg"
        alt="watch"/>
        <CardContent className="MuiCardContent">
          <Typography variant='subtitle2' component='div'>
          Garmin Vivosmart HR Activity Tracker
          </Typography>
        </CardContent>
        <CardActions className="MuiCardActions">
          <Button variant='contained' disableRipple onClick={() =>{
            id="8"
            ChangeRoute2()
            }}>Buy</Button>
        </CardActions>
      </Card>
       </Grid>
    </Grid>
  
  )
}

export default Electronic
