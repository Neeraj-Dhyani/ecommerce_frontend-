
import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
  Paper,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; // if not used, you can remove this line

export default function Login() {
  const [userdata, setuserdata] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handlechange = (e) => {
    setuserdata((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submithandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        userdata,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      setuserdata({ username: "", password: "" });
      const token = response.data.token;
      localStorage.setItem("token", token);
      alert(response.data.msg);
      navigate("/");
    } catch (err) {
      if (err.response) {
        alert(err.response.data.msg);
      } else {
        alert("Network Error - Please try again.");
      }
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #ff5a5a, #ff9b9b)",
        p: 3,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          display: "flex",
          borderRadius: 4,
          overflow: "hidden",
          width: "100%",
          maxWidth: 950,
          height: { xs: "auto", md: 550 },
          bgcolor: "#fff",
        }}
      >
        {/* Left Side - Form */}
        <Box
          sx={{
            flex: 1,
            p: { xs: 4, sm: 6 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            fontWeight={700}
            color="error"
            mb={1}
            textAlign="left"
          >
            Login
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", mb: 4, textAlign: "left" }}
          >
            Welcome back! Please login to your account.
          </Typography>

          <Box component="form" onSubmit={submithandler} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              name="username"
              type="email"
              value={userdata.username}
              onChange={handlechange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                },
              }}
            />
            <TextField
              label="Password"
              name="password"
              variant="outlined"
              fullWidth
              type={showPassword ? "text" : "password"}
              margin="normal"
              value={userdata.password}
              onChange={handlechange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                },
              }}
            />

            <Typography align="left" mt={1}>
              <Link
                to="/Forgotpassword"
                style={{
                  textDecoration: "none",
                  color: "#d32f2f",
                  fontWeight: 500,
                }}
              >
                Forgot Password?
              </Link>
            </Typography>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 4,
                borderRadius: 3,
                py: 1.3,
                background: "linear-gradient(135deg, #ff4b4b, #ff7676)",
                fontWeight: 600,
                fontSize: 16,
                textTransform: "none",
                boxShadow: "0 4px 12px rgba(255,75,75,0.4)",
                "&:hover": {
                  background: "linear-gradient(135deg, #e53935, #ff6b6b)",
                },
              }}
            >
              Login
            </Button>

            <Typography align="center" mt={3}>
              <Link
                to="/signup"
                style={{
                  textDecoration: "none",
                  color: "#d32f2f",
                  fontWeight: 500,
                }}
              >
                New user? Click here to register
              </Link>
            </Typography>
          </Box>
        </Box>

        {/* Right Side - Illustration */}
        <Box
          sx={{
            flex: 1,
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "center",
            background:
              "linear-gradient(135deg, rgba(255, 200, 200, 0.2), rgba(255, 240, 240, 0.5))",
          }}
        >
          <Box
            component="img"
            src="https://i.pinimg.com/736x/fd/69/cf/fd69cf72d0f473bb144131b82c9e72cd.jpg"
            alt="Illustration"
            sx={{
              width: "85%",
              maxWidth: 400,
              borderRadius: 2,
            }}
          />
        </Box>
      </Paper>
    </Box>
  );
}
