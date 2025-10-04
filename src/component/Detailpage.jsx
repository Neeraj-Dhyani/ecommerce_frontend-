import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios, { AxiosHeaders } from 'axios';
import { Button, Typography, Box } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

export default function Detailpage() {
    const {id} = useParams();
    const [product ,setproduct] = useState(null);
    const [zoomed, setZoomed] = useState(false);

    const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
    
    useEffect(()=>{
        axios.get(`http://localhost:5000/getproductbyid/${id}`)
        .then((res)=>{
            setproduct(res.data.pt);
        }).catch((err)=>{
            console.log(err)
        })
    },[id])
     const handleClick = () => {
    setZoomed(true); 
  };

  const handleDoubleClick = () => {
    setZoomed(false);
  };
    console.log(product?.variants[0])
    const handlesubmit = async (product_id)=>{
     const token = localStorage.getItem("token");
     try{
       await axios.put("http://localhost:5000/addtocart" , 
      {
          product_id: product_id,
          quantity: 1,
      },
      {
      headers:{
        Authorization: "Bearer " + token,
      },
      withCredentials: true
      })
  
     }catch(err){
      console.log(err);
     }}
     if (!product) return <Typography>Loading...</Typography>;
  return (
    <>
      <Slider {...settings}>
        {product.variants &&
          product.variants[0]?.images?.map((img, index) => (
             <Box
        key={index}
         sx={{
        width: 464,
        height: 464,
        overflow: "hidden",
        position: "relative",
        border: "1px solid #ddd",
        cursor: zoomed ? "zoom-out" : "zoom-in",
        "& img": {
          transition: "transform 0.4s ease",
          transform: zoomed ? "scale(2)" : "scale(1)", // magnify on click
        },
        "&:hover img": {
          transform: zoomed ? "scale(2)" : "scale(1.3)", // hover effect
        },
      }}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
      >
        <img
          src={`http://localhost:5000/${img}`}
          alt={`Product ${index}`}
          style={{ width: "auto", height: "100%" }}
        />
      </Box>
    ))}
      </Slider>

      <Box sx={{ padding: 4 }}>
        <img src={product.image} alt={product.title} style={{ width: "300px" }} />
        <Typography variant="h4">{product.title}</Typography>
        <Typography variant="body1">{product.description}</Typography>
        <Typography variant="h5" color="primary">
          ₹{product.price}
        </Typography>
        <Button variant="contained" onClick={() => handlesubmit(product._id)}>
          Add to Cart
        </Button>
      </Box>
    </>
  );
}

function CustomPrevArrow(props) {
  const { className, onClick } = props;
  return (
    <ArrowBackIos
      className={className}
      onClick={onClick}
      sx={{ zIndex: 1, color: "#333", fontSize: "2rem", left: "15px" }}
    />
  );
}

function CustomNextArrow(props) {
  const { className, onClick } = props;
  return (
    <ArrowForwardIos
      className={className}
      onClick={onClick}
      sx={{ zIndex: 1, color: "#333", fontSize: "2rem", right: "15px" }}
    />
  );
}