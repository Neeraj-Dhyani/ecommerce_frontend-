import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";

export default function Forgotpassword() {
  let [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleinput = (e) =>{
    let value = e.target.value;
    setEmail(value);
    console.log(value)
  }
  const handlesubmit=()=>{
    axios.post("http://localhost:5000/sendVerification", {email}, {
      headers:{
              "Content-Type": "application/json"
            }}
    ).then((res)=>{
      alert(res.data)
      navigate("/Resetpassword")
    }).catch((err)=>{
      alert(err.data)
    })
  }
  console.log(email)
  return (
    <>
       <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Card sx={{ width: 400, p: 3, borderRadius: 3, boxShadow: 4 }}>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            Forgot Password
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            align="center"
            sx={{ mb: 2 }}
          >
            Enter your email to receive a verification code
          </Typography>
          <Box component="form" onSubmit={handlesubmit}>
            <TextField
              label="Email Address"
              type="email"
              fullWidth
              onChange={handleinput}
              required
              sx={{ mb: 2 }}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                py: 1.2,
                borderRadius: 2,
                fontWeight: "bold",
              }}
            >
              Send Verification
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
    </>
  )
}
