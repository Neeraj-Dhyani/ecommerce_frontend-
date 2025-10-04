import React, { useState } from 'react';
import axios from 'axios';
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
  Paper
} from '@mui/material';


export default function Signup() {
   const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    country: ''
  });
  const [errors, setErrors] = useState({
    email: ''
  });
   const [strength, setstrength] = useState(0);
  const [feedback, setfeedback] = useState("");

  const handleChange = async (e) => {
    let {name, value} = e.target
    setUserData(prev => ({
      ...prev,
      [name]: e.target.value,
    }));
    //email velidation 
    if(name == "email"){
      if(!validator.isEmail(value)){
        setErrors(prev => ({ ...prev, email: "Invalid email address" }));
      }
      else {
        setErrors(prev => ({ ...prev, email: "" }));
      }
      }
    // password validation 
    if(name=="password"){
      if(value.length < 8){
        setErrors(prev => ({ ...prev, password: "Password must be at least 8 characters" }));
        return;
      }
      }

      if(name=="password"){
        const result = zxcvbn(value);
        setstrength(result.score);
        setfeedback(result.feedback.suggestions.join(" ") || "Strong password");
      const res = await axios.post("http://localhost:5000/checkpassword",{password:value});
      const count = res.data.count
      if (count> 0) {
        setErrors(prev => ({ ...prev, password:`This password has been seen ${count.toLocaleString()} times in breaches.`}));
      } else {
        setErrors(prev => ({ ...prev, password: "" }));
      }
      }
      

  };
  const strengthLabels = ["Very Weak", "Weak", "Fair", "Good", "Strong"];
  const strengthColors = ["#d32f2f", "#f57c00", "#fbc02d", "#388e3c", "#2e7d32"];

  const handleSubmit = async (e) => {
    if(!validator.isEmail(userData.email)){
      setErrors(prev => ({ ...prev, email: "Invalid email address" }));
      return;
    }
    if (userData.password.length < 8 || errors.password) {
      return;
    }
    e.preventDefault();
    try {
      let response = await axios.post("http://localhost:5000/registerUser", userData);
      setUserData({
      name: '',
      email: '',
      username:'',
      password: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      country: ''
    });
      alert(response.data.msg);
    } catch (err) {
      if (err.response) {
      alert(err.response.data.msg || "Registration failed");
    } else {
      alert("Network Error -Please try again.");
    }
    }
    let validateaccout  = validator.isEmail(userData.email);
    console.log(userData);
  };
  return (
    <>
      {/* <Container maxWidth="sm">
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" gutterBottom>
          User Information Form
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>

            <Grid item xs={12}>
              <TextField fullWidth label="Full Name" name="name" onChange={handleChange} required />
            </Grid>

            <Grid item xs={12}>
              <TextField fullWidth type="email" label="Email" name="email"
              error={Boolean(errors.email)}     
                helperText={errors.email} onChange={handleChange} required />
            </Grid>

            <Grid item xs={12}>
              <TextField fullWidth type="text" label="UserName" name="username" onChange={handleChange} required />
            </Grid>
      <Grid item xs={12}>
        <TextField
           fullWidth
           type="password"
           label="Password"
           name="password"
           value={userData.password}
           onChange={handleChange}
           required
           error={Boolean(errors.password)}
           helperText={errors.password || strengthLabels[strength]} />
        <LinearProgress
          variant="determinate"
          value={(strength + 1) * 20} // 0–100
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
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
       {feedback}
      </Typography>
    </Grid>

            <Grid item xs={12}>
              <TextField fullWidth label="Phone Number" name="phone" onChange={handleChange} />
            </Grid>

            <Grid item xs={12}>
              <TextField fullWidth label="Address" name="address" onChange={handleChange} />
            </Grid>

            <Grid item xs={6}>
              <TextField fullWidth label="City" name="city" onChange={handleChange} />
            </Grid>

            <Grid item xs={6}>
              <TextField fullWidth label="State" name="state" onChange={handleChange} />
            </Grid>

            <Grid item xs={6}>
              <TextField fullWidth label="ZIP Code" name="zipcode" onChange={handleChange} />
            </Grid>

            <Grid item xs={6}>
              <TextField fullWidth label="Country" name="country" onChange={handleChange} />
            </Grid>

            <Grid item xs={12}>
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
                Submit
              </Button>
            </Grid>

          </Grid>
        </form>
      </Box>
    </Container> */}
     <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 10, borderRadius: 3 }}>
        <Typography variant="h5" gutterBottom textAlign="center">
          User Information Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/** All fields full width */}
            {["name", "email", "username", "password", "phone", "address", "city", "state", "zipcode", "country"].map((field, index) => (
              <Grid item xs={12} key={index}>
                <TextField
                  fullWidth
                  type={field === "password" ? "password" : "text"}
                  label={field.charAt(0).toUpperCase() + field.slice(1)}
                  name={field}
                  value={userData[field]}
                  onChange={handleChange}
                  required={["name","email","username","password"].includes(field)}
                  error={Boolean(errors[field])}
                  helperText={errors[field]}
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
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                      {feedback || strengthLabels[strength]}
                    </Typography>
                  </>
                )}
              </Grid>
            ))}

            <Grid item xs={12}>
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
    </>
  )
}
