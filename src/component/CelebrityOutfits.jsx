        // Install dependencies first:
// npm install @mui/material @emotion/react @emotion/styled

import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid,
  Button
} from '@mui/material';

const CelebrityOutfits = () => {
  const outfits = [
    {
      id: 1,
      title: 'BOLLYWOOD DRESSES',
      image: 'https://i.pinimg.com/736x/5f/c3/d4/5fc3d4eba118abdede7ef72d676ad878.jpg',
      buttonText: 'SHOP NOW'
    },
     {
      id: 2,
      title: 'COUPLE OUTFIT ',
      image: 'https://i.pinimg.com/1200x/84/b8/d3/84b8d3884bc66e5f925bf20111e3ed79.jpg',
      buttonText: 'SHOP NOW'
    },
    {
      id: 3,
      title: 'MEN CELEBRITY',
      image: 'https://i.pinimg.com/736x/d9/43/49/d9434908790583eb2e5965caca2c24f3.jpg',
      buttonText: 'SHOP NOW'
    },
   
     
  ];

  return (
    <Box 
      sx={{ 
        bgcolor: '#fff', 
        py: { xs: 4, md: 6 },
        px: 2
      }}
    >
      <Container maxWidth="xl">
        {/* Section Title */}
        <Typography
          variant="h4"
          sx={{
            textAlign:"center",
            color: '#000',
            fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
            mb: 4,
           
          }}    
           style={{ fontFamily: "'Work Sans', sans-serif" }}
        >
          Celebrity Outfits
        </Typography>

        {/* Grid of Outfits */}
        <Grid container spacing={3}>
          {outfits.map((outfit) => (
            <Grid item xs={12} md={6} key={outfit.id}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: { xs: 350, sm: 400, md: 450 },
                  borderRadius: 2,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    '& .overlay': {
                      bgcolor: 'rgba(0, 0, 0, 0.5)'
                    }
                  }
                }}
              >
                {/* Background Image */}
                <Box
                  component="img"
                  src={outfit.image}
                  alt={outfit.title}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />

                {/* Overlay */}
                <Box
                  className="overlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bgcolor: 'rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background-color 0.3s ease'
                  }}
                >
                  {/* Title */}
                  <Typography
                    sx={{
                      color: '#fff',
                      fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                     
                      letterSpacing: '1px',
                      mb: 2,
                      textAlign: 'center',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                    }}
                     style={{ fontFamily: "'Work Sans', sans-serif" }}
                  >
                    {outfit.title}
                  </Typography>

                  {/* Shop Now Button */}
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: 'transparent',
                      color: '#fff',
                    
                      fontSize: { xs: '0.85rem', md: '0.95rem' },
                      letterSpacing: '1px',
                      px: 4,
                      py: 1.5,
                      border: '2px solid #fff',
                      borderRadius: 0,
                      textTransform: 'uppercase',
                      boxShadow: 'none',
                      '&:hover': {
                        bgcolor: '#fff',
                        color: '#000',
                        boxShadow: 'none'
                      }
                    }}
                     style={{ fontFamily: "'Work Sans', sans-serif" }}    
                  >
                    {outfit.buttonText}
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CelebrityOutfits;