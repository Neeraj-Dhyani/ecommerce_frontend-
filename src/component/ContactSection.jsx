    // Install dependencies first:
    // npm install @mui/material @emotion/react @emotion/styled @mui/icons-material

    import React from 'react';
    import { 
    Box, 
    Container, 
    Typography, 
    Button,
    Grid
    } from '@mui/material';
    import LocationOnIcon from '@mui/icons-material/LocationOn';
    import InstagramIcon from '@mui/icons-material/Instagram';
    import FacebookIcon from '@mui/icons-material/Facebook';
    import PinterestIcon from '@mui/icons-material/Pinterest';
    import LinkedInIcon from '@mui/icons-material/LinkedIn';
    import YouTubeIcon from '@mui/icons-material/YouTube';

    const ContactSection = () => {
    const contactItems = [
        {
        id: 1,
        title: 'Need Help?',
        subtitle: 'Get in touch +1 (855) 741 1269',
        description: '24/7 Available customer service',
        buttonText: 'Call Us'
        },
        {
        id: 2,
        title: 'Track your order',
        subtitle: null,
        description: 'Want to know if your order is processed and dispatched?',
        buttonText: 'Order Tracking'
        },
        {
        id: 3,
        title: 'For Sale Inquiry',
        subtitle: null,
        description: "Don't hesitate",
        buttonText: 'Email Us'
        },
        {
        id: 4,
        title: 'Chat with Us',
        subtitle: null,
        description: 'With our expert designer',
        buttonText: 'Live Chat'
        },
        {
        id: 5,
        title: 'WhatsApp',
        subtitle: null,
        description: 'You can whatsapp +1 (646) 498-3451',
        buttonText: 'WhatsApp'
        }
    ];

    const socialIcons = [
        { id: 1, icon: <InstagramIcon sx={{ fontSize: '1.4rem' }} />, color: '#E4405F' },
        { id: 2, icon: <FacebookIcon sx={{ fontSize: '1.4rem' }} />, color: '#1877F2' },
        { id: 3, icon: <PinterestIcon sx={{ fontSize: '1.4rem' }} />, color: '#E60023' },
        { id: 4, icon: <LinkedInIcon sx={{ fontSize: '1.4rem' }} />, color: '#0A66C2' },
        { id: 5, icon: <Box component="span" sx={{ fontSize: '1.3rem', fontWeight: 700 }}>𝕏</Box>, color: '#000' },
        { id: 6, icon: <YouTubeIcon sx={{ fontSize: '1.4rem' }} />, color: '#FF0000' },
        { id: 7, icon: <Box component="span" sx={{ fontSize: '1.2rem' }}>♪</Box>, color: '#000' }
    ];

    const stores = [
        { id: 1, name: 'Andaaz Fashion', country: 'USA' },
        { id: 2, name: 'Andaaz Fashion', country: 'UK' },
        { id: 3, name: 'Andaaz Fashion', country: 'MY' },
        { id: 4, name: 'Andaaz Fashion', country: 'FR' }
    ];
        
    return (
        <Box sx={{ bgcolor: '#faf0f0ff', py: { xs: 4, md: 9 }, px: 2}}>
        <Container maxWidth="xl">
            <Grid container spacing={3} justifyContent="center">
            {/* Left Side - Need Help Section */}
            <Grid item xs={12} md={5.5}>
                <Box
                sx={{
                    bgcolor: '#ffffffff',
                    borderRadius: '8px',
                    p: { xs: 3, md: 3.5 },
                    height: '100%'
                }}
                >
                {contactItems.map((item, index) => (
                    <Box
                    key={item.id}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: index !== contactItems.length - 1 ? 3 : 0
                    }}
                    >
                    {/* Left Content */}
                    <Box sx={{ flex: 1, pr: 2 }}>
                        <Typography
                        sx={{
                            fontSize: { xs: '1rem', md: '1.1rem' },
                           
                              color: "#333333",     
                            mb: item.subtitle ? 0.3 : 0.5,
                            fontFamily: 'Arial, sans-serif'
                        }}
                         style={{ fontFamily: "'Work Sans', sans-serif" }}
                        >
                        {item.title}
                        </Typography>
                        {item.subtitle && (
                        <Typography
                            sx={{
                            fontSize: { xs: '0.9rem', md: '0.95rem' },
                                
                          color: "#676666ff",   
                            mb: 0.3
                            }}
                             style={{ fontFamily: "'Work Sans', sans-serif" }}
                        >
                            {item.subtitle}
                        </Typography>
                        )}
                        <Typography
                        sx={{
                            fontSize: { xs: '0.8rem', md: '0.85rem' },
                            color: '#333333 ',
                            lineHeight: 1.4
                        }}
                         style={{ fontFamily: "'Work Sans', sans-serif" }}
                        >
                        {item.description}
                        </Typography>
                    </Box>

                    {/* Right Button */}
                    <Button
                        variant="outlined"
                        sx={{
                        borderColor: '#333',
                        color: '#333333',
                       
                        fontSize: { xs: '0.8rem', md: '0.85rem' },
                        px: { xs: 2, md: 3 },
                        py: { xs: 0.8, md: 1 },
                        borderRadius: '30px',
                        textTransform: 'none',
                        minWidth: { xs: '100px', md: '130px' },
                        whiteSpace: 'nowrap',
                        borderWidth: '1.5px',
                        '&:hover': {
                            borderColor: '#FF4081',
                            bgcolor: '#FF4081',
                            color: '#fff',
                            borderWidth: '1.5px'
                        }
                        }}
                         style={{ fontFamily: "'Work Sans', sans-serif" }}
                    >
                        {item.buttonText}
                    </Button>
                    </Box>
                ))}
                </Box>
            </Grid>
                
            {/* Right Side - Address & Social */}
            <Grid item xs={12} md={5.5}>
                <Box
                sx={{
                    bgcolor: '#ffffffff',
                    borderRadius: '8px',
                    p: { xs: 3, md: 3.5 },
                    height: '100%'
                }}
                >
                {/* Address Section */}
                <Typography
                    sx={{
                    fontSize: { xs: '1.2rem', md: '1.35rem' },
         
                    color: '#333333',
                    mb: 2,
          
                    }}
                     style={{ fontFamily: "'Work Sans', sans-serif" }}  
                >
                    Address
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 0.5 }}>
                    <LocationOnIcon sx={{ color: '#FF4081', fontSize: '1.3rem', mr: 1, mt: 0.2 }} />
                    <Typography
                    sx={{
                        fontSize: { xs: '0.95rem', md: '1rem' },
                        fontWeight: 600,
                        color: '#333333',
                        lineHeight: 1.4
                    }}
                     style={{ fontFamily: "'Work Sans', sans-serif" }}
                    >
                    Andaaz Fashion
                    </Typography>
                </Box>

                <Box sx={{ ml: 4.5 }}
                 style={{ fontFamily: "'Work Sans', sans-serif" }}>
                    <Typography sx={{ fontSize: '0.9rem', color: '#676666FF', mb: 0.2, lineHeight: 1.6 }}>
                    261 W 35th St Suite 704
                    </Typography>
                    <Typography sx={{ fontSize: '0.9rem', color: '#676666FF', mb: 0.2, lineHeight: 1.6 }}>
                    New York, NY 10001
                    </Typography>
                    <Typography sx={{ fontSize: '0.9rem', color: '#676666FF', mb: 1.5, lineHeight: 1.6 }}>
                    United States
                    </Typography>
                    <Typography sx={{ fontSize: '0.85rem', color: '#676666FF', lineHeight: 1.6 }}>
                    For Sale Inquiry: sales@andaazfashion.com
                    </Typography>
                </Box>

                {/* Stay in Touch */}
                <Typography
                    sx={{
                    fontSize: { xs: '1.2rem', md: '1.35rem' },
                   
                    color: '#333333',
                    mt: 3,
                    mb: 2,
             
                    }}
                    style={{ fontFamily: "'Work Sans', sans-serif" }} 
                >
                    Stay in touch
                </Typography>

                <Box sx={{ display: 'flex', gap: 1.5, mb:3, flexWrap: 'wrap' }}>
                    {socialIcons.map((social) => (
                    <Box
                        key={social.id}
                        component="a"
                        href="#"
                        sx={{
                        width: 42,
                        height: 42,
                        borderRadius: '50%',
                        border: '1.5px solid #D0D0D0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#555',
                        transition: 'all 0.3s ease',
                        textDecoration: 'none',
                        cursor: 'pointer',
                        '&:hover': {
                            transform: 'translateY(-3px)',
                            borderColor: '#FF4081',
                            bgcolor: '#FF4081',
                            color: '#fff',
                            boxShadow: '0 4px 12px rgba(196, 30, 58, 0.3)'
                        }
                        }}
                         style={{ fontFamily: "'Work Sans', sans-serif" }}
                    >
                        {social.icon}
                    </Box>
                    ))}
                </Box>

                {/* Worldwide Stores */}
                <Typography
                    sx={{
                    fontSize: { xs: '1.2rem', md: '1.35rem' },
                    
                    color: '#333333 ',
                    mb: 2,
                    fontFamily: 'Arial, sans-serif'
                    }}
                     style={{ fontFamily: "'Work Sans', sans-serif" }}  
                >
                    Worldwide stores
                </Typography>

                <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                    {stores.map((store) => (
                    <Box key={store.id} sx={{ textAlign: 'center', minWidth: '70px' }}>
                        <Typography sx={{ fontSize: '0.85rem', fontWeight: 500, color: '#000', mb: 0.3 }}>
                        {store.name}
                        </Typography>
                        <Typography sx={{ fontSize: '0.8rem', color: '#666' }}>
                        {store.country}
                        </Typography>
                    </Box>
                    ))}
                </Box>
                </Box>
            </Grid>
            </Grid>
        </Container>
        </Box>
    );
    };

    export default ContactSection;  