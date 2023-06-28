import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import{Box,Stack,Rating,Card,CardContent,CardActions,IconButton,Typography,Button,Drawer}from '@mui/material';
import {useParams} from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import{useState} from 'react';
import { useDispatch } from 'react-redux/es/exports';
import Cart from './Cart';
import { Add } from '../redux/action/action';
import { useSelector } from 'react-redux'


type data={
  id:string;
  title:string;
  alt:string;
  url1:string;
  url2:string;
  url3:string;
  price:string;
  price1:number;
  quantity:number;
  rating:number;
  
}


const Action2 = () => {
  const Products=useSelector((state:any)=>state.reducer.cartData);
    console.log(Products)
  const dispatch=useDispatch();
  const[drawer,setDrawer]=useState<boolean>(false); 
  let newData2:any;
  let {id}=useParams();
  
 let imageData2:data[]=[
  {
     id:"5",
     title:"Echo combo with Amazon Smart Plug",
     alt:"image5",
     url1:"../../alexa1.jpg",
     url2:"../../alexa2.jpg",
     url3:"../../alexa3.jpg",
     price:"Rs 5000",
     price1: 5000,
     quantity:0,
     rating:4,
    
     
},
{
     id:"4",
     title:"GoPro HERO11 Waterproof Camera ",
     alt:"image4",
     url1:"../../gopro1.jpg",
     url2:"../../gopro2.jpg",
     url3:"../../gopro3.jpg",
     price:"Rs 50000",
     price1: 50000,
     quantity:0,
     rating:4,
    
},
{
  id:"2",
  title:" Truly Wireless Earbuds",
  alt:"image2",
  url1:"../../buds1.jpg",
  url2:"../../buds2.jpg",
  url3:"../../buds3.jpg",
  price:"Rs 720",
  price1: 720,
  quantity:0,
  rating:4,
 
},
{
  id:"1",
  title:" LG Washing Machine",
  alt:"image1",
  url1:"../../washing1.jpg",
  url2:"../../washing2.jpg",
  url3:"../../washing3.jpg",
  price:"Rs 15000",
  price1: 15000,
  quantity:0,
  rating:4,
},
{
  id:"8",
  title:"Garmin Vivosmart HR Activity Tracker",
  alt:"image8",
  url1:"../../watch1.jpg",
  url2:"../../watch2.jpg",
  url3:"../../watch3.jpg",
  price:"Rs 720",
  price1: 720,
  quantity:0,
  rating:4,
 

},
{
  id:"7",
  title:"Dahua C-Series Wi-Fi Camera",
  alt:"image7",
  url1:"../../secruity1.jpg",
  url2:"../../secruity2.jpg",
  url3:"../../secruity3.jpg",
  price:"Rs 720",
  price1: 720,
  quantity:0,
  rating:4,
 
},
{
  id:"6",
  title:"Daiwa Full HD LED Smart TV ",
  alt:"image6",
  url1:"../../tv1.jpg",
  url2:"../../tv2.jpg",
  url3:"../../tv3.jpg",
  price:"Rs 30000",
  price1: 30000,
  quantity:0,
  rating:4,
 
},
{
  id:"3",
  title:" Logitech B170 Wireless Mouse",
  alt:"image3",
  url1:"../../mouse1.jpg",
  url2:"../../mouse2.jpg",
  url3:"../../mouse3.jpg",
  price:"Rs 1000",
  price1:1000,
  quantity:0,
  rating:4,
 
}
]

const send=(product:any)=>{
  console.log(product)
  setDrawer(true)
  dispatch(Add(product))
}

const filterdata=() =>{
  newData2=imageData2.filter((item:any)=>id===item.id)
  console.log(newData2[0].url1)
}

  filterdata();   

  return (
    <>
     <Box className="mainbox">
     {
     newData2  && newData2.length &&
     newData2.map((image:any) =>{
        return(
          <>
          <Carousel id="carousel">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image.url1}
              alt="First slide"
              width={400}
              height={400}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image.url2}
              alt="Second slide"
              width={400}
              height={400}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image.url3}
              alt="Second slide"
              width={400}
              height={400}
            />
          </Carousel.Item>
        </Carousel>
        <Card className='boxmaincard'>
        <CardContent className="MuiCardContent">
          <Typography variant='h1' component='div' className="h1" gutterBottom>
           {image.title}
          </Typography>
          <Typography variant='h5' component='div' className="h5" gutterBottom>
           {image.price}
          </Typography>
         
          <Stack spacing={2}>
            <Rating  value={image.rating} precision={0.5} size="large" readOnly/>
          </Stack>
        </CardContent>
        <CardActions className="MuiCardActions">
          <Button
          className="boxbutton"
           variant='contained' 
           color="warning"
          disableRipple 
          size="large"
           startIcon={ <ShoppingCartIcon />}
           onClick={() => {
            send(image)
           }}
           >
            Add to Cart</Button>
        </CardActions>
      </Card>
     <Drawer
  className="drawer"
  anchor='right'
  open={drawer}
  onClose={() =>setDrawer(false)}
  >
   <Box width='500px' className='drawerclass'>
            <Typography variant='h3' component='div' className='h3'>
            <IconButton aria-label='Cart' size='large'>
            <ShoppingCartIcon />
            </IconButton>
             Cart
             </Typography>
             <Cart Products={Products} />
            </Box>

  </Drawer>
  </>
        ) 
      })
    } 
  </Box>
 
</>
)
};

export default Action2;
 