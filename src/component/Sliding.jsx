import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, Button } from "@mui/material";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

export default function Sliding() {
  const images = [
    {
      img: "/images/banner1.jpg", // Replace with your local image or use a public URL
      title: "End of Season Sale",
      subtitle: "Up to 50% Off",
      details: "Free shipping + Free stitching & Additional 12% Off",
      coupon: "EOSS",
    },
     {
      img: "/images/banner1.jpg",
      title: "End of Season Sale",
      subtitle: "Up to 50% Off",
      details: "Free shipping + Free stitching & Additional 12% Off",
      coupon: "EOSS",
    }
    // Add more slides here if needed
  ];

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

  return (
    <Slider {...settings}>
      {images.map((slide, index) => (
    <Box
      key={index}
      sx={{
        height: "100vh",
        backgroundImage: `url(${slide.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <Box
        sx={{
          background: "rgba(255,255,255,0.85)",
          p: 4,
          borderRadius: 2,
          maxWidth: 600,
        }}
      >
        <Typography variant="h3" color="primary" gutterBottom>
          {slide.title}
        </Typography>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          {slide.subtitle}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {slide.details}
        </Typography>
        <Typography variant="body2" color="textSecondary" mb={2}>
          Coupon Code: <strong>{slide.coupon}</strong>
        </Typography>
        <Button variant="contained" color="warning" sx={{ mr: 1 }}>
          BEST SELLER
        </Button>
        <Button variant="contained" color="secondary" sx={{ mr: 1 }}>
          READY TO SHIP
        </Button>
        <Button variant="contained" color="error">
          FLAT 70% OFF
        </Button>
      </Box>
    </Box>
  ))}
    </Slider>
  );
}

// Optional: Custom arrow components (you can style them)
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
