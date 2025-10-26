import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  IconButton,
  Button,
  Container,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Paper,
  Divider,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { useAuth } from "./login_component/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddtoCart() {
  const token = localStorage.getItem("token");
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const cart = user?.cart || [];
  const [totalPrice, setTotalPrice] = useState(0);
  const [shippingMode, setShippingMode] = useState("pickup");
  const shippingCost = shippingMode === "delivery" ? 9.9 : 0;

  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(total);
  }, [cart]);

  const removeFromCart = async (id) => {
    try {
      const res = await axios.delete("http://localhost:5000/removetocart", {
        headers: {
          Authorization: "Bearer " + token,
        },
        data: {
          product_id: id,
        },
      });
      alert(res.data.massage);
    } catch (err) {
      alert(err?.response?.data?.msg || "Error removing item");
    }
  };

  const addquantity = async (id) => {
    try {
      const res = await axios.put(
        "http://localhost:5000/addquantity",
        { product_id: id },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      alert(res.data.message);
    } catch (err) {
      console.log(err);
    }
  };

  const decreasequantity = async (id) => {
    try {
      const res = await axios.put(
        "http://localhost:5000/decreasequantity",
        { product_id: id },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      alert(res.data.message);
    } catch (err) {
      console.log(err);
    }
  };

  const place_order_submit_handler = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/placeOrder",
        { cart, totalPrice: totalPrice + shippingCost },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      alert(res.data.message);
    } catch (err) {
      alert(err?.response?.data?.message || "Error placing order");
    }
  };

  return (
    <Box sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh", py: 4 }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Typography
            variant="h3"
            sx={{
             
              color: "#333333",
              fontSize: { xs: "1rem", md: "2rem" },
            }}
          >
            My Cart
          </Typography>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate("/")}
            sx={{
              color: "#333333",
              textTransform: "none",
              fontSize: "1rem",
    
              "&:hover": {
                backgroundColor: "transparent",
                color: "#494343ff",
              },
            }}
          >
            Continue shopping
          </Button>
        </Box>

        {/* Table Header */}
        <Box
          sx={{
            display: { xs: "none", md: "grid" },
            gridTemplateColumns: "2fr 1fr 1fr 1fr 0.5fr",
            gap: 2,
            px: 3,
            py: 2,
            mb: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: "#333333", fontWeight: 600 }}>
            PRODUCT
          </Typography>
          <Typography variant="body2" sx={{ color: "#333333", fontWeight: 600 }}>
            PRICE
          </Typography>
          <Typography variant="body2" sx={{ color: "#333333", fontWeight: 600 }}>
            QTY
          </Typography>
          <Typography variant="body2" sx={{ color: "#333333", fontWeight: 600 }}>
            TOTAL
          </Typography>
          <Typography variant="body2" sx={{ color: "#333333", fontWeight: 600 }}>
            {" "}
          </Typography>
        </Box>

        {/* Cart Items */}
        {cart.length === 0 ? (
          <Paper sx={{ p: 6, textAlign: "center" }}>
            <Typography variant="h6" color="text.secondary">
              Your cart is empty
            </Typography>
            <Button
              variant="contained"
              sx={{ mt: 3, backgroundColor: "#FF4081", "&:hover": { backgroundColor: "#E7356F" } }}
              onClick={() => navigate("/")}
            >
              Start Shopping
            </Button> 
          </Paper>
        ) : (
          cart.map((item) => (
            <Card
              key={item.product._id}
              sx={{
                mb: 2,
                backgroundColor: "#fff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                borderRadius: 2,
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                },
              }}
            >
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    md: "2fr 1fr 1fr 1fr 0.5fr",
                  },
                  gap: 2,
                  p: 3,
                  alignItems: "center",
                }}
              >
                {/* Product Info */}
                <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
                  <Box
                    sx={{
                      width: 120,
                      height: 120,
                      backgroundColor: "#f5f5f5",
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Box
                      component="img"
                      src={`http://localhost:5000/${item.image}`}
                      alt={item.product.title}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: 2,
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        fontSize: "1.1rem",
                        mb: 0.5,
                      }}
                    >
                      {item.product.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#999", mb: 0.5 }}
                    >
                      #{item.product._id}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#666" }}>
                      Color: {item.product.color || "Default"} // Extras:{" "}
                      {item.product.extras || "Standard"}
                    </Typography>
                  </Box>
                </Box>

                {/* Price */}
                <Box>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 600,
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    ₹{item.price.toFixed(2)}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#666",
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    + ₹{(item.price * 0.1).toFixed(2)} extras
                  </Typography>
                </Box>

                {/* Quantity Controls */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <IconButton
                    onClick={() => decreasequantity(item.product._id)}
                    sx={{
                      border: "1px solid #e0e0e0",
                      borderRadius: 1,
                      width: 32,
                      height: 32,
                      "&:hover": {
                        backgroundColor: "#f5f5f5",
                      },
                    }}
                  >
                    <RemoveIcon sx={{ fontSize: 18 }} />
                  </IconButton>
                  <Typography
                    sx={{
                      minWidth: 40,
                      textAlign: "center",
                      fontWeight: 600,
                      fontSize: "1.1rem",
                    }}
                  >
                    {item.quantity}
                  </Typography>
                  <IconButton
                    onClick={() => addquantity(item.product._id)}
                    sx={{
                      border: "1px solid #e0e0e0",
                      borderRadius: 1,
                      width: 32,
                      height: 32,
                      "&:hover": {
                        backgroundColor: "#f5f5f5",
                      },
                    }}
                  >
                    <AddIcon sx={{ fontSize: 18 }} />
                  </IconButton>
                </Box>

                {/* Total */}
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      fontSize: "1.2rem",
                    }}
                  >
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </Typography>
                </Box>

                {/* Delete Button */}
                <Box sx={{ textAlign: "right" }}>
                  <IconButton
                    onClick={() => removeFromCart(item._id)}
                    sx={{
                      color: "#999",
                      "&:hover": {
                        color: "#E7356F ",
                        backgroundColor: "rgba(244, 67, 54, 0.08)",
                      },
                    }}
                  >
                    <DeleteOutlineIcon />
                  </IconButton>
                </Box>
              </Box>
            </Card>
          ))
        )}

        {cart.length > 0 && (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.5fr 1fr" },
              gap: 3,
              mt: 4,
            }}
          >
            {/* Shipping Mode */}
            <Paper
              sx={{
                p: 4,
                backgroundColor: "#f9f9f9",
                borderRadius: 3,
                boxShadow: "none",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, mb: 3, fontSize: "1.3rem" }}
              >
                Choose shipping mode:
              </Typography>
              <FormControl component="fieldset" sx={{ width: "100%" }}>
                <RadioGroup
                  value={shippingMode}
                  onChange={(e) => setShippingMode(e.target.value)}
                >
                  <FormControlLabel
                    value="pickup"
                    control={
                      <Radio
                        sx={{
                          color: "#000",
                          "&.Mui-checked": { color: "#E7356F" },
                        }}
                      />
                    }
                    label={
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Typography sx={{ fontWeight: 500 }}>
                          Store pickup ( In 20 min )
                        </Typography>
                        <Typography
                          sx={{
                            color: "#4caf50",
                            fontWeight: 700,
                            ml: 1,
                          }}
                        >
                          • FREE
                        </Typography>
                      </Box>
                    }
                    sx={{
                      backgroundColor: shippingMode === "pickup" ? "#fff" : "transparent",
                      borderRadius: 2,
                      p: 2,
                      mb: 2,
                      border: "1px solid",
                      borderColor: shippingMode === "pickup" ? "#E7356F" : "#e0e0e0",
                      transition: "all 0.2s ease",
                    }}
                  />
                  <FormControlLabel
                    value="delivery"
                    control={
                      <Radio
                        sx={{
                          color: "#000",
                          "&.Mui-checked": { color: "#000" },
                        }}
                      />
                    }
                    label={
                      <Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                          <Typography sx={{ fontWeight: 500 }}>
                            Delivery at home ( Under 2 - 4 day )
                          </Typography>
                          <Typography sx={{ fontWeight: 700, ml: 1 }}>
                            • ₹9.90
                          </Typography>
                        </Box>
                        <Typography
                          variant="body2"
                          sx={{ color: "#999", mt: 0.5, fontSize: "0.85rem" }}
                        >
                          At 45 Glenridge Ave. Brooklyn, NY 11220
                        </Typography>
                      </Box>
                    }
                    sx={{
                      backgroundColor: shippingMode === "delivery" ? "#fff" : "transparent",
                      borderRadius: 2,
                      p: 2,
                      border: "1px solid",
                      borderColor: shippingMode === "delivery" ? "#000" : "#e0e0e0",
                      transition: "all 0.2s ease",
                    }}
                  />
                </RadioGroup>
              </FormControl>
            </Paper>

            {/* Order Summary */}
            <Paper
              sx={{
                p: 4,
                backgroundColor: "#fff",
                borderRadius: 3,
                boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
                height: "fit-content",
              }}
            >
              <Box sx={{ mb: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 2,
                  }}
                >
                  <Typography sx={{ color: "#999", fontWeight: 500 }}>
                    SUBTOTAL TTC
                  </Typography>
                  <Typography sx={{ fontWeight: 600 }}>
                    ₹{totalPrice.toFixed(2)}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 2,
                  }}
                >
                  <Typography sx={{ color: "#999", fontWeight: 500 }}>
                    SHIPPING
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      color: shippingCost === 0 ? "#4caf50" : "#000",
                    }}
                  >
                    {shippingCost === 0 ? "Free" : `₹${shippingCost.toFixed(2)}`}
                  </Typography>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 3,
                  }}
                >
                  <Typography sx={{ fontWeight: 700, fontSize: "1.1rem" }}>
                    TOTAL
                  </Typography>
                  <Typography sx={{ fontWeight: 700, fontSize: "1.3rem" }}>
                    ₹{(totalPrice + shippingCost).toFixed(2)}
                  </Typography>
                </Box>
              </Box>
              <Button
                fullWidth
                variant="contained"
                onClick={place_order_submit_handler}
                sx={{
                  backgroundColor: "#E7356F",
                  color: "#fff",
                  py: 2,
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  textTransform: "none",
                  borderRadius: 2,
                  boxShadow: "0 4px 12px rgba(255,68,68,0.3)",
                  "&:hover": {
                    backgroundColor: "#E7356F",
                    boxShadow: "0 6px 20px rgba(255,68,68,0.4)",
                  },
                }}
              >
                Checkout ₹{(totalPrice + shippingCost).toFixed(2)}
              </Button>
            </Paper>
          </Box>
        )}
      </Container>
    </Box>
  );
}