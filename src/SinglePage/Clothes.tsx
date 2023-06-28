import '../style.css';
import{Grid,Card,CardContent,CardActions,CardMedia,Typography,Button}from '@mui/material';
import {useNavigate} from "react-router-dom";

const Clothes = () => {
  let id:string;
  let navigate = useNavigate();
  const ChangeRoute = () =>{ 
  let path = `/Main/Action/${id}`; 
  navigate(path);
}
  return (
    <Grid container my={1} rowSpacing={8} sx={{ mx:7 }}>
      <Grid item xs={3}>
      <Card className='maincard'>
        <CardMedia
        id="card"
        component='img'
        image="../d3.jpg"
        alt="red top"/>
        <CardContent className="MuiCardContent">
          <Typography variant='subtitle2' component='div' >
            Red Crushed Ruched Neck Tie Top
          </Typography>
        </CardContent>
        <CardActions className="MuiCardActions">
          <Button variant='contained' disableRipple  onClick={() =>{
            id="1"
            ChangeRoute()
            }}>Buy</Button>
        </CardActions>
      </Card>
      </Grid>
      <Grid item xs={3}>
      <Card className='maincard'>
        <CardMedia
        id="card"
        component='img'
        image="../top2.jpg"
        alt="Peach top"/>
        <CardContent className="MuiCardContent">
          <Typography variant='subtitle2' component='div'>
          Peach Frilled Sleeve Crop Top
          </Typography>
        </CardContent>
        <CardActions className="MuiCardActions">
          <Button variant='contained' disableRipple onClick={() =>{
            id="2"
            ChangeRoute()
            }}>Buy</Button>
        </CardActions>
      </Card>
      </Grid>
      <Grid item xs={3}>
      <Card className='maincard'>
        <CardMedia
        id="card"
        component='img'
        image="../top3.webp"
        alt="White top"/>
        <CardContent className="MuiCardContent">
          <Typography variant='subtitle2' component='div'>
          Red Puff Sleeve Smocked Top
          </Typography>
        </CardContent>
        <CardActions className="MuiCardActions">
          <Button variant='contained' disableRipple onClick={() =>{
            id="3"
            ChangeRoute()
            }} >Buy</Button>
        </CardActions>
      </Card>
      </Grid>
        <Grid item xs={3}>
        <Card className='maincard'>
        <CardMedia 
        id="card"
        component='img'
        image="../top4.webp"
        alt="White top"/>
        <CardContent className="MuiCardContent">
          <Typography variant='subtitle2' component='div'>
          Blush Polka Buttoned Blouse
          </Typography>
        </CardContent>
        <CardActions className="MuiCardActions">
          <Button variant='contained' disableRipple onClick={() =>{
            id="4"
            ChangeRoute()
            }}>Buy</Button>
        </CardActions>
      </Card>
      </Grid>
      <Grid item  xs={3}>
      <Card className='maincard'>
        <CardMedia
        id="card"
        component='img'
        image="../top5.1.webp"
        alt="red top"/>
        <CardContent className="MuiCardContent">
          <Typography variant='subtitle2' component='div'>
          Wine Cut Out Neck Lace Top
          </Typography>
        </CardContent>
        <CardActions className="MuiCardActions">
          <Button variant='contained' disableRipple onClick={() =>{
            id="5"
            ChangeRoute()
            }}>Buy</Button>
        </CardActions>
      </Card>
      </Grid>
       <Grid item xs={3}>
       <Card className='maincard'>
        <CardMedia
        id="card"
        component='img'
        image="../top6.webp"
        alt="red top"/>
        <CardContent className="MuiCardContent">
          <Typography variant='subtitle2' component='div'>
            Off Shoulder Smocked Wrap Top
          </Typography>
        </CardContent>
        <CardActions className="MuiCardActions">
          <Button variant='contained' disableRipple onClick={() =>{
            id="6"
            ChangeRoute()
            }}>Buy</Button>
        </CardActions>
      </Card>
       </Grid>
       <Grid item xs={3}>
       <Card className='maincard'>
        <CardMedia
        id="card"
        component='img'
        image="../top7.webp"
        alt="red top"/>
        <CardContent className="MuiCardContent">
          <Typography variant='subtitle2' component='div'>
          Grey Embellished Cowl Neck Top
          </Typography>
        </CardContent>
        <CardActions className="MuiCardActions">
          <Button variant='contained' disableRipple onClick={() =>{
            id="7"
            ChangeRoute()
            }}>Buy</Button>
        </CardActions>
      </Card>
       </Grid>
       <Grid item xs={3}>
       <Card className='maincard'>
        <CardMedia
        id="card"
        component='img'
        image="../top8.webp"
        alt="red top"/>
        <CardContent className="MuiCardContent">
          <Typography variant='subtitle2' component='div'>
          Dusty Pink Lace Smocked  Top
          </Typography>
        </CardContent>
        <CardActions className="MuiCardActions">
          <Button variant='contained' disableRipple onClick={() =>{
            id="8"
            ChangeRoute()
            }}>Buy</Button>
        </CardActions>
      </Card>
       </Grid>
    </Grid>
  
  )
}

export default Clothes;