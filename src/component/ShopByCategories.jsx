import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  Button,
  Grid,
} from "@mui/material";

const ShopByCategories = () => {
  const roleCategories = [
    {
      id: 1,
      image:
        "https://i.pinimg.com/736x/4c/c6/c4/4cc6c4d92f0ece037cb5d398b893cd1c.jpg",
      title: "BRIDAL LEHENGA",
      buttonText: "SHOP NOW",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/736x/2d/95/ef/2d95efd13bc94f7b5e594a5483058c66.jpg",
      title: "BRIDES MOM",
      buttonText: "SHOP NOW",
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/1200x/45/6b/20/456b20bba9422eaf6051910703509c3f.jpg",
      title: "BRIDESMAIDS DRESSES",
      buttonText: "SHOP NOW",
    },
    {
      id: 4,
      image:
        "https://i.pinimg.com/1200x/8a/eb/c9/8aebc91ec47e9474703bfcc89f8e08c9.jpg",
      title: "GROOM",
      buttonText: "SHOP NOW",
    },
  ];

  const occasionCategories = [
    {
      id: 1,
      image:
        "https://i.pinimg.com/736x/41/25/68/41256882b3a051861f05a6b673808030.jpg",
      title: "MEHNDI OUTFITS",
      buttonText: "SHOP NOW",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/1200x/81/22/7c/81227cf284039f0eb89c25fa026f82f0.jpg",
      title: "HALDI EVENT",
      buttonText: "SHOP NOW",
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/1200x/56/3b/df/563bdf2dac098559148c23b5b75ca957.jpg",
      title: "SANGEET OUTFITS",
      buttonText: "SHOP NOW",
    },
    {
      id: 4,
      image:
        "https://i.pinimg.com/736x/c8/86/6f/c8866f5413af3d30ee95648f988766df.jpg",
      title: "RECEPTION LOOKS",
      buttonText: "SHOP NOW",
    },
    {
      id: 5,
      image:
        "https://i.pinimg.com/1200x/7d/28/79/7d287951a65fea92866c0d9cc519ad79.jpg",
      title: "WEDDING GUEST",
      buttonText: "SHOP NOW",
    },
    {
      id: 6,
      image:
        "https://i.pinimg.com/1200x/a7/39/c8/a739c8618e5bcfedf39590c3de57fd70.jpg",
      title: "ENGAGEMENT LOOKS",
      buttonText: "SHOP NOW",
    },
    {
      id: 7,
      image:
        "https://i.pinimg.com/1200x/a7/39/c8/a739c8618e5bcfedf39590c3de57fd70.jpg",
      title: "ENGAGEMENT LOOKS",
      buttonText: "SHOP NOW",
    },
  ];

  const CategoryCard = ({ image, title, buttonText }) => (
    <Card
      elevation={0}
      sx={{
        position: "relative",
        height: "100%",
        borderRadius: 0,
        overflow: "hidden",
        cursor: "pointer",
        transition: "all 0.5s ease",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
          "& .overlay": { bgcolor: "rgba(0,0,0,0.55)" },
          "& img": { transform: "scale(1.08)" },
        },
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          transition: "transform 0.6s ease",
        }}
      />
      <Box
        className="overlay"
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(0, 0, 0, 0.3)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          pb: 4,
          transition: "all 0.4s ease",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontWeight: 700,
            fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.5rem" },
            textAlign: "center",
            textShadow: "0 3px 8px rgba(0,0,0,0.7)",
            mb: 1.5,
            px: 2,
          }}
        >
          {title}
        </Typography>
        <Button
          variant="outlined"
          sx={{
            color: "white",
            borderColor: "white",
            fontWeight: 600,
            fontSize: "0.85rem",
            px: 3,
            py: 0.8,
            borderWidth: "2px",
            textTransform: "uppercase",
            "&:hover": {
              bgcolor: "white",
              color: "#000",
            },
          }}
        >
          {buttonText}
        </Button>
      </Box>
    </Card>
  );

  return (
    <Box sx={{ bgcolor: "#fff", py: { xs: 4, md: 7 } }}>
      <Container maxWidth="xl" sx={{ px: 0 }}>
        {/* Shop by Role */}
        <Box sx={{ mb: { xs: 6, md: 8 }, px: { xs: 2, md: 3 } }}>
          <Typography
            sx={{
              fontWeight: 600,
              color: "#000",
              fontSize: { xs: "1.5rem", md: "1.75rem" },
              mb: 3,
              fontFamily: "serif",
            }}
          >
            Shop by Role
          </Typography>

          <Grid container spacing={2}>
            {roleCategories.map((category) => (
              <Grid item xs={6} sm={6} md={3} key={category.id}>
                <Box sx={{ height: { xs: 260, sm: 320, md: 360 } }}>
                  <CategoryCard {...category} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Shop by Occasion */}
        <Box sx={{ px: { xs: 2, md: 3 } }}>
          <Typography
            sx={{
              fontWeight: 600,
              color: "#000",
              fontSize: { xs: "1.5rem", md: "1.75rem" },
              mb: 3,
              fontFamily: "serif",
            }}
          >
            Shop by Occasion
          </Typography>

          {/* Top row: 4 images */}
          <Grid container spacing={2} sx={{ mb: 2 }}>
            {occasionCategories.slice(0, 6).map((category) => (
              <Grid item xs={6} sm={6} md={3} key={category.id}>
                <Box sx={{ height: { xs: 260, sm: 360, md: 420 } }}>
                  <CategoryCard {...category} />
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Bottom row: 2 large rectangular images */}
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
            sx={{ mt: { xs: 1, md: 2 } }}
          >
                
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ShopByCategories;
