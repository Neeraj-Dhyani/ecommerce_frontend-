// Install: npm install swiper @mui/material @emotion/react @emotion/styled @mui/icons-material

import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card,
  CardMedia,
  CardContent,
  IconButton
} from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const TopSellingItems = () => {
  const products = [
    {
      id: 1,
      image: 'https://i.pinimg.com/736x/5c/24/69/5c246902f607ce15d4cd0127239c627a.jpg',
      title: 'Mustard Yellow Chinnon Embroidered Palazzo Suit',
      price: '₹ 10,413',
      originalPrice: '₹ 12,201'
    },
    {
      id: 2,
      image: 'https://i.pinimg.com/736x/84/ce/7f/84ce7fef4122ee841b799e031568f960.jpg',
      title: 'Ivory Taffeta Silk Cigarette Pant Indian Suit',
      price: '₹ 14,621',
      originalPrice: '₹ 52,802'
    },
    {
      id: 3,
      image: 'https://i.pinimg.com/736x/26/04/e4/2604e453c908706c8d8530899a623628.jpg',
      title: 'Light Beige Net Sequins Embroidered Concept Saree',
      price: '₹ 8,835',
      originalPrice: '₹ 11,465'
    },
    {
      id: 4,
      image: 'https://i.pinimg.com/736x/ac/a2/c6/aca2c642a16431d6172bb67d06f6d6ea.jpg',
      title: 'Sage Green Silk Embroidered Palazzo Suit',
      price: '₹ 12,517',
      originalPrice: '₹ 45,124'
    },
    {
      id: 5,
      image: 'https://i.pinimg.com/736x/7f/6b/30/7f6b3032d015c03c3ce3f9b89edc83ae.jpg',
      title: 'Light Dusty Green Jacquard Jacket Style Sherwani',
      price: '₹ 18,828',
      originalPrice: '₹ 53,749' 
    },
    {
      id: 6,
      image: 'https://i.pinimg.com/1200x/67/80/eb/6780ebbf2ddfa22ad5e833721b70ddfd.jpg',
      title: 'Royal Blue Silk Embroidered Wedding Lehenga',
      price: '₹ 15,999',
      originalPrice: '₹ 35,000'
    }
  ];

  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: '#fff',
        py: 6,
        px: 2,
    
      }}
    >
      <Container maxWidth="xl" >
        {/* Header with Title and Navigation */}
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            mb: 4   
          }}
        >
          {/* Title */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: '#000',
              fontSize: { xs: '1.5rem', md: '1.75rem' }
            }}
          >
            Top-selling Items
          </Typography>

          {/* Navigation Buttons */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton
              className="swiper-button-prev-custom"
              sx={{
                bgcolor: '#f5f5f5',
                width: 40,
                height: 40,
                '&:hover': {
                  bgcolor: '#e0e0e0'
                }
              }}
            >
              <ChevronLeft />
            </IconButton>
            <IconButton
              className="swiper-button-next-custom"
              sx={{
                bgcolor: '#f5f5f5',
                width: 40,
                height: 40,
                '&:hover': {
                  bgcolor: '#e0e0e0'
                }
              }}
            >
              <ChevronRight />
            </IconButton>
          </Box>
        </Box>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={2}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
            1280: { slidesPerView: 5, spaceBetween: 24 }
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <Card
                elevation={1}
                sx={{
                  height: '100%',
                  borderRadius: 2,

                  border: '1px solid #f0f0f0',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                  '&:hover': {
                    boxShadow: 4,
                    transform: 'translateY(-4px)'
                  }
                }}  
              >
                {/* Product Image */}
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.title}
                  sx={{
                    height: 320,
                    objectFit: 'cover',
                    
                  }}
                />

                {/* Product Info */}
                <CardContent sx={{ p: 2 }}>
                  {/* Product Title */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#333',
                      fontSize: '0.9rem',
                      mb: 1.5,
                      lineHeight: 1.4,
                      height: 40,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical'
                    }}
                  >
                    {product.title}
                  </Typography>

                  {/* Price Section */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: '#000',
                        fontSize: '1rem'
                      }}
                    >
                      {product.price}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#999',
                        fontSize: '0.875rem',
                        textDecoration: 'line-through'
                      }}
                    >
                      {product.originalPrice}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default TopSellingItems; 