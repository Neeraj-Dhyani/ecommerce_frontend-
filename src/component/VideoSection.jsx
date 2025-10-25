// npm install @mui/material @emotion/react @emotion/styled

import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent
} from "@mui/material";

const VideoSection = () => {
  return (
    <Box
      sx={{
        bgcolor: "#f9f9f9",
        py: { xs: 6, md: 8 },
        px: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Card
          elevation={4}
          sx={{
            borderRadius: 4,
            overflow: "hidden",
            bgcolor: "#fff",
            boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
            p: { xs: 3, md: 5 },
          }}
        >
          <CardContent>
            <Grid
              container
              spacing={4}
              alignItems="center"
              justifyContent="center"
            >
              {/* Left Side */}
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    textAlign: { xs: "center", md: "left" },
                    pr: { md: 3 },
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      color: "#000",
                      fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.6rem" },
                      lineHeight: 1.2,
                      mb: 3,
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    How to Wear a Ready-Made Saree?
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      color: "#333",
                      fontSize: { xs: "1rem", md: "1.15rem" },
                      fontWeight: 400,
                      lineHeight: 1.6,
                      mb: 4,
                    }}
                  >
                    Get Wedding-Ready in Minutes with Instant Pre-Draped Sarees!
                  </Typography>

                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#000",
                      color: "#fff",
                      fontWeight: 700,
                      borderRadius: 0,
                      px: { xs: 4, md: 5 },
                      py: { xs: 1.3, md: 1.6 },
                      letterSpacing: 1,
                      textTransform: "uppercase",
                      boxShadow: "none",
                      "&:hover": {
                        bgcolor: "#333",
                        boxShadow: "none",
                      },
                    }}
                  >
                    SHOP PRE DRAPE SAREES
                  </Button>
                </Box>
              </Grid>

              {/* Right Side - Video */}
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    position: "relative",
                    border: "2px solid #4A90E2",
                    borderRadius: 2,
                    overflow: "hidden",
                    height: { xs: 320, sm: 400, md: 460 },
                    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                  }}
                >
                  {/* Video */}
                  <Box
                    component="video"
                    src="https://youtube.com/shorts/CD-gJ4sQjsQ?si=TpWLykuqd9_nyBpl"
                    autoPlay
                    loop
                    muted
                    playsInline
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />

                  {/* Badge */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      bgcolor: "#000",
                      color: "#fff",
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: "1rem",
                      border: "2px solid #fff",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
                    }}
                  >
                    A
                  </Box>

                  {/* Bottom overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      bgcolor: "rgba(255, 255, 255, 0.85)",
                      textAlign: "center",
                      p: 1.5,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#666",
                        fontSize: { xs: "0.85rem", md: "0.95rem" },
                        fontWeight: 500,
                      }}
                    >
                      our readymade or pre-stitched saree options
                    </Typography>
                  </Box>

                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default VideoSection;
    