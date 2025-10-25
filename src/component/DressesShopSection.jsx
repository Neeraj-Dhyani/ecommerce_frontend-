// Install dependencies first:
// npm install @mui/material @emotion/react @emotion/styled

import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';

const DressesShopSection = () => {
  const dresses = [
    {
      id: 1,
      title: 'MISSY SIZE',
      image:
        'https://i.pinimg.com/736x/eb/59/cc/eb59ccdc3d39fdbe02abb48dee67f9fa.jpg',
      buttonText: 'SHOP NOW',
    },
    {
      id: 2,
      title: 'PETITE SIZE',
      image:
        'https://i.pinimg.com/1200x/d3/8a/b6/d38ab6ee381ba970ab5360635defd7a5.jpg',
      buttonText: 'SHOP NOW',
    },
    {
      id: 3,
      title: 'TALL SIZE',
      image:
        'https://i.pinimg.com/736x/f0/01/7f/f0017f88d404a454247c34672d9d5f48.jpg',
      buttonText: 'SHOP NOW',
    },
  ];

 
  return (
    <Box sx={{ bgcolor: '#fff', py: { xs: 4, md: 8 }, px: 2 }}>
      <Container maxWidth="xl">
        {/* Dresses for Every Size Section */}
        <Typography
          sx={{
            fontWeight: 600,
            color: '#000',
            fontSize: { xs: '1.6rem', sm: '1.9rem', md: '2.2rem' },
            mb: 4,
            fontFamily: 'Arial, sans-serif',
            textAlign: 'center',
          }}
        >
          Dresses for Every Size
        </Typography>

        {/* Dresses Grid */}
        <Grid container spacing={3} sx={{ mb: 8 }}>
          {dresses.map((dress) => (
            <Grid item xs={12} sm={6} md={4} key={dress.id}>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 3,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  transition: 'all 0.35s ease',
                  height: 420,
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                    '& .overlay': { bgcolor: 'rgba(0, 0, 0, 0.55)' },
                  },
                }}
              >
                <Box
                  component="img"
                  src={dress.image}
                  alt={dress.title}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />

                <Box
                  className="overlay"
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    bgcolor: 'rgba(0, 0, 0, 0.35)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background-color 0.3s ease',
                  }}
                >
                  <Typography
                    sx={{
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: { xs: '1.4rem', sm: '1.7rem' },
                      mb: 1,
                      textShadow: '2px 2px 6px rgba(0,0,0,0.7)',
                    }}
                  >
                    {dress.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: '#fff',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: 1,
                      fontSize: { xs: '0.95rem', sm: '1.05rem' },
                      textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
                    }}
                  >
                    {dress.buttonText}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Shop By Price Section */}
       
       
      </Container>
    </Box>
  );
};

export default DressesShopSection;
