

import React, { useState } from "react";
import axios from "axios";
import validator from "validator";
import zxcvbn from "zxcvbn";
import {
  Container,
  TextField,
  Grid,
  Button,
  Typography,
  Box,
  LinearProgress,
  Paper,
} from "@mui/material";

export default function Signup() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [strength, setstrength] = useState(0);
  const [feedback, setfeedback] = useState("");

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Email validation
    if (name === "email") {
      if (!validator.isEmail(value)) {
        setErrors((prev) => ({ ...prev, email: "Invalid email address" }));
      } else {
        setErrors((prev) => ({ ...prev, email: "" }));
      }
    }

    // Password validation
    if (name === "password") {
      if (value.length < 8) {
        setErrors((prev) => ({
          ...prev,
          password: "Password must be at least 8 characters",
        }));
        return;
      }

      const result = zxcvbn(value);
      setstrength(result.score);
      setfeedback(result.feedback.suggestions.join(" ") || "Strong password");

      try {
        const res = await axios.post("http://localhost:5000/checkpassword", {
          password: value,
        });
        const count = res.data.count;
        if (count > 0) {
          setErrors((prev) => ({
            ...prev,
            password: `This password has been seen ${count.toLocaleString()} times in breaches.`,
          }));
        } else {
          setErrors((prev) => ({ ...prev, password: "" }));
        }
      } catch (err) {
        console.error("Error checking password:", err);
      }
    }
  };

  const strengthLabels = ["Very Weak", "Weak", "Fair", "Good", "Strong"];
  const strengthColors = ["#d32f2f", "#f57c00", "#fbc02d", "#388e3c", "#2e7d32"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validator.isEmail(userData.email)) {
      setErrors((prev) => ({ ...prev, email: "Invalid email address" }));
      return;
    }
    if (userData.password.length < 8 || errors.password) return;

    try {
      const response = await axios.post(
        "http://localhost:5000/registerUser",
        userData
      );
      alert(response.data.msg);
      setUserData({
        name: "",
        email: "",
        username: "",
        password: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
      });
    } catch (err) {
      if (err.response) {
        alert(err.response.data.msg || "Registration failed");
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
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #ff4d4d, #ff6666, #ff9999)", // red gradient theme
        backgroundSize: "cover",
        p: 2,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          width: "100%",
          maxWidth: 450,
          borderRadius: 4,
          backgroundColor: "#fff",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{
            mb: 3,
            color: "#d32f2f",
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          Create Account
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {[
              "name",
              "email",
              "username",
              "password",
              "phone",
              "address",
              "city",
              "state",
              "zipcode",
              "country",
            ].map((field, index) => (
              <Grid item xs={12} key={index}>
                <TextField
                  fullWidth
                  type={field === "password" ? "password" : "text"}
                  label={field.charAt(0).toUpperCase() + field.slice(1)}
                  name={field}
                  value={userData[field]}
                  onChange={handleChange}
                  required={["name", "email", "username", "password"].includes(
                    field
                  )}
                  error={Boolean(errors[field])}
                  helperText={errors[field]}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      "&.Mui-focused fieldset": {
                        borderColor: "#e53935",
                      },
                    },
                    "& label.Mui-focused": {
                      color: "#e53935",
                    },
                  }}
                />

                {field === "password" && (
                  <>
                    <LinearProgress
                      variant="determinate"
                      value={(strength + 1) * 20}
                      sx={{
                        height: 8,
                        borderRadius: 5,
                        mt: 1,
                        backgroundColor: "#eee",
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: strengthColors[strength],
                        },
                      }}
                    />
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 1 }}
                    >
                      {feedback || strengthLabels[strength]}
                    </Typography>
                  </>
                )}
              </Grid>
            ))}

            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 2,
                  py: 1.2,
                  fontSize: "16px",
                  textTransform: "none",
                  background:
                    "linear-gradient(90deg, #d32f2f, #e53935, #f44336)",
                  "&:hover": {
                    background:
                      "linear-gradient(90deg, #b71c1c, #c62828, #d32f2f)",
                  },
                }}
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}
    