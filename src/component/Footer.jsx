// Install dependencies first:
// npm install @mui/material @emotion/react @emotion/styled @mui/icons-material

import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid,
  TextField,
  Button,
  Link
} from '@mui/material';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

const Footer = () => {
  const footerSections = [
    {
      title: 'Designer Collection',
      links: [
        'Ethnic Wear',
        'Salwar Kameez',
        'Sarees',
        'Lehengas',
        'Gowns',
        'Kurtis',
        'Menswear',
        'Kulaiwear',
        'Plus Size Clothing',
        'Jewellery'
      ]
    },
    {
      title: 'About Andaaz Fashion',
      links: [
        'About Us',
        'Contact Us',
        'Our Blog',
        'PCI Compliance Certificate',
        'Return Request'
      ]
    },
    {
      title: 'Help Centre',
      links: [
        'Help',
        'Delivery Policy',
        'Return Policy',
        'Privacy Policy',
        'Terms & Conditions',
        'Csro Terms & Conditions'
      ]
    },
    {
      title: 'Information',
      links: [
        'FAQ',
        'Standard Size Guide',
        'Shipping Charges',
        'Sitemap',
        'Pantone Palette',
        'Customize Your Dress'
      ]
    }
  ];

  const trendingCategories = [
    'Trouser Pant Suits', 'Anarkali Suits', 'Patiala Suits', 'Sharara Suits', 'Churidar Suits',
    'Plus Size Sarees', 'Gharara Suits', 'Plus Size Salwar Kameez', 'Plus Size Anarkali Dresses',
    'Indian Prom Dresses', 'Plus Size Lehengas', 'Plus Size Panjabi Patiala Suits',
    'Plus Size Sharara Suits', 'Plus Size Indian Trouser Suits', 'Plus Size Churidar Dresses',
    'Plus Size Men\'s Dresses', 'Plus Size Kurtis', 'Bollywood Sarees', 'Bollywood Dresses',
    'Anarkali Suits', 'Bollywood Patiala Suits', 'Bollywood Lehengas', 'Sherwanis', 'Dhoti Kurtas',
    'Girls Wear', 'Boys Wear', 'Men Suits', 'Muslim Clothing', 'Dupattas', 'Stoles', 'Kurta Pajama',
    'Nehru Jackets'
  ];

  const weddingCollection = [
    'Indian Wedding Dresses', 'Pakistani Wedding Dresses', 'Muslim Wedding Dresses', 'Nikkah Dresses',
    'Punjabi Wedding Dresses', 'Bengali Wedding Dresses', 'Wedding Salwar Suits', 'Wedding Lehengas',
    'Wedding Sarees', 'Indian Wedding Outfits for Men', 'Wedding Sherwanis', 'Wedding Kurta for Men',
    'Wedding Jewellery', 'Mehndi Outfits', 'Sangeet Outfits', 'Haldi Outfits', 'Engagement Outfits',
    'Reception Outfits', 'Wedding Shoes', 'Wedding Turban'
  ];

  const festiveCollection = [
    'Eid Clothing', 'Diwali Clothing', 'Karwa Chauth Dresses', 'Navratri Dresses',
    'Mother Daughter Same Dresses', 'Father And Son Matching Outfits', 'Indian Couple Outfits'
  ];

  const fashionAccessories = [
    'Indian Necklace Sets', 'Indian Earrings', 'Maang Tikka', 'Kundan Jewelry', 'Juttis And Mojaries',
    'Sherwani Mala', 'Choker Necklace', 'Indian Bridal Jewelry', 'Jhumka Earrings', 'Chandbali Earrings',
    'Drop Earrings', 'Studs Earrings', 'Potli Bags', 'Clutches', 'Fashion Accessories', 'Punjabi Juttis',
    'Men\'s Turban'
  ];

  const paymentIcons = [
    { name: 'Apple Pay', icon: '🍎' },
    { name: 'Discover', icon: '💳' },
    { name: 'Amex', icon: '💳' },
    { name: 'Google Pay', icon: 'G' },
    { name: 'Mastercard', icon: '💳' }
  ];

  return (
    <Box sx={{ bgcolor: '#fff', pt: 5, pb: 3 }}>
      <Container maxWidth="xl">
        {/* Top Section - Footer Links */}
        <Grid container spacing={4} sx={{ mb: 5 }}>
          {footerSections.map((section, index) => (
            <Grid item xs={6} sm={6} md={3} key={index}>
              <Typography
                sx={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#000',
                  mb: 2,
                  fontFamily: 'Arial, sans-serif'
                }}
              >
                {section.title}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {section.links.map((link, idx) => (
                  <Link
                    key={idx}
                    href="#"
                    sx={{
                      fontSize: '0.85rem',
                      color: '#555',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                      '&:hover': {
                        color: '#C41E3A'
                      }
                    }}
                  >
                    {link}
                  </Link>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Newsletter Section */}
        <Box sx={{ mb: 5, textAlign: 'right' }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 2 }}>
            <Box>
              <Typography sx={{ fontSize: '0.9rem', fontWeight: 600, color: '#000', mb: 0.5 }}>
                Join Andaaz Fashion
              </Typography>
              <Typography sx={{ fontSize: '0.8rem', color: '#666' }}>
                and get 10% off a receive exclusive offers.
              </Typography>
            </Box>
            <TextField
              placeholder="Enter your email address"
              variant="outlined"
              size="small"
              sx={{
                width: '280px',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '4px 0 0 4px',
                  bgcolor: '#fff'
                }
              }}
            />
            <Button
              variant="contained"
              sx={{
                bgcolor: '#8B1538',
                color: '#fff',
                px: 3,
                py: 1.2,
                borderRadius: '0 4px 4px 0',
                textTransform: 'uppercase',
                fontWeight: 600,
                fontSize: '0.85rem',
                boxShadow: 'none',
                ml: -0.5,
                '&:hover': {
                  bgcolor: '#6B0F2A',
                  boxShadow: 'none'
                }
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>

        {/* Trending Categories */}
        <Box sx={{ mb: 4 }}>
          <Typography
            sx={{
              fontSize: '1rem',
              fontWeight: 600,
              color: '#000',
              mb: 2,
              fontFamily: 'Arial, sans-serif'
            }}
          >
            Trending Categories
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
            {trendingCategories.map((category, idx) => (
              <Link
                key={idx}
                href="#"
                sx={{
                
                  fontSize: '0.8rem',
                  color: '#555',
                  textDecoration: 'none',
                  '&:hover': { color: '#C41E3A' },
                  '&:after': idx !== trendingCategories.length - 1 ? { content: '"|"', ml: 1.5, color: '#ddd' } : {}
                }}
              >
                {category}
              </Link>
            ))}
          </Box>
        </Box>

        {/* Wedding Collection */}
        <Box sx={{ mb: 4 }}>
          <Typography
            sx={{
              fontSize: '1rem',
              fontWeight: 600,
              color: '#000',
              mb: 2,
              fontFamily: 'Arial, sans-serif'
            }}
          >
            Trending Wedding Collection
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
            {weddingCollection.map((item, idx) => (
              <Link
                key={idx}
                href="#"
                sx={{
                  fontSize: '0.8rem',
                  color: '#555',
                  textDecoration: 'none',
                  '&:hover': { color: '#C41E3A' },
                  '&:after': idx !== weddingCollection.length - 1 ? { content: '"|"', ml: 1.5, color: '#ddd' } : {}
                }}
              >
                {item}
              </Link>
            ))}
          </Box>
        </Box>

        {/* Festive Collection */}
        <Box sx={{ mb: 4 }}>
          <Typography
            sx={{
              fontSize: '1rem',
              fontWeight: 600,
              color: '#000',
              mb: 2,
              fontFamily: 'Arial, sans-serif'
            }}
          >
            Trending Festive Collection
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
            {festiveCollection.map((item, idx) => (
              <Link
                key={idx}
                href="#"
                sx={{
                  fontSize: '0.8rem',
                  color: '#555',
                  textDecoration: 'none',
                  '&:hover': { color: '#C41E3A' },
                  '&:after': idx !== festiveCollection.length - 1 ? { content: '"|"', ml: 1.5, color: '#ddd' } : {}
                }}
              >
                {item}
              </Link>
            ))}
          </Box>
        </Box>

        {/* Fashion Accessories */}
        <Box sx={{ mb: 5 }}>
          <Typography
            sx={{
              fontSize: '1rem',
              fontWeight: 600,
              color: '#000',
              mb: 2,
              fontFamily: 'Arial, sans-serif'
            }}
          >
            Trending Fashion Accessories
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
            {fashionAccessories.map((item, idx) => (
              <Link
                key={idx}
                href="#"
                sx={{
                  fontSize: '0.8rem',
                  color: '#555',
                  textDecoration: 'none',
                  '&:hover': { color: '#C41E3A' },
                  '&:after': idx !== fashionAccessories.length - 1 ? { content: '"|"', ml: 1.5, color: '#ddd' } : {}
                }}
              >
                {item}
              </Link>
            ))}
          </Box>
        </Box>

        {/* Bottom Section - Payment & Copyright */}
        <Box
          sx={{
            borderTop: '1px solid #E0E0E0',
            pt: 3,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2
          }}
        >
          {/* Payment Icons */}
          <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
            {paymentIcons.map((payment, idx) => (
              <Box
                key={idx}
                sx={{
                  width: 40,
                  height: 26,
                  bgcolor: '#000',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: 600
                }}
              >
                {payment.icon}
              </Box>
            ))}
          </Box>

          {/* Copyright */}
          <Typography sx={{ fontSize: '0.8rem', color: '#666' }}>
            © 2025 AndaazFashion. All Rights Reserved
          </Typography>

          {/* Chat Icon */}
          <Box
            sx={{
              position: 'fixed',
              bottom: 20,
              right: 20,
              bgcolor: '#C41E3A',
              color: '#fff',
              width: 56,
              height: 56,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(196, 30, 58, 0.4)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)',
                boxShadow: '0 6px 16px rgba(196, 30, 58, 0.5)'
              }
            }}
          >
            <ChatBubbleIcon />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;