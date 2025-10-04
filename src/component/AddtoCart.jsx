import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Button,
  Grid,
  Divider,
} from "@mui/material";
import DeleteIcon  from "@mui/icons-material/Delete";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useAuth } from "./login_component/AuthContext";
import axios from "axios";
import { data } from "react-router";

export default function AddtoCart() {
  const token = localStorage.getItem("token");
  const {user,setUser} = useAuth();
  const cart = user?.cart||[];
  let [totalPrice, setotalprice]= useState(0);
  // console.log(cart);

  useEffect(()=>{
    // const total = cart.map((sum, item)=>{ sum + item.price})
     const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
     setotalprice(total);
  },[cart])
  const removeFromCart = async (id) =>{
    axios.delete("http://localhost:5000/removetocart",{
      headers: {
        Authorization: "Bearer " + token 
      },
      data: {
        product_id: id
      }
    }).then((res)=>{
      // console.log(res.data)
      alert(res.data.massage)
    }).catch((err)=>{
      // console.log(err);
      alert(err.data.msg)
    })
    
  }
  const addquantity =(id)=>{
    axios.put("http://localhost:5000/addquantity", {product_id:id},{
      headers: {
        Authorization: "Bearer " + token 
      },
    }).then((res)=>{
      alert(res.data.message)
    }).catch((err)=>{
      console.log(err);
    })
  }
  const decreasequantity =(id)=>{
    axios.put("http://localhost:5000/decreasequantity", { product_id:id},{
      headers: {
        Authorization: "Bearer " + token 
      },
    }).then((res)=>{
      alert(res.data.message)
    }).catch((err)=>{
      console.log(err);
    })
  }
  const place_order_sumite_handler = ()=>{
    try{
      axios.post("http://localhost:5000/placeOrder", {cart, totalPrice}, {
         headers: {
        Authorization: "Bearer " + token 
      }
      }).then((res)=>{
        alert(res.data.message)
      }).catch((err)=>{
        console.log(err);
      })
    }catch(err){
      alert(err)
    }
  }
  return (
    <>
      <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        My Cart
      </Typography>

      <Grid container spacing={3}>
        {cart.map((item) => (
          // {item},
          <Grid item xs={12} md={6} key={item.product._id}>
            <Card sx={{ display: "flex" }}>
              <CardMedia
                component="img"
                image={`http://localhost:5000/${item.image}`}
                alt={item.name}
                sx={{ width: 150, objectFit: "cover" }}
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6">{item.product.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Quantity: {item.quantity}
                </Typography>
                <Typography variant="body1" sx={{ marginTop: 1 }}>
                  ₹{item.price * item.quantity}
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex", alignItems: "center", paddingRight: 2 }}>
                <IconButton onClick={() => addquantity(item.product)}>
                  <AddIcon/>
                </IconButton>
              </Box>
               <Box sx={{ display: "flex", alignItems: "center", paddingRight: 2 }}>
                <IconButton onClick={() => decreasequantity(item.product)}>
                  <RemoveIcon/>
                </IconButton>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", paddingRight: 2 }}>
                <IconButton onClick={() => removeFromCart(item._id)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 4 }} />

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">Total:{totalPrice}₹</Typography>
        <Button variant="contained" color="success" onClick={place_order_sumite_handler}>
          Place Order
        </Button>
      </Box>
    </Box>
    </>
  )
}
