// Install dependencies first:
// npm install @mui/material @emotion/react @emotion/styled

import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid
} from '@mui/material';

const ShopByPrice = () => {
  const priceRanges = [
    { id: 1, price: '59', showLabel: true },
    { id: 2, price: '69', showLabel: false },
    { id: 3, price: '99', showLabel: false },
    { id: 4, price: '119', showLabel: false },
     { id: 5, price: '199', showLabel: false },
     
  ];

  return (
    <Box sx={{ bgcolor: '#FAFAFA', py: { xs: 3, md: 4 }, px: 2 }}>
      <Container maxWidth="xl">
        {/* Shop By Price Title */}
        <Typography
          sx={{
            textAlign:'center',
            color: '#212121',
            fontSize: { xs: '1.5rem', md: '1.75rem' },
            mb: 4,
            fontWeight:"300",
         
          }}
           style={{ fontFamily: "'Work Sans', sans-serif" }}
        >
          Shop By Price
        </Typography>

        {/* Price Range Grid */}
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            flexWrap: 'wrap'
          }}
        >
          {priceRanges.map((range) => (
            <Box
              key={range.id}
              sx={{
                position: 'relative',
                bgcolor: '#FDE8F0',
                width: { xs: 'calc(50% - 8px)', sm: '180px', md: '200px' },
                minHeight: { xs: '160px', md: '180px' },
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                py: 2.5,
                px: 2,
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 6px 16px rgba(0,0,0,0.1)'
                }
              }}
            >
              {/* Under $59 Store Label - Top Left (only for first card) */}
              {range.showLabel && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: 12,
                    left: 12,
                    bgcolor: '#FF4081',
                    color: '#fff',
                    px: 1.5,
                    py: 0.5,
                    fontSize: '0.7rem',
                  
                    borderRadius: '6px',
                    letterSpacing: '0.3px',
                    whiteSpace: 'nowrap'
                  }}
                   style={{ fontFamily: "'Work Sans', sans-serif" }}
                >
                  Under $59 Store
                </Box>
              )}

              {/* UNDER text */}
              <Typography
                sx={{
                  color: '#333333',
                  fontSize: { xs: '0.75rem', md: '0.8rem' },
                 letterSpacing: '3px',
                  mb: 1,
                  textTransform: 'uppercase',
               
                  mt: range.showLabel ? 4 : 0
                }}
                 style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                UNDER
              </Typography>

              {/* Price - Large Bold */}
              <Typography
                sx={{
                  color: '#333333',
                  fontSize: { xs: '3.5rem', md: '4rem' },
                
                  lineHeight: 1,
                 
                  letterSpacing: '-1px',
                  mb: 2
                }}
                 style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                ${range.price}
              </Typography>

              {/* Decorative Lines Icon - Bottom Left */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 15,
                  left: 15,
                  width: '35px',
                  height: '35px'
                }}
              >
                <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="5" y1="45" x2="20" y2="30" stroke="#C41E3A" strokeWidth="3.5" strokeLinecap="round"/>
                  <line x1="5" y1="40" x2="15" y2="30" stroke="#C41E3A" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="5" y1="35" x2="10" y2="30" stroke="#C41E3A" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ShopByPrice;