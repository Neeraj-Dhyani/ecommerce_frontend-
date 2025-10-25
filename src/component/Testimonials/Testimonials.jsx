        // Install: npm install swiper @mui/material @emotion/react @emotion/styled @mui/icons-material

    import React from 'react';
    import { 
    Box, 
    Container, 
    Typography, 
    Card,
    Rating
    } from '@mui/material';
    import StarIcon from '@mui/icons-material/Star';

    // Swiper imports
    import { Swiper, SwiperSlide } from 'swiper/react';
    import { Pagination, Autoplay } from 'swiper/modules';
    import 'swiper/css';
    import 'swiper/css/pagination';

    const Testimonials = () => {
    const testimonials = [
        {
        id: 1,
        image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400&q=80',
        text: 'My outfit arrived in a timely manner. I tried it on and it was a perfect fit. I am really pleased with the product and excellent service. Thank you very much.',
        name: 'ANNIE MIRZA',
        rating: 5
        },
        {
        id: 2,
        image: 'https://images.unsplash.com/photo-1583391733981-5babdc151e0f?w=400&q=80',
        text: 'Absolutely stunning collection! The quality exceeded my expectations. The embroidery work is exquisite and the fabric is premium. Highly recommended!',
        name: 'PRIYA SHARMA',
        rating: 5
        },
        {
        id: 3,
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=80',
        text: 'Beautiful designs and great customer service. The lehenga I ordered was exactly as shown in the pictures. Fast delivery and well packaged. Love it!',
        name: 'RIYA KAPOOR',
        rating: 5
        },
        {
        id: 4,
        image: 'https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=400&q=80',
        text: 'The craftsmanship is exceptional! Every stitch and detail shows the quality. Received so many compliments at my event. Will definitely order again!',
        name: 'NEHA PATEL',
        rating: 5
        },
        {
        id: 5,
        image: 'https://images.unsplash.com/photo-1614495039153-e9cd13240469?w=400&q=80',
        text: 'Amazing experience from start to finish. The customer support was helpful, and the outfit was even more beautiful in person. Perfect for my special day!',
        name: 'SIMRAN KAUR',
        rating: 5
        },
        {
        id: 6,
        image: 'https://images.unsplash.com/photo-1596783342430-3bf873573da9?w=400&q=80',
        text: 'Outstanding quality and elegant design! The colors are vibrant and the fit is perfect. Very happy with my purchase. Excellent service throughout!',
        name: 'KAVITA SINGH',
        rating: 5
        }
    ];

    return (
        <Box
        sx={{
            width: '100%',
            bgcolor: '#f5f5f5',
            py: 8,
            px: 2
        }}
        >
        <Container maxWidth="lg">
            {/* Heading */}
            <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
                variant="h4"
                component="h2"
                sx={{

                color: '#000',
                fontSize: { xs: '1.75rem', md: '2rem' },
                fontFamily: 'serif'
                }}
            >
                Trusted and Loved by Our Valued Customers
            </Typography>
            </Box>

            {/* Main Rectangle Card with Slider Inside */}
           {/* Main Rectangle Card with Slider Inside */}
<Card
  elevation={3}
  sx={{
    borderRadius: 4,
    bgcolor: '#fff',
    overflow: 'hidden', // ✅ prevent extra line overflow
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    p: { xs: 2, md: 4 }
  }}
>
  {/* Swiper Slider Inside Rectangle */}
  <Box
    sx={{
      position: 'relative',
      overflow: 'hidden', // ✅ extra fix
      width: '100%',
    }}
  >
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={2} // ✅ slight spacing for smoothness
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      style={{
        width: '100%', // ✅ force fit width
        overflow: 'hidden', // ✅ prevent edge bleed
        paddingBottom: '50px'
      }}
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.id}>
          {/* Horizontal Layout - Image Left + Content Right */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 3, md: 4 },
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: { xs: 'auto', md: 280 },
              overflow: 'hidden', // ✅ just to be extra safe
            }}
          >
            {/* Left Side - Image */}
            <Box
              sx={{
                flexShrink: 0,
                width: { xs: 180, md: 240 },
                height: { xs: 240, md: 280 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                component="img"
                src={testimonial.image}
                alt={testimonial.name}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 2,
                  boxShadow: 2,
                }}
              />
            </Box>

            {/* Right Side - Content */}
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: { xs: 'center', md: 'left' },
                py: 2,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: '#333',
                  lineHeight: 1.8,
                  mb: 4,
                  fontSize: { xs: '1rem', md: '1.25rem' },
                }}
              >
                "{testimonial.text}"
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: { xs: 'center', md: 'flex-start' },
                  gap: 1.5,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: '#000',
                    fontSize: '1.125rem',
                    letterSpacing: '0.5px',
                  }}
                >
                  {testimonial.name}
                </Typography>

                <Rating
                  value={testimonial.rating}
                  readOnly
                  size="medium"
                  icon={<StarIcon sx={{ color: '#db2777', fontSize: 24 }} />}
                  emptyIcon={<StarIcon sx={{ color: '#e0e0e0', fontSize: 24 }} />}
                />
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  </Box>
</Card>

        </Container>

        {/* Custom Swiper Styles */}
        <style>
            {`
            .swiper-pagination-bullet {
                background: #ccc !important;
                opacity: 1 !important;
                width: 10px !important;
                height: 10px !important;
            }
            .swiper-pagination-bullet-active {
                background: #db2777 !important;
                width: 30px !important;
                border-radius: 5px !important;
            }
            `}
        </style>
        </Box>
    );
    };

    export default Testimonials;