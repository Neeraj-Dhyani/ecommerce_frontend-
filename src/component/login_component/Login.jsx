import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  IconButton,
  InputAdornment
} from '@mui/material';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from 'react-router';
import {  useNavigate } from 'react-router';
import {useAuth } from './AuthContext';


export default function Login() {
  const [userdata,setuserdata] = useState({
    username:"", 
    password:""
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handlechange = (e)=>{
    setuserdata(prev=>({
      ...prev,
      [e.target.name] : e.target.value
      
    }
  ))
  console.log(e.target.name);
  }
  const submithandler = async(e) =>{
    e.preventDefault()
    try {
      let response = await axios.post("http://localhost:5000/login",userdata,{
         headers: {
              "Content-Type": "application/json"
            }

      });
      setuserdata({
      username:'',
      password: '',
      });
      const token =  response.data.token
      localStorage.setItem("token", token);
      // console.log(response.data.token);
      alert(response.data.msg)
      navigate("/")
      

    } catch (err) {
      if (err.response) {
      alert(err.response.data.msg);
    } else {
      alert("Network Error -Please try again.");
    }
    }

  }
  return (
    <>
       <Box
      sx={{
        height: '100vh',
        background: '#f5f5f5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper elevation={3} sx={{ padding: 4, width: 350, borderRadius: 3 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom align="center">
          Login
        </Typography>
        <Box component="form" onSubmit={submithandler} noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="username"
            type="email"
            onChange={handlechange}
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
              )
            }}
          />
           <Typography align="left" mt={1}>
            <Link to="/Forgotpassword" style={{ textDecoration: 'none', color: '#1976d2' }}>
              forgot Password
            </Link>
          </Typography>

           <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
         
          <Typography align="center" mt={2}>
            <Link to="/signup" style={{ textDecoration: 'none', color: '#1976d2' }}>
              New user? Click here to register
            </Link>
          </Typography>
        </Box>  
      </Paper>
    </Box>
    </>
  )
}
