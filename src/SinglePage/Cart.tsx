import{Box,Card,IconButton,CardContent,CardMedia,Typography}from '@mui/material';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import { useDispatch } from 'react-redux/es/exports';
import { Remove } from '../redux/action/action';
import{useEffect,useState} from 'react';

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

  type productprops={
    Products:data[];

  }
const Cart = ({Products}:productprops) => {
  const[Price,setPrice]=useState<number>(0);
  const dispatch=useDispatch();
    console.log(Products)
    console.log(typeof Products)

    const deleteProduct=(id:string)=>{
      console.log(id)
      dispatch(Remove(id))
    }

    const total=()=>{
       let total_price:number=0;
       Products.map((item:any)=>{
        const quantity:number=item.quantity;
        total_price=item.price1*quantity+total_price;
       })
       setPrice( total_price)
    }

    useEffect(()=>{
      total();
    },[total])
   
  return (
    <Box>       
     {Products.length===0 &&
      <Typography variant='h3' component='div'>
         cart is empty
      </Typography>
      }
        {Products.map((image:any)=>{
            return(
                <>
                <Card className='cartcard'>
                <CardMedia className='cartmedia'
                component='img'
                image={image.url1}
                alt={image.alt}/>
                <CardContent className="MuiCardContent">
                  <Typography variant='h3' component='div' className='h3' >
                   {image.title}
                  </Typography>
                  <Typography variant='h3' component='div' className='h3' >
                    Price:Rs{image.price1}/-
                  </Typography>
                  <Typography variant='h3' component='div' className='h3' >
                    Quantity:{image.quantity}
                  </Typography>
                   <IconButton aria-label="cart" size='large' color='error' onClick={()=>{
                    deleteProduct(image.id)}}>
                   < DeleteSharpIcon />
                   </IconButton>
                </CardContent>
              </Card>
              
                </>
            
            )
        })}
                <Typography variant='h5' component='div' className='h3' sx={{ my:2 }} >
                   Total Cost=Rs{Price}/-
                  </Typography>
    
    </Box>
   
  )
}

export default Cart
