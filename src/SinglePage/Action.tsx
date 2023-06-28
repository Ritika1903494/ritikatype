
import {useParams} from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import{Box,Stack,Rating,Card,CardContent,CardActions,Drawer,IconButton,Typography,Button}from '@mui/material';
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
  price:string;
  price1:number;
  quantity:number;
  rating:number;
}


const Action = () => {
  const[drawer,setDrawer]=useState<boolean>(false);
  const Products=useSelector((state:any)=>state.reducer.cartData);
  console.log(Products)
const dispatch=useDispatch();
  let newData:any;
  let {id}=useParams();
  console.log(typeof id)
  
 let imageData:data[]=[
  {
     id:"1",
     title:"Red Crushed Ruched Neck Tie Top",
     alt:"image1",
     url1:"../../d3.jpg",
     url2:"../../d4.jpg",
     price:"Rs 720",
     price1:720,
     quantity:0,
     rating:4
},
{
     id:"2",
     title:"Peach Frilled Sleeve Crop Top",
     alt:"image2",
     url1:"../../top2.jpg",
     url2:"../../top2.1.jpg",
     price:"Rs 720",
     price1:720,
     quantity:0,
     rating:4.5
},
{
  id:"3",
  title:" Red Puff Sleeve Smocked Top",
  alt:"image3",
  url1:"../../top3.webp",
  url2:"../../top3.1.webp",
  price:"Rs 720",
  price1:720,
  quantity:0,
  rating:3.5
},
{
  id:"4",
  title:"Blush Polka Buttoned Blouse",
  alt:"image4",
  url1:"../../top4.webp",
  url2:"../../top4.1.webp",
  price:"Rs 720",
  price1:720,
  quantity:0,
  rating:4
},
{
  id:"5",
  title:"Wine Cut Out Neck Lace Top",
  alt:"image5",
  url1:"../../top5.1.webp",
  url2:"../../top5.webp",
  price:"Rs 720",
  price1:720,
  quantity:0,
  rating:4
},
{
  id:"6",
  title:"Off Shoulder Smocked Wrap Top",
  alt:"image6",
  url1:"../../top6.webp",
  url2:"../../top6.1.webp",
  price:"Rs 720",
  price1:720,
  quantity:0,
  rating:4
},
{
  id:"7",
  title:"Grey Embellished Cowl Neck Top",
  alt:"image7",
  url1:"../../top7.webp",
  url2:"../../top7.1.webp",
  price:"Rs 720",
  price1:720,
  quantity:0,
  rating:5
},
{
  id:"8",
  title:"Dusty Pink Lace Smocked  Top",
  alt:"image8",
  url1:"../../top8.webp",
  url2:"../../top8.1.webp",
  price:"Rs 720",
  price1:720,
  quantity:0,
  rating:3
},
{
  id:"9",
  title:"Fortune Sunlite Refined Oil",
  alt:"image9",
  url1:"../../oil1.jpg",
  url2:"../../oil2.jpg",
  price:"Rs 180",
  price1:180,
  quantity:0,
  rating:4.5
},

{
  id:"10",
  title:" Daawat Basamti Rice ",
  alt:"image10",
  url1:"../../rice1.jpg",
  url2:"../../rice2.jpg",
  price:"Rs 500",
  price1:500,
  quantity:0,
  rating:4.5
},
{
  id:"11",
  title:"Tata Tea Permium",
  alt:"image11",
  url1:"../../tea1.jpg",
  url2:"../../tea2.jpg",
  price:"Rs 200", 
  price1:200,
  quantity:0,
  rating:4
},
{
  id:"12",
  title:"Maggi 2-minute Instant Noodles",
  alt:"image12",
  url1:"../../maggi1.webp",
  url2:"../../maggi2.jpg",
  price:"Rs 10",
  price1:10,
  quantity:0,
  rating:4
},
{
  id:"13",
  title:"Del Monte Tomato ketchup",
  alt:"image13",
  url1:"../../ketchup1.jpg",
  url2:"../../ketchup2.jpg",
  price:"Rs 100",
  price1:100,
  quantity:0,
  rating:4.5
},
{
  id:"14",
  title:"Cadbury Oreo Vanilla flavour Biscuit",
  alt:"image14",
  url1:"../../biscuits1.jpg",
  url2:"../../biscuits2.jpg",
  price:"Rs 20",
  price1:20,
  quantity:0,
  rating:4
},
{
  id:"15",
  title:"Freshly Roasted Coffee Beans",
  alt:"image15",
  url1:"../../coffee1.jpg",
  url2:"../../coffee2.jpg",
  price:"Rs 200",
  price1:200,
  quantity:0,
  rating:4
},
{
  id:"16",
  title:" Quaker Oats|Rolled Oats",
  alt:"image16",
  url1:"../../oats1.jpg",
  url2:"../../oats2.jpg",
  price:"Rs 300",
  price1:300,
  quantity:0,
  rating:4
},

]

const sendData=(product:any)=>{
  console.log(product)
  setDrawer(true)
  dispatch(Add(product))
}

const filterdata=() =>{
   newData=imageData.filter((item:any)=>id===item.id)
  console.log(newData[0].url1)
  console.log(newData)
}


  filterdata();   

  return (
    <>
    <Box className="mainbox">
    {
      newData  && newData.length &&
      newData.map((image:any) =>{
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
               onClick={() =>{sendData(image)}}>
                Add to Cart</Button>
            </CardActions>
          </Card>
          </>
            ) 
          })
        } 
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
          </Box> 
</>
)
};

export default Action;