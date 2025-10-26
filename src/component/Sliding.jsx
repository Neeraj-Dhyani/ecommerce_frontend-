// First install these packages:
// npm install @mui/material @emotion/react @emotion/styled @mui/icons-material

import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  MobileStepper,
  useTheme,
  Fade,
  Slide,
} from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const Sliding = () => {
  const theme = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      id: 1,
      title: "WEDDING DRESSES",
      discount: "ADDITIONAL 10% DISCOUNT",
      coupon: "WEDDING",
      image:
        "https://images.unsplash.com/photo-1519657337289-077653f724ed?w=1200&q=80",
      buttons: ["WEDDING", "BRIDAL"],
    },
    {
      id: 2,
      title: "BRIDAL COLLECTION",
      discount: "SPECIAL OFFER 15% OFF",
      coupon: "BRIDAL15",
      image:
        "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=1200&q=80",
      buttons: ["SHOP NOW", "VIEW ALL"],
    },
    {
      id: 3,
      title: "DESIGNER LEHENGAS",
      discount: "EXCLUSIVE 20% DISCOUNT",
      coupon: "DESIGNER20",
      image:
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1200&q=80",
      buttons: ["EXPLORE", "CUSTOMIZE"],
    },
  ];

  const maxSlides = slides.length;

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        bgcolor: "black",
      }}
    >
      {/* Slides Container */}
      <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
        {slides.map((slide, index) => (
          <Fade
            key={slide.id}
            in={index === currentSlide}
            timeout={700}
            style={{
              position: "absolute",
              inset: 0,
              display: index === currentSlide ? "block" : "none",
            }}
          >
            <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
              {/* Background Image */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "brightness(0.7)",
                  transition: "transform 0.7s ease-in-out",
                  transform:
                    index === currentSlide ? "scale(1)" : "scale(1.05)",
                }}
              />

              {/* Gradient Overlay */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.4), transparent)",
                }}
              />

              {/* Content */}
              <Box
                sx={{
                  position: "relative",
                  zIndex: 10,
                  height: "90%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Container maxWidth="lg">
                  <Box sx={{ maxWidth: "700px" }}>
                    {/* Title */}
                    <Slide
                      direction="right"
                      in={index === currentSlide}
                      timeout={700}
                      style={{ transitionDelay: "200ms" }}
                    >
                      <Typography
                        variant="h1"
                        sx={{
                          fontSize: { xs: "2rem", md: "4rem" },

                          color: "white",
                          mb: 3,
                          letterSpacing: "0.1em",
                        }}
                        style={{ fontFamily: "'Work Sans', sans-serif" }}
                      >
                        {slide.title}
                      </Typography>
                    </Slide>

                    {/* Discount */}
                    <Slide
                      direction="right"
                      in={index === currentSlide}
                      timeout={700}
                      style={{ transitionDelay: "400ms" }}
                    >
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: { xs: "1.3rem", md: "2.3  rem" },

                          color: "white",
                          mb: 2,
                        }}
                        style={{ fontFamily: "'Work Sans', sans-serif" }}
                      >
                        {slide.discount}
                      </Typography>
                    </Slide>

                    {/* Coupon Code */}
                    <Slide
                      direction="right"
                      in={index === currentSlide}
                      timeout={700}
                      style={{ transitionDelay: "600ms" }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: { xs: "1rem", md: "1.25rem" },
                          color: "rgba(255,255,255,0.9)",
                          mb: 4,
                        }}
                      >
                        Coupon Code:{" "}
                        <Box
                          component="span"
                          sx={{
                            color: "#ec4899",
                          }}
                        >
                          {slide.coupon}
                        </Box>
                      </Typography>
                    </Slide>

                    {/* Buttons */}
                    <Slide
                      direction="right"
                      in={index === currentSlide}
                      timeout={700}
                      style={{ transitionDelay: "800ms" }}
                    >
                      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                        {slide.buttons.map((btn, i) => (
                          <Button
                            key={i}
                            variant="contained"
                            sx={{
                              bgcolor: "#db2777",
                              color: "white",
                              px: 4,
                              py: 1.5,

                              fontSize: "1rem",
                              "&:hover": {
                                bgcolor: "#be185d",
                                transform: "scale(1.05)",
                              },
                              transition: "all 0.3s",
                              boxShadow: 3,
                            }}
                          >
                            {btn}
                          </Button>
                        ))}
                      </Box>
                    </Slide>
                  </Box>
                </Container>
              </Box>
            </Box>
          </Fade>
        ))}
      </Box>

      {/* Navigation Arrows */}
      <IconButton
        onClick={prevSlide}
        sx={{
          position: "absolute",
          left: 16,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 20,
          bgcolor: "rgba(0,0,0,0.3)",
          backdropFilter: "blur(10px)",
          color: "white",
          "&:hover": {
            bgcolor: "rgba(0,0,0,0.5)",
            transform: "translateY(-50%) scale(1.1)",
          },
          transition: "all 0.3s",
        }}
        aria-label="Previous slide"
      >
        <KeyboardArrowLeft sx={{ fontSize: 40 }} />
      </IconButton>

      <IconButton
        onClick={nextSlide}
        sx={{
          position: "absolute",
          right: 16,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 20,
          bgcolor: "rgba(0,0,0,0.3)",
          backdropFilter: "blur(10px)",
          color: "white",
          "&:hover": {
            bgcolor: "rgba(0,0,0,0.5)",
            transform: "translateY(-50%) scale(1.1)",
          },
          transition: "all 0.3s",
        }}
        aria-label="Next slide"
      >
        <KeyboardArrowRight sx={{ fontSize: 40 }} />
      </IconButton>

      {/* Dots Navigation - Using MobileStepper */}
      <MobileStepper
        variant="dots"
        steps={maxSlides}
        position="static"
        activeStep={currentSlide}
        sx={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 20,
          bgcolor: "transparent",
          "& .MuiMobileStepper-dots": {
            gap: 1.5,
          },
          "& .MuiMobileStepper-dot": {
            bgcolor: "rgba(255,255,255,0.5)",
            width: 12,
            height: 12,
            transition: "all 0.3s",
            cursor: "pointer",
            "&:hover": {
              bgcolor: "rgba(255,255,255,0.8)",
            },
          },
          "& .MuiMobileStepper-dotActive": {
            bgcolor: "#db2777",
            width: 48,
            height: 12,
            borderRadius: 6,
          },
        }}
        backButton={<Box />}
        nextButton={<Box />}
      />

      {/* Custom Clickable Dots */}
      <Box
        sx={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 21,
          display: "flex",
          gap: 1.5,
        }}
      >
        {slides.map((_, index) => (
          <Box
            key={index}
            onClick={() => goToSlide(index)}
            sx={{
              width: index === currentSlide ? 48 : 12,
              height: 12,
              borderRadius: 6,
              cursor: "pointer",
              transition: "all 0.3s",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Sliding;
