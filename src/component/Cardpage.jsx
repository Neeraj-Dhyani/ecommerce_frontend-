import React, { useState, useEffect } from 'react'
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid
} from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router'


export default function Cardpage(){
  const [product, setproduct] = useState([])


  useEffect(()=>{
    axios.get("http://localhost:5000/getallProduct").then((productdata)=>{
      console.log(productdata.data.product);
      setproduct(productdata.data.product);
    }).catch((err)=>console.log(err));

  },[])
  
 
  return (
    <>
       <Grid container spacing={3} justifyContent="center" sx={{ p: 2 }}>
      {product.map((item) => {
        // safely get first variant + first image
        const firstImage =
          item.variants?.length > 0 && item.variants[0].images?.length > 0
            ? item.variants[0].images[0]
            : null;

        return (
          <Grid item key={item._id} xs={12} sm={6} md={4} lg={3}>
            <Link
              to={`/detailpage/${item._id}`}
              style={{ textDecoration: "none" }}
            >
              <Card
                sx={{
                  maxWidth: 300,
                  borderRadius: 4,
                  boxShadow: 3,
                  margin: "auto"
                }}
              >
                {firstImage && (
                  <CardMedia
                    component="img"
                    height="200"
                    image={`http://localhost:5000/${firstImage}`} // ✅ full path
                    alt={item.title}
                    sx={{ objectFit: "cover" }}
                  />
                )}

                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ height: 40, overflow: "hidden" }}
                  >
                    {item.description}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="primary"
                    sx={{ marginTop: 1 }}
                  >
                    ₹{item.price}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        );
      })}
    </Grid>
    </>
  )
}
